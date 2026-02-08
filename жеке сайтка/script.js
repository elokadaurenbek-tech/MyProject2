// Беттерді ауыстыру
function showPage(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

// Уақытты көрсету (Секундсыз)
function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    // 16:12:12-ден тек 16:12-ні қалдырдық
    document.getElementById('clock').innerText = `${hours}:${minutes}`;
}
setInterval(updateClock, 1000);
updateClock();

// Тапсырмалармен жұмыс
let tasks = JSON.parse(localStorage.getItem('myTasks')) || [];

function addTask() {
    const input = document.getElementById('taskInput');
    const priority = document.getElementById('priority');
    if (input.value === "") return;

    const task = {
        id: Date.now(),
        text: input.value,
        priority: priority.value
    };

    tasks.push(task);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    input.value = "";
    renderTasks();
}

function renderTasks() {
    const list = document.getElementById('taskList');
    list.innerHTML = "";
    tasks.forEach(t => {
        const item = document.createElement('div');
        item.className = 'task-card';
        item.innerHTML = `
            <h3>${t.text}</h3>
            <p>Басымдық: ${t.priority}</p>
            <button class="del-btn" onclick="deleteTask(${t.id})">Өшіру</button>
        `;
        list.appendChild(item);
    });
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    renderTasks();
}

renderTasks();