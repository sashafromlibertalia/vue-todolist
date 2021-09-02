<template>
    <section>
        <TaskTemplate></TaskTemplate>
        <ul class="todo">
            <TodoItem></TodoItem>
        </ul>
    </section>
</template>

<script>
import TaskTemplate from "@/components/TaskTemplate/TaskTemplate";
import TodoItem from "@/components/TodoItem/TodoItem";

export default {
    name: "TasksSection",
    components: {TodoItem, TaskTemplate},
    data() {
        return {
            todos: [
                '🍾  Купить шампанское',
                '🎉  Попасть на стажировку в крупную компанию',
                '🤝 Подписать договор'
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "TasksSection";
</style>