import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo-form.component.html',
  styleUrl: './add-todo-form.component.css'
})

export class AddTodoFormComponent {
  NewTodo = '';
  @Output() addTodo = new EventEmitter<string>();

  addNewTodo() {
    if (this.NewTodo.trim()) {
      this.addTodo.emit(this.NewTodo);
      this.NewTodo = '';
    } else {
      alert('Todo text cannot be empty');
    }
  }
}
