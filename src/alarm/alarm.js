import React, { useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './alarm.css';

const Alarm = () => {
  const navigate = useNavigate();
  const [alarms, setAlarms] = useState([
    { id: 1, title: '아침', time: '8:00 AM', memo: '물 많이 마시기' },
    { id: 2, title: '점심', time: '12:00 PM', memo: '식사 후에 먹기' },
  ]);

  const [editingAlarm, setEditingAlarm] = useState(null);
  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');
  const [repeatDays, setRepeatDays] = useState([]);
  const [time, setTime] = useState('');

  const [showSettings, setShowSettings] = useState(false);

  const days = ['월', '화', '수', '목', '금', '토', '일'];

  const toggleDay = (day) => {
    setRepeatDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const handleSave = () => {
    if (editingAlarm) {
      setAlarms((prev) =>
        prev.map((alarm) =>
          alarm.id === editingAlarm.id
            ? { ...alarm, title, memo, repeatDays, time }
            : alarm
        )
      );
    } else {
      const newAlarm = {
        id: Date.now(),
        title,
        memo,
        repeatDays,
        time,
      };
      setAlarms([...alarms, newAlarm]);
    }

    resetForm();
    setShowSettings(false);
  };

  const resetForm = () => {
    setTitle('');
    setMemo('');
    setRepeatDays([]);
    setTime('');
    setEditingAlarm(null);
  };

  const handleEdit = (alarm) => {
    setEditingAlarm(alarm);
    setTitle(alarm.title);
    setMemo(alarm.memo || '');
    setRepeatDays(alarm.repeatDays || []);
    setTime(alarm.time);
    setShowSettings(true);
  };

  const handleDelete = (id) => {
    setAlarms(alarms.filter((alarm) => alarm.id !== id));
    resetForm();
    setShowSettings(false);
  };

  return (
    <div className="alarm-container">
          <div className="app-bar">
        <button className="back-button" onClick={() => navigate(-1)}>
        <FaChevronLeft />
        </button>
        <span className="app-bar-title">알람 설정</span>
      </div>
      {showSettings ? (
        <div className="alarm-settings">
          <input
            type="text"
            placeholder="알람 이름"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="메모 입력"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
          />
          <div className="repeat-days">
            {days.map((day) => (
              <button
                key={day}
                className={repeatDays.includes(day) ? 'day active' : 'day'}
                onClick={() => toggleDay(day)}
              >
                {day}
              </button>
            ))}
            <button
              className={repeatDays.length === 7 ? 'day active' : 'day'}
              onClick={() =>
                setRepeatDays(repeatDays.length === 7 ? [] : [...days])
              }
            >
              매일
            </button>
          </div>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <div className="btn-row">
            <button onClick={() => (editingAlarm ? handleDelete(editingAlarm.id) : resetForm())}>
              삭제
            </button>
            <button className="btn-save" onClick={handleSave}>
              저장
            </button>
          </div>
          <button className="default-sound">알람 소리 바꾸기</button>
        </div>
      ) : (
        <div className="alarm-list">
          <h2>약 알람</h2>
          <div className="alarm-items">
            {alarms.map((alarm) => (
              <div key={alarm.id} className="alarm-item">
                <div className="info">
                  <strong>{alarm.title}</strong>
                  <span>{alarm.time}</span>
                </div>
                <p>{alarm.memo}</p>
                <div className="btn-row">
                  <button onClick={() => handleEdit(alarm)}>수정</button>
                  <button onClick={() => handleDelete(alarm.id)}>삭제</button>
                </div>
              </div>
            ))}
          </div>
          <button className="black" onClick={() => setShowSettings(true)}>
            알람 추가
          </button>
        </div>
      )}
    </div>
  );
};

export default Alarm;
