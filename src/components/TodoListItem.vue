<template>
    <li class="todo__item">
        <div class="todo__checkbox-container">
            <input class="todo__checkbox" type="checkbox" :id='`checkbox${id}`'>
            <label class="todo__checkmark" :for='`checkbox${id}`'></label>
        </div>
        <h3 class="todo__title">{{ title | fixedLength }}</h3>
    </li>
</template>

<script>

export default {
    name: "TodoListItem",
    props: {
        title: String,
        id: Number
    },
    filters: {
        fixedLength: (value) => {
            return value.length >= 38 ? value.slice(0, 38) + "..." : value
        }
    }
}

</script>

<style scoped lang="scss">
@import "TodoItem/TodoListItem";
</style>