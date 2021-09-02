<template>
    <div class="theme-handler">
        <inline-svg class="theme-handler__switcher" alt="Сменить тему" :src="getImageUrl(`theme-dark.svg`)"></inline-svg>
    </div>
</template>

<script>
export default {
    name: "ThemeHandler"
}
</script>

<style scoped lang="scss">
@import "ThemeHandler";
</style>