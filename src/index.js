import './style.css';
const list = document.getElementById('listtodo')
let completed = false,
todoList = [
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
  todoList.forEach((element) => 
      
          litItems += `<li class="task">
                                  <div>
                                  <input type="checkbox" class="checkme" id="check${element.index}">
                                  <input type="text" value="${element.description}" class="listitem" id="item${element.index}" readonly>
                                  </div>
                                  <div>
                                  <i class="fa-solid fa-pen-to-square edit " id="edit${element.index}" onclick="editItem(${element.index});"></i>
                                  <i class="fa-solid fa-floppy-disk save hide" id="save${element.index}" onclick="saveItem(${element.index});"></i>
                                  <i id="removeicon" onclick="removeItem(${element.index});" class="fa-solid fa-trash"></i>
                                  </div>
                                  
                          </li>`
);
  list.innerHTML = litItems ;
}

showTodo();