/**
 * Constructor function to create a todo
 * 
 * @param {string} title - Title for the todo creating 
 */
export function Todo(title) {
  this.id = Date.now().toString()
  this.title = title
  this.completed = false;
}