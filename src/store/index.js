import { createStore } from 'vuex'

export default createStore({
    state() {
        let tasks = []
        try {
            const storedTasks = localStorage.getItem('my-tasks')
            tasks = storedTasks ? JSON.parse(storedTasks) : []
        } catch (e) {
            console.log()
        }
        return {
            tasks: tasks
        };
    },

    getters: {
        activeTasksCount(state) {
            return state.tasks.filter(t => t.status === 'active').length
        },
        tasks(state) {
            return state.tasks
        },
        taskById(_, getters) {
            return id => getters.tasks.find(t => t.id === id)
        }
    },

    mutations: {
        createTask(state, task) {
            state.tasks.push(task)
            localStorage.setItem('my-tasks', JSON.stringify(state.tasks))
        },
        changeTask(state, task) {
            const idx = state.tasks.findIndex(t => t.id === task.id)
            state.tasks[idx] = task
            localStorage.setItem('my-tasks', JSON.stringify(state.task))
        },

    },

    actions: {
        createTask({ commit }, task) {
            if (task.date < new Date()) {
                task.status = 'cancelled'
            }
            commit('createTask', task)
        },
        changeTask({ commit }, task) {
            commit('changeTask', task)
        }
    },
})