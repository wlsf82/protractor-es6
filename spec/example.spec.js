'use strict';

describe('angularjs homepage', () => {
  it('should greet the named user', () => {
    browser.get('http://www.angularjs.org');

    element(by.model('yourName')).sendKeys('Julie');

    const greeting = element(by.binding('yourName'));

    expect(greeting.getText()).toEqual('Hello Julie!');
  });

  describe('todo list', () => {
    let todoList;

    beforeEach(() => {
      browser.get('http://www.angularjs.org');

      todoList = element.all(by.repeater('todo in todoList.todos'));
    });

    it('should list todos', () => {
      expect(todoList.count()).toEqual(2);
      expect(todoList.get(1).getText()).toEqual('build an angular app');
    });

    it('should add a todo', () => {
      const addTodo = element(by.model('todoList.todoText'));
      const addButton = element(by.css('[value="add"]'));

      addTodo.sendKeys('write a protractor test');
      addButton.click();

      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
  });
});
