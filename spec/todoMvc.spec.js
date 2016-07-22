'use strict';

const Helper = require('../helper');
const TodoMvc = require('../page-objects/todoMvc.po.js');

describe('Todo MVC Anguar', () => {
  const helper = new Helper();
  const todoMvc = new TodoMvc();

  it('add an item in the todo list', () => {
    todoMvc.visit();

    todoMvc.addItemOnTodoList('Create test without page object');

    expect(todoMvc.listOfItems.count()).toEqual(1);
  });

  it('add new item in the todo list', () => {
    todoMvc.visit();

    todoMvc.addItemOnTodoList('Create new test without page object');

    expect(todoMvc.listOfItems.count()).toEqual(2);
  });

  it('add random value in the todo list', () => {
    const randomString = helper.generateRandomString();

    todoMvc.visit();

    todoMvc.addItemOnTodoList(randomString);

    expect(todoMvc.listOfItems.getText()).toContain(randomString);
  });
});
