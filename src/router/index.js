import {createRouter, createWebHistory} from  'vue-router'
import TheTasks from '../views/TheTasks.vue'
import TheTask from '../views/TheTask.vue'
import NewTask from '../views/NewTask.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/tasks', component: TheTasks, name: 'Tasks', alias: '/' },
        { path: '/task/:id', component: TheTask, props: true, name: 'Task' },
        { path: '/new', component: NewTask, name: 'New'}
    ],
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})
