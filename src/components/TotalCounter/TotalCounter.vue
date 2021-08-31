<template>
    <header class="total-counter">
        <h1 class="total-counter__header">
            На данный момент<span class="total-counter__header_total"> 5 </span>задач
        </h1>
        <div class="total-counter__reset-btn">Сбросить все задачи</div>
    </header>
</template>

<script>
export default {
    name: "TotalCounter"
}
</script>

<style scoped lang="scss">
@import "TotalCounter";
</style>