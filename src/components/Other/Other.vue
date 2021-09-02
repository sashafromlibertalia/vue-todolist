<template>
    <div class="groups">
        <header class="groups__container">
            <h1 class="groups__container_header">Другое</h1>
        </header>
        <ul class="groups__list">
            <li class="groups__list-item" v-for="item in items" v-bind:key="item.text">
                {{ item.text }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Other",
    data() {
        return {
            items: [
                { text: '🥂 Выполненное'},
                { text: '🗑 Корзина' }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
@import "Other";
@import "./src/components/Groups/Groups";
</style>