import React, { useState, useEffect } from "react";

const Clock = () => {
  const [now, setNow] = useState(new Date());

  // อัปเดตเวลาใหม่ทุก 1 วินาที
  useEffect(() => {
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    // เคลียร์ interval ตอน component ถูกลบออก
    return () => clearInterval(timer);
  }, []);

  const timeString = now.toLocaleTimeString("th-TH");
  const dateString = now.toLocaleDateString("th-TH", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });

  return (
    <div className="clock">
      <h3 style={{ color: '#722F37', marginBottom: '20px' }}>🕐 เวลาปัจจุบัน</h3>
      <p style={{ color: '#722F37', marginBottom: '20px' }} className="date">{dateString}</p>
      <p style={{ color: '#722F37', marginBottom: '20px' }} className="time">{timeString}</p>
    </div>
  );
};

export default Clock;
