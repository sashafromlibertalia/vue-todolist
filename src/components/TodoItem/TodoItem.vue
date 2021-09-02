<template>
    <li class="todo__item">
        <div class="todo__checkbox-container">
            <input class="todo__checkbox" type="checkbox" id="todo__checkbox">
            <label class="todo__checkmark" for="todo__checkbox"></label>
        </div>
        <h3 class="todo__title">🍾  Купить шампанское</h3>
    </li>
</template>

<script>
export default {
    name: "TodoItem"
}
</script>

<style scoped lang="scss">
@import "TodoItem";
</style>