const input = document.getElementById("friend-input");
const friendList = document.getElementById("friend-list");
const countDisplay = document.getElementById("friend-count");

// เก็บชื่อเพื่อนใน Set เพื่อกันชื่อซ้ำ
const friends = new Set();

function updateCount() {
  countDisplay.textContent = `Total friends: ${friends.size}`;
}

function addFriend() {
  const name = input.value.trim();

  if (name === "") return;
  if (friends.has(name)) {
    alert("ชื่อนี้ถูกเพิ่มไปแล้ว");
    input.value = "";
    return;
  }

  // เพิ่มชื่อเข้า Set
  friends.add(name);

  // สร้าง tag
  const tag = document.createElement("div");
  tag.className = "friend-tag";

  const span = document.createElement("span");
  span.textContent = name;

  const removeBtn = document.createElement("button");
  removeBtn.className = "remove-btn";
  removeBtn.textContent = "×";
  removeBtn.onclick = () => {
    friendList.removeChild(tag);
    friends.delete(name);
    updateCount();
  };

  tag.appendChild(span);
  tag.appendChild(removeBtn);
  friendList.appendChild(tag);

  input.value = "";
  updateCount();
}

// กด Enter เพื่อ add ได้ด้วย
input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addFriend();
  }
});
