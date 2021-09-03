<template>
    <div ref="template" class="task-template">
        <div class="task-template__wrapper">
            <div class="task-template__input">
                <input v-model="todo.header" ref="header" class="task-template__header" type="text" placeholder="Название задачи" @focus="transfer">
            </div>
            <div class="task-template__input">
                <input v-model="todo.description" ref="description" class="task-template__description" type="text" placeholder="Описание" @focus="transfer">
            </div>
        </div>
        <div class="task-template__actions">
            <div class="task-template__actions_inner">
                <inline-svg class="task-template__btn hover" alt="Подзадачи"
                            :src="getImageUrl(`bulleted-list.svg`)"></inline-svg>
                <inline-svg class="task-template__btn" alt="Добавить в группу"
                            :src="getImageUrl(`folder.svg`)"></inline-svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TodoTemplate",
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
        transfer: function() {
            this.$emit("transferredData", this.todo);
        }
    }
}
</script>

<style scoped lang="scss">
@import "TodoTemplate";
</style>