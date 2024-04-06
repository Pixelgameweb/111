const newTaskInput = document.getElementById('newTask');
const taskList = document.getElementById('taskList');

function addTask() {
    const newTask = newTaskInput.value;
    if (newTask === '') {
        alert('Пожалуйста, введите задачу');
        return;
    }

    const li = document.createElement('li');
    li.textContent = newTask;

    const deleteButton = document.createElement('span');
    deleteButton.textContent = ' Удалить';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function () {
        li.remove();
    };

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    newTaskInput.value = '';
}