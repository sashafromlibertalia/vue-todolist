<template>
<section>
    <AddTaskButton></AddTaskButton>
    <AddTaskSourceCode></AddTaskSourceCode>
</section>
</template>

<script>
import AddTaskButton from "@/components/AddTaskSection/AddTaskButton/AddTaskButton";
import AddTaskSourceCode from "@/components/AddTaskSection/AddTaskSourceCode/AddTaskSourceCode";

export default {
    name: "AddTaskSection",
    components: { AddTaskButton, AddTaskSourceCode }
}
</script>

<style scoped lang="scss">
@import "AddTaskSection";
</style>