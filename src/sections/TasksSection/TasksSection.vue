<template>
<section>
<TaskTemplate></TaskTemplate>
</section>
</template>

<script>
import TaskTemplate from "@/components/TaskTemplate/TaskTemplate";
export default {
    name: "TasksSection",
    components: {TaskTemplate}
}
</script>

<style scoped lang="scss">
@import "TasksSection";
</style>