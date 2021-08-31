<template>
<section>
    <TotalCounter></TotalCounter>
    <Groups></Groups>
</section>
</template>

<script>
import TotalCounter from "@/components/TotalCounter/TotalCounter";
import Groups from "@/components/Groups/Groups";

export default {
    name: "InfoSection",
    components: {Groups, TotalCounter}
}
</script>

<style scoped lang="scss">
@import "InfoSection";
</style>