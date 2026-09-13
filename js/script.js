const todoInput = document.querySelector(".todo-input")
const todoForm = document.querySelector(".todo-actions")
const todoList = document.querySelector(".todo-list")
const deleteBtn = document.querySelector(".delete-btn")

function createTodo(todo) {
    const li = document.createElement("li")
    const name = document.createElement("p")
    const delBtn = document.createElement("button")
    const delBtnIcon = document.createElement("i")
    const check = document.createElement("input")

    li.classList.add("task")

    name.textContent = todo

    delBtn.classList.add("delete-btn")
    delBtnIcon.classList.add("fa-solid", "fa-trash")
    delBtn.addEventListener("click", () => {
        li.remove()
    })

    check.type = "checkbox"
    check.addEventListener("change", () => {
        if (check.checked) {
            li.classList.add("done")
        } else {
            li.classList.remove("done")
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

    const todo = todoInput.value.trim()

    if (!todo) {
        todoInput.value = ""

        return
    }

    createTodo(todo)

    todoInput.value = ""
})
