let todos: { id: number; title: string }[] = []

export function resetTodos() {
  todos = []
}

export async function getTodos() {
    return todos
}

export async function postTodo(
    todo: {
        id: number;
        title: string
    }) {
    todos.push(todo)
    return todo
}