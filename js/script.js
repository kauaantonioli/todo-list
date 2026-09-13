const todoInput = document.querySelector(".todo-input")
const todoForm = document.querySelector(".todo-actions")
const todoList = document.querySelector(".todo-list")
const deleteBtn = document.querySelector(".delete-btn")

let todos = JSON.parse(localStorage.getItem("todos")) || []

todos.forEach((todo) => {
    createTodo(todo)
})

function createTodo(todo) {
    const li = document.createElement("li")
    const name = document.createElement("p")
    const delBtn = document.createElement("button")
    const delBtnIcon = document.createElement("i")
    const check = document.createElement("input")

    li.classList.add("task")

    name.textContent = todo.name

    delBtn.classList.add("delete-btn")
    delBtnIcon.classList.add("fa-solid", "fa-trash")
    delBtn.addEventListener("click", () => {
        todos = todos.filter((t) => {
            return t !== todo
        })

        li.remove()

        localStorage.setItem("todos", JSON.stringify(todos))
    })

    check.type = "checkbox"
    check.checked = todo.completed
    if (todo.completed) {
        li.classList.add("done")
    }
    check.addEventListener("change", () => {
        if (check.checked) {
            li.classList.add("done")
            todo.completed = true
            localStorage.setItem("todos", JSON.stringify(todos))
        } else {
            li.classList.remove("done")
            todo.completed = false
            localStorage.setItem("todos", JSON.stringify(todos))
        }
    })

    delBtn.appendChild(delBtnIcon)
    li.appendChild(check)
    li.appendChild(name)
    li.appendChild(delBtn)
    todoList.appendChild(li)
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const todo = {
        name: todoInput.value.trim(),
        completed: false,
    }

    if (!todo.name) {
        alert("Não é possível adicionar uma tarefa vazia!")
        todoInput.value = ""

        return
    }

    createTodo(todo)
    todos.push(todo)

    localStorage.setItem("todos", JSON.stringify(todos))

    todoInput.value = ""
})
