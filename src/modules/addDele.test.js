/* global add */
/* eslint no-undef: "error" */
const todoList = require('./main.js');

// Mocks for localStorage and list element
const localStorageMock = {
  setItem: jest.fn(),
  getItem: jest.fn(),
};
const listMock = {
  innerHTML: '',
};

// Set up mocks
global.localStorage = localStorageMock;
global.document.getElementById = jest.fn(() => listMock);

describe('add function', () => {
  it('adds a new item to the todoList array and updates localStorage', () => {
    // Initialize the todoList array with some initial values
    todoList.length = 0;
    todoList.push({ index: 0, description: 'item 1', completed: false });
    todoList.push({ index: 1, description: 'item 2', completed: true });

    // Call the add function with a new item
    add('item 3');

    // Verify that the add function was called with the correct arguments
    expect(localStorage.setItem).toHaveBeenCalledWith('todo-list', JSON.stringify([
      { index: 0, description: 'item 1', completed: false },
      { index: 1, description: 'item 2', completed: true },
      { index: 2, description: 'item 3', completed: false },
    ]));

    // Verify that the todoList array has the expected values
    expect(todoList).toEqual([
      { index: 0, description: 'item 1', completed: false },
      { index: 1, description: 'item 2', completed: true },
      { index: 2, description: 'item 3', completed: false },
    ]);
  });
});

describe('delete function', () => {
  it('deletes an item from the todoList array and updates localStorage', () => {
    // Initialize the todoList array with some initial values
    todoList.length = 0;
    todoList.push({ index: 0, description: 'item 1', completed: false });
    todoList.push({ index: 1, description: 'item 2', completed: true });
    todoList.push({ index: 2, description: 'item 3', completed: false });

    // Call the delete function with an index to delete
    delete (1);

    // Verify that the delete function was called with the correct arguments
    expect(localStorage.setItem).toHaveBeenCalledWith('todo-list', JSON.stringify([
      { index: 0, description: 'item 1', completed: false },
      { index: 2, description: 'item 3', completed: false },
    ]));

    // Verify that the todoList array has the expected values
    expect(todoList).toEqual([
      { index: 0, description: 'item 1', completed: false },
      { index: 2, description: 'item 3', completed: false },
    ]);
  });
});
