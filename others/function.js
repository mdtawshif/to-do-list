document.getElementById('addTask').addEventListener('click', function () {
    const addField = document.getElementById('taskInput');
    const newTask = addField.value;
    const allTasks = document.getElementById('allTasks');

    const taskList = document.createElement("li");
    taskList.innerText = newTask;
    allTasks.appendChild(taskList);

    const initialDisplay = document.getElementById('hide-open');
    initialDisplay.style.display = 'none';
    addField.value = '';

})