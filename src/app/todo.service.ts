import { Injectable } from '@angular/core';
import { ToDo } from '../shared/models/todoItem';

@Injectable({
  providedIn: 'root'
})
class TodoService {
  private localStorageKey = 'todos';

  constructor() { }

  getTodos(): ToDo[] {
    const todosJson = localStorage.getItem(this.localStorageKey);
    return todosJson ? JSON.parse(todosJson) : [];
  }

  saveTodos(todos: ToDo[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(todos));
  }
}

export { TodoService };