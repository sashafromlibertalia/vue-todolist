<template>
    <div id="app">
        <InfoSection></InfoSection>
        <TasksSection></TasksSection>
        <AddTaskSection></AddTaskSection>
    </div>
</template>

<script>
import InfoSection from "@/components/InfoSection/InfoSection";
import TasksSection from "@/components/TasksSection/TasksSection";
import AddTaskSection from "@/components/AddTaskSection/AddTaskSection";

export default {
    name: 'App',
    components: {
        InfoSection,
        TasksSection,
        AddTaskSection
    }
}
</script>

<style lang="scss">
@import "assets/variables";
* {
    box-sizing: border-box;
}
#app {
    display: flex;
    flex-direction: row;
    padding: 3%;
}
</style>
