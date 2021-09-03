<template>
    <div id="app">
        <section class="info-wrapper">
            <header class="total-counter">
                <h1 class="total-counter__header">
                    На данный момент<span class="total-counter__header_total"> {{todoList.length}} </span>задач
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
                        <MenuItem v-text="item.text" v-for="(item, index) in otherMenu" v-bind:key="index"></MenuItem>
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
                <div ref="template" class="task-template">
                    <div class="task-template__wrapper">
                        <div class="task-template__input">
                            <input v-model="todoItem.header" ref="header" class="task-template__header" type="text"
                                   placeholder="Название задачи">
                        </div>
                        <div class="task-template__input">
                            <input v-model="todoItem.description"  ref="description" class="task-template__description"
                                   type="text" placeholder="Описание">
                        </div>
                    </div>
                    <div class="task-template__actions">
                        <div class="task-template__actions_inner">
                            <inline-svg class="task-template__btn hover" alt="Подзадачи"
                                        :src="getImageUrl(`bulleted-list.svg`)"></inline-svg>
                            <inline-svg class="task-template__btn" alt="Добавить в группу"
                                        :src="getImageUrl(`folder.svg`)"></inline-svg>
                        </div>
                    </div>
                </div>
                <ul class="todo">
                    <TodoItem v-for="(item, index) in todoList" :key="index" :title="item.header"></TodoItem>
                </ul>
            </div>
            <div class="vertical-section">
                <div class="add-button" @click="addTodo">
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
import TodoItem from "@/components/TodoItem/TodoItem";

export default {
    name: 'App',
    components: {
        TodoItem,
        MenuItem
    },
    data() {
        return {
            todoItem: {
                header: "",
                description: "",
                tasks: [],
                groups: []
            },
            otherMenu: [
                {
                    text: '🥂 Выполненное'
                },
                {
                    text: '🗑 Корзина'
                }
            ],
            todoList: []
        }
    },
    methods: {
        addTodo() {
            if (this.todoItem.header === "") return
            this.todoList = [{
                header: this.todoItem.header,
                description: this.todoItem.description,
                tasks: this.todoItem.tasks,
                groups: this.todoItem.groups
            }, ...this.todoList]

            this.todoItem.header = ""
            this.todoItem.description = ""
            this.todoItem.tasks.length = 0
            this.todoItem.groups.length = 0
        }
    }
}
</script>

<style lang="scss">
@import "main";
</style>
