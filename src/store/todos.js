import { makeAutoObservable } from "mobx"

class Todos {

  /* Array with all existing todo-s in the application */
  todos = [
    { id: '1', title: "Освоить MobX", completed: true },
    { id: '2', title: "Написать To-do приложение для Априкод", completed: true },
    { id: '3', title: "Отправить решение на оценку и ревью", completed: true },
    { id: '4', title: "Пройти ревью приложение", completed: false },
    { id: '5', title: "Пройти собеседование", completed: false },
  ]

  /* Selected category todos to display (all, completed, unCompleted) */
  selectedFilter = 'all'

  /* Getter to get the desired todos list (based on filter) */
  get selectedTodos() {
    switch (this.selectedFilter) {
      case 'completed': {
        return this.todos.filter(todo => todo.completed)
      }
      case 'unCompleted': {
        return this.todos.filter(todo => !todo.completed)
      }
      default: return this.todos
    }
  }

  /* Getters for counting remaining todo by category */
  get completedTodoCount() {
    return this.todos.filter(todo => todo.completed).length
  }
  
  get unCompletedTodoCount() {
    return this.todos.filter(todo => !todo.completed).length
  }

  get allTodoCount() {
    return this.todos.length
  }


  constructor() {
    makeAutoObservable(this)
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }

  completeTodo(id) {
    this.todos = this.todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
  }
}

export default new Todos()