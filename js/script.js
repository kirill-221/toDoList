const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

const toDoData = [];
let age = JSON.parse(localStorage.getItem('toDoData'));
console.log(age);
// console.log(toDoData, typeof toDoData);

// localStorage.clear(toDoData);

const render = function () {
    todoList.innerHTML = '';
    todoCompleted.innerHTML = '';
    toDoData.forEach(function (item) {
        const li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML =
            '<span class="text-todo">' +
            item.text +
            '</span>' +
            " <div class='todo-buttons'>" +
            "<button class='todo-remove'></button>" +
            "<button class='todo-complete'></button>" +
            '</div>';
        if (item.completed) {
            todoCompleted.append(li);
        } else if (item.text === '' || item.text === null) {
        } else {
            todoList.append(li);
        }

        li.querySelector('.todo-complete').addEventListener(
            'click',
            function () {
                item.completed = !item.completed;
                render();
            }
        );
        li.querySelector('.todo-remove').addEventListener('click', function () {
            toDoData.splice(0, 1);
            render();
        });
    });
    localStorage.setItem('toDoData', JSON.stringify(toDoData));
};

todoControl.addEventListener('submit', function (event) {
    event.preventDefault();

    const newToDo = {
        text: headerInput.value,
        completed: false,
    };

    toDoData.push(newToDo);
    headerInput.value = '';

    render();
});
