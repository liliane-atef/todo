import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ToDo } from '../shared/models/todoItem';
import { TodoService } from './todo.service';
import { AddTodoFormComponent } from './add-todo-form/add-todo-form.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, AddTodoFormComponent, TodoListComponent],
  providers: [TodoService, AuthService, AuthGuard],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  items: ToDo[] = [
    // new ToDo('read a book'),
  ]

  title = 'ToDo List';

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.items = this.todoService.getTodos();
  }

  removeCompletedItem() {
    setTimeout(() => {
      this.items = this.items.filter(item => !item.isComplete);
      this.saveTodos();
    }, 500);
  }

  removeItem(index: number): void {
    this.items.splice(index, 1);
    this.saveTodos();
  }

  addNewTodo = (todoText: string) => {
    this.items.push(new ToDo(todoText));
    this.saveTodos();
  }

  removeAllItems = () => {
    if (this.items.length == 0) {
      alert('The list is already empty')
    }
    else {
      if (confirm('Are you sure you want to remove all items?')) {
        this.items = [];
        this.saveTodos();
      }
    }
  }

  private saveTodos(): void {
    this.todoService.saveTodos(this.items);
  }

  // logout(): void {
  //   this.authService.logout();
  //   this.router.navigate(['/login']);
  // }
}
