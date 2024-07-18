import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TodoService } from './todo.service';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], 
      providers: [TodoService],
      declarations: [], 
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with empty todo items', () => {
    expect(component.items).toEqual([]);
  });

  it('should add a new todo item', () => {
    const initialLength = component.items.length;
    const newTodoText = 'Test todo item';
    component.addNewTodo(newTodoText);
    expect(component.items.length).toBe(initialLength + 1);
    expect(component.items.some(item => item.ToDoText=== newTodoText)).toBeTrue();
  });
});

