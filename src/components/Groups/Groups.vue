<template>
    <div class="groups">
        <header class="groups__container">
            <h1 class="groups__container_header">Группы</h1>
            <inline-svg class="groups__container_btn" alt="Добавить группу" :src="getImageUrl(`plus.svg`)"></inline-svg>
        </header>
        <ul class="groups__list">
        </ul>
    </div>
</template>
<script>
export default {
    name: "Groups"
}
</script>

<style scoped lang="scss">
@import "Groups";
</style>