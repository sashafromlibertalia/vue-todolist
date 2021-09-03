<template>
    <section>
        <div class="vertical-section">
            <TodoTemplate></TodoTemplate>
            <ul class="todo">
                <TodoItem v-for="(todo, index) in todos" :title="todo.header" :key="index"></TodoItem>
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
import TodoTemplate from "@/components/TodoTemplate/TodoTemplate";
import TodoItem from "@/components/TodoItem/TodoItem";

export default {
    name: "TodoList",
    components: {TodoItem, TodoTemplate},
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