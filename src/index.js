/* eslint-disable  */
import './style.css';

const list = document.getElementById('listtodo');
const completed = false;
const todoList = [
  {
    "description": "wash the dishes",
    "completed" : completed,
    "index" : 0
  },
  {
    "description": "wash the dishes",
    "completed" : completed,
    "index" : 1
  },
];

function showTodo() {
  let litItems = "";
  todoList.forEach((element) => litItems += `<li class="task">
                                  <div>
                                  <input type="checkbox" class="checkme" id="check${element.index}">
                                  <input type="text" value="${element.description}" class="listitem" id="item${element.index}" readonly>
                                  </div>
                                  <div>
                                  <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}");"></i>
                                  <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" "></i>
                                  <i id="removeicon"  class="fa-solid fa-trash"></i>
                                  </div>
                          </li>`
  );

  list.innerHTML = litItems;
}

showTodo();