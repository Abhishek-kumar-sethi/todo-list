document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    console.log(taskInput)
    console.log(addTaskBtn)
    console.log(taskList)
    addTaskBtn.addEventListener('click', addTask);
    function addTask() {
        const taskText = taskInput.value;

        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.className = 'taskItem';

            const taskTextElement = document.createElement('span');
            taskTextElement.textContent = taskText;

            const deleteBtn = document.createElement('span');
            deleteBtn.className = 'deleteBtn';
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                taskItem.remove();
            });

            taskItem.appendChild(taskTextElement);
            taskItem.appendChild(deleteBtn);
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }
});