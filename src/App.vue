<template>
    <div id="app">
        <section class="info-wrapper">
            <header class="total-counter">
                <h1 class="total-counter__header">
                    На данный момент<span class="total-counter__header_total"> 5 </span>задач
                </h1>
                <div class="total-counter__reset-btn">Сбросить все задачи</div>
            </header>
            <div class="menu-wrapper">
                <div class="menu">
                    <header class="menu__container">
                        <h1 class="menu__container_header">Группы</h1>
                        <inline-svg class="menu__container_btn" alt="Добавить группу"
                                    :src="getImageUrl(`plus.svg`)"></inline-svg>
                    </header>
                    <ul class="menu__list">
                        <MenuItem></MenuItem>
                    </ul>
                </div>
                <div class="menu">
                    <header class="menu__container">
                        <h1 class="menu__container_header">Другое</h1>
                    </header>
                    <ul class="menu__list">
                        <li class="menu__list-item" v-for="item in otherMenu" v-bind:key="item.text">
                            {{ item.text }}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="theme-handler">
                <inline-svg class="theme-handler__switcher" alt="Сменить тему"
                            :src="getImageUrl(`theme-dark.svg`)"></inline-svg>
            </div>
        </section>
        <section class="todo-wrapper">
            <div class="vertical-section">
                <TodoTemplate></TodoTemplate>
                <ul class="todo">
                    <TodoItem></TodoItem>
                </ul>
            </div>
            <div class="vertical-section">
                <div class="add-button">
                    <div class="add-button__container">
                        Добавить задачу
                    </div>
                </div>
                <div class="add-button">
                    <a href="https://github.com/sashafromlibertalia/vue-todolist" class="add-button__source-code"
                       target="_blank">Исходный код</a>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import MenuItem from "@/components/MenuItem/MenuItem";
import TodoTemplate from "@/components/TodoTemplate/TodoTemplate";
import TodoItem from "@/components/TodoItem/TodoItem";

export default {
    name: 'App',
    components: {
        TodoItem,
        TodoTemplate,
        MenuItem
    },
    data() {
        return {
            otherMenu: [
                {text: '🥂 Выполненное'},
                {text: '🗑 Корзина'}
            ]
        }
    }
}
</script>

<style lang="scss">
@import "variables";

::selection {
    background: $selection__background;
    color: $selection__color;
}

html {
    height: 100%;
}

body {
    height: 98%;
}

* {
    box-sizing: border-box;
}

#app {
    display: flex;
    flex-direction: row;
    padding: 3%;
    height: 100%;

}

.info-wrapper {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}


@import "src/components/ThemeHandler/ThemeHandler";
@import "src/components/TotalCounter/TotalCounter";
@import "src/components/MenuItem/Menu";
@import "src/sections/Todos/TodoList";
@import "src/components/CreateTodo/CreateTodo";
</style>
