function updateClock() {
  const now = new Date();

  const hour = String(now.getHours()).padStart(2, '0');
  const minute = String(now.getMinutes()).padStart(2, '0');
  const second = String(now.getSeconds()).padStart(2, '0');

  const timeString = `${hour}:${minute}:${second}`;
  document.getElementById("clock").textContent = timeString;
}

// เรียกตอนโหลด และตั้ง interval ทุก 1 วินาที
updateClock();
setInterval(updateClock, 1000);
