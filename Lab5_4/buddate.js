function validateDate() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const buddhistYear = parseInt(document.getElementById("year").value);
  const gregorianYear = buddhistYear - 543;

  // ตรวจสอบว่าเป็นตัวเลขทั้งหมด
  if (isNaN(day) || isNaN(month) || isNaN(gregorianYear)) {
    alert("false");
    return;
  }

  const date = new Date(gregorianYear, month - 1, day); // month เริ่มที่ 0

  // ตรวจสอบความถูกต้องของวันที่
  if (
    date.getFullYear() !== gregorianYear ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    alert("false");
    return;
  }

  // วันในสัปดาห์
  const dayOfWeek = date.getDay(); // 0 = Sunday, ... 6 = Saturday
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  alert(`${dayOfWeek} -> ${dayNames[dayOfWeek]}`);
}
