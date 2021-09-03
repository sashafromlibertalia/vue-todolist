<template>
    <div class="add-button">
        <div class="add-button__container">
            Добавить задачу
        </div>
    </div>
</template>

<script>

export default {
    name: "CreateTodo",
    data() {
        return {
            todo: {
                header: "",
                description: "",
                tasks: [],
                groups: []
            }
        }
    },
    methods: {

    }
}
</script>

<style scoped lang="scss">
@import "CreateTodo";
</style>