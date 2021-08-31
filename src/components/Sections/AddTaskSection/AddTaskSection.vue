<template>
<section>
    <AddTaskButton></AddTaskButton>
    <AddTaskSourceCode></AddTaskSourceCode>
</section>
</template>

<script>
import AddTaskButton from "@/components/AddTaskButton/AddTaskButton";
import AddTaskSourceCode from "@/components/AddTaskSourceCode/AddTaskSourceCode";

export default {
    name: "AddTaskSection",
    components: { AddTaskButton, AddTaskSourceCode }
}
</script>

<style scoped lang="scss">
@import "AddTaskSection";
</style>