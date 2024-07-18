import { Component, Input, Output, EventEmitter, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToDo } from '../../shared/models/todoItem';
import { AuthService } from '../auth.service';
import { AuthGuard } from '../auth.guard';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [AuthService, AuthGuard],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})

export class TodoListComponent {
  @Input() items: ToDo[] = [];
  @Output() itemRemoved = new EventEmitter<number>();
  @Output() completedItemRemoved = new EventEmitter<void>();
  constructor(
    private authService: AuthService,  // <-- Inject AuthService
    private router: Router
  ) {}
  removeCompletedItems() {
    this.completedItemRemoved.emit();
  }

  removeItem(index: number): void {
    this.itemRemoved.emit(index);
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
