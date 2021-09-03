<template>
<section>
    <CreateTodo></CreateTodo>
    <SourceButton></SourceButton>
</section>
</template>

<script>
import CreateTodo from "@/components/CreateTodo/CreateTodo";
import SourceButton from "@/components/SourceButton/SourceButton";

export default {
    name: "AddTaskSection",
    components: { CreateTodo, SourceButton }
}
</script>

<style scoped lang="scss">
@import "AddTaskSection";
</style>