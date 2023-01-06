/* eslint-disable  */
const todoList = require('./main.js');
const list = document.getElementById('listtodo');
const inputAdd = document.querySelector('.input input');

const completed = false;
const index = 0;

// Mocking localStorage object
const mockStorage = {
  todoList: [],
  setItem: (key, value) => {
    mockStorage[key] = value;
  },
  getItem: (key) => mockStorage[key],
  removeItem: (key) => {
    delete mockStorage[key];
  },
};

// Mocking DOM elements
const mockList = {
  innerHTML: '',
  set innerHTML(html) {
    this.innerHTML = html;
  },
  get innerHTML() {
    return this.innerHTML;
  },
};

const mockInput = {
  value: '',
  set value(value) {
    this.value = value;
  },
  get value() {
    return this.value;
  },
};

// Test group for editFunc function
describe('editFunc function', () => {
  it('should enable editing of a task when called', () => {
    // Arrange
    const mockTask = {
      index: 0,
      description: 'Buy milk',
      completed: false,
    };
    todoList = [mockTask];
    mockStorage.todoList = [mockTask];
    showList();
    const mockEditButton = document.getElementById('edit0');
    const mockSaveButton = document.getElementById('save0');
    const mockInputField = document.getElementById('item0');
    // Act
    window.editFunc(0);

    // Assert
    expect(mockEditButton.style.display).toBe('none');
    expect(mockSaveButton.style.display).toBe('flex');
    expect(mockInputField.readOnly).toBe(false);
  });
});

// Test group for saveFunc function
describe('saveFunc function', () => {
  it('should save the edited task when called', () => {
    // Arrange
    const mockTask = {
      index: 0,
      description: 'Buy milk',
      completed: false,
    };
    todoList = [mockTask];
    mockStorage.todoList = [mockTask];
    showList();
    const mockEditButton = document.getElementById('edit0');
    const mockSaveButton = document.getElementById('save0');
    const mockInputField = document.getElementById('item0');
    mockInputField.value = 'Buy 2% milk';

    // Act
    window.saveFunc(0);

    // Assert
    expect(mockEditButton.style.display).toBe('flex');
    expect(mockSaveButton.style.display).toBe('none');
    expect(mockInputField.readOnly).toBe(true);
  });
});
// Test group for checkFunc function
describe('checkFunc function', () => {
  it('should update the "completed" status of a task when called', () => {
    // Arrange
    const mockTask = {
      index: 0,
      description: 'Buy milk',
      completed: false,
    };
    todoList = [mockTask];
    mockStorage.todoList = [mockTask];
    showList();
    const mockCheckbox = document.getElementById('check0');
    // Act
    window.checkFunc(0);

    // Assert
    expect(todoList[0].completed).toBe(true);
    expect(mockStorage.todoList[0].completed).toBe(true);
    expect(mockCheckbox.checked).toBe(true);
  });
});