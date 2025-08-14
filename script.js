function addTask() {
    const taskText = document.getElementById("taskText").value.trim();
    const taskDate = document.getElementById("taskDate").value;
    const taskTime = document.getElementById("taskTime").value;

    if (!taskText) {
        alert("Please enter a task.");
        return;
    }

    let dayName = "";
    if (taskDate) {
        const dateObj = new Date(taskDate);
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        dayName = days[dateObj.getDay()];
    }

    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.classList.add("task");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");

    const taskName = document.createElement("span");
    taskName.classList.add("task-name");
    taskName.textContent = taskText;

    const taskTimeEl = document.createElement("span");
    taskTimeEl.classList.add("task-time");

    if (taskDate && taskTime) {
        taskTimeEl.textContent = `Due: ${taskDate} (${dayName}) at ${taskTime}`;
    } else if (taskDate) {
        taskTimeEl.textContent = `Due: ${taskDate} (${dayName})`;
    } else {
        taskTimeEl.textContent = "No due date/time set";
    }

    taskInfo.appendChild(taskName);
    taskInfo.appendChild(taskTimeEl);

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    const completeBtn = document.createElement("button");
    completeBtn.classList.add("complete-btn");
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';
    completeBtn.onclick = () => {
        taskName.classList.toggle("complete");
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
    deleteBtn.onclick = () => {
        li.remove();
    };

    actions.appendChild(completeBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(taskInfo);
    li.appendChild(actions);
    taskList.appendChild(li);

    document.getElementById("taskText").value = "";
    document.getElementById("taskDate").value = "";
    document.getElementById("taskTime").value = "";
}