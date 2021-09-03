<template>
    <li class="todo__item">
        <div class="todo__checkbox-container">
            <input class="todo__checkbox" type="checkbox">
            <span class="todo__checkmark"></span>
        </div>
        <h3 class="todo__title">{{ title | fixedLength }}</h3>
    </li>
</template>

<script>
export default {
    name: "TodoItem",
    props: {
        title: String
    },
    filters: {
        fixedLength: (value) => {
            return value.length >= 32 ? value.slice(0, 32) + "..." : value
        }
    }
}

</script>

<style scoped lang="scss">
@import "TodoItem";
</style>