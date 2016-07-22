'use strict';

class TodoMvc {
  constructor() {
    this.listOfItems = element.all(by.css('.view'));
    this.newTodoField = element(by.id('new-todo'));
  }

  addItemOnTodoList(item) {
    this.newTodoField.sendKeys(item);
    this.newTodoField.sendKeys(protractor.Key.ENTER);
  }

  visit() {
    browser.get('http://todomvc.com/examples/angularjs/#/');
  }
}

module.exports = TodoMvc;
