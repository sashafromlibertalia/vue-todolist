<template>
    <section>
        <div class="vertical-section">
            <BaseTodoTemplate></BaseTodoTemplate>
            <ul class="todo">
                <TodoListItem v-for="(todo, index) in todos" :title="todo.header" :key="index"></TodoListItem>
            </ul>
        </div>
        <div class="vertical-section">
            <div class="add-button" @click="addTodo">
                <div class="add-button__container">
                    Добавить задачу
                </div>
            </div>
            <div class="add-button">
                <a href="https://github.com/sashafromlibertalia/vue-todolist" class="add-button__source-code" target="_blank">Исходный код</a>
            </div>
        </div>
    </section>
</template>

<script>
import BaseTodoTemplate from "@/components/TodoTemplate/BaseTodoTemplate";
import TodoListItem from "@/components/TodoListItem";

export default {
    name: "TodoList",
    components: {TodoListItem, BaseTodoTemplate},
    data() {
        return {
            todos: [
                {
                    header: '🍾  Купить шампанское',
                    description: '"Dom Perignon", Rose Vintage 2003 Brut',
                    tasks: [],
                    groups: []
                }
            ]
        }
    },
    methods: {
        addTodo(item) {
            this.todos.push({
                header: item.header,
                description: item.description,
                tasks: item.tasks,
                groups: item.groups
            })
        }
    }
}
</script>

<style scoped lang="scss">
@import "src/components/CreateTodo/CreateTodo";
@import "TodoList";
</style>