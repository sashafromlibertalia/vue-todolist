<template>
    <div id="app">
        <InfoSection></InfoSection>
        <TasksSection></TasksSection>
        <AddTaskSection></AddTaskSection>
    </div>
</template>

<script>
import InfoSection from "@/components/Sections/InfoSection/InfoSection";
import TasksSection from "@/components/Sections/TasksSection/TasksSection";
import AddTaskSection from "@/components/Sections/AddTaskSection/AddTaskSection";

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
::selection {
    background: $selection__background;
    color: $selection__color;
}
* {
    box-sizing: border-box;
}
#app {
    display: flex;
    flex-direction: row;
    padding: 3%;
}
</style>
