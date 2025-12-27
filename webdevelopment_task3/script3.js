const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");
const taskInput = document.getElementById("taskInput");

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;

  const time = new Date().toLocaleString();
  const li = createTask(text, time);
  pendingList.appendChild(li);

  taskInput.value = "";
}

function createTask(text, timeAdded) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = text;

  const time = document.createElement("div");
  time.className = "time";
  time.textContent = "Added: " + timeAdded;

  const actions = document.createElement("div");
  actions.className = "task-actions";

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.className = "complete-btn";
  completeBtn.onclick = () => completeTask(li, time);

  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.className = "edit-btn";
  editBtn.onclick = () => editTask(span);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.className = "delete-btn";
  deleteBtn.onclick = () => li.remove();

  actions.append(completeBtn, editBtn, deleteBtn);
  li.append(span, time, actions);

  return li;
}

function completeTask(li, timeDiv) {
  timeDiv.textContent += " | Completed: " + new Date().toLocaleString();
  li.querySelector(".complete-btn").remove();
  completedList.appendChild(li);
  launchConfetti();
}

function editTask(span) {
  const newText = prompt("Edit task:", span.textContent);
  if (newText && newText.trim()) span.textContent = newText;
}

const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function launchConfetti() {
  const pieces = [];
  for (let i = 0; i < 100; i++) {
    pieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 10,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`
    });
  }

  let frame = 0;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach(p => {
      ctx.beginPath();
      ctx.fillStyle = p.color;
      ctx.arc(p.x, p.y += p.d, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    frame++;
    if (frame < 40) requestAnimationFrame(draw);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  draw();
}
