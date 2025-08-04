const display = document.getElementById("display");
const history = [];

function saveHistory() {
  history.push(display.value);
}

function append(value) {
  saveHistory();
  display.value += value;
}

function clearDisplay() {
  saveHistory();
  display.value = '';
}

function undo() {
  if (history.length > 0) {
    display.value = history.pop();
  } else {
    display.value = '';
  }
}

function calculate() {
  saveHistory();
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
