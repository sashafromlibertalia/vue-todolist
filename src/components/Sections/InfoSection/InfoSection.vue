<template>
<section>
    <TotalCounter></TotalCounter>
    <Lists></Lists>
    <ThemeHandler></ThemeHandler>
</section>
</template>

<script>
import TotalCounter from "@/components/TotalCounter/TotalCounter";
import ThemeHandler from "@/components/Items/ThemeHandler/ThemeHandler";
import Lists from "@/components/Lists/Lists";
export default {
    name: "InfoSection",
    components: {Lists, ThemeHandler, TotalCounter}
}
</script>

<style scoped lang="scss">
@import "InfoSection";
</style>