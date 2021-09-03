<template>
<div class="groups-wrapper">
    <Groups></Groups>
    <Other></Other>
</div>
</template>

<script>
import Groups from "@/components/MenuItem/MenuItem";
import Other from "@/components/Other/Other";

export default {
    name: "Lists",
    components: {Other, Groups}
}
</script>

<style scoped lang="scss">
.groups-wrapper {
    margin-bottom: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
</style>