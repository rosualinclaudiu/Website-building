Vue.component("task",{
    template: `<li v-for="(todo, index) in todos" v-bind:class="{done: task_isDone}"
                    class="task">
                    <div class="title" >
                        {{task_title}}
                    </div>
                    <div class="controls">
                    <div class="check" @click="checkTodo('checked')">✅</div>
                    <div class="delete" @click="deleteTodo('deleted')">❌</div>
                    </div>
                </li>`,
props: [task_title, task_isDone]
})


class Todo {
    constructor(title) {
        this.title = title;
        this.isDone = false;
    }
    switchDone() {
        this.isDone = !this.isDone;
    }
}


var app =  new Vue({
    el : "#app",
    data: {
        
            todos: [
                new Todo('Wake up'),
                new Todo('Eat breakfast'),
                new Todo('Go to work')
            ],
            task: '',
            showDone: true
    },
    methods: {
        saveTodo() {
            // adaugam valoarea din task in lista de todo
            this.todos.push(new Todo(this.task));
            // resetam task-ul
            this.task = '';
        },
        checkTodo(index) {
            this.todos[index].switchDone()
        },
        deleteTodo(index) {
            this.todos.splice(index, 1)
        }
    }
});