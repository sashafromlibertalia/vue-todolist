<template>
    <div ref="template" class="task-template">
        <div class="task-template__wrapper">
            <div class="task-template__input">
                <input ref="header" class="task-template__header" type="text" placeholder="Название задачи">
            </div>
            <div class="task-template__input">
                <input ref="description" class="task-template__description" type="text" placeholder="Описание">
            </div>
        </div>
        <div class="task-template__actions">
            <div class="task-template__actions_inner">
                <inline-svg class="task-template__btn" alt="Подзадачи"
                            :src="getImageUrl(`bulleted-list.svg`)"></inline-svg>
                <inline-svg class="task-template__btn" alt="Добавить в группу"
                            :src="getImageUrl(`folder.svg`)"></inline-svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskTemplate"
}
</script>

<style scoped lang="scss">
@import "TaskTemplate";
</style>