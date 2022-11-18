import Vue from 'vue'
import Router from 'vue-router'
import BoardView from './views/BoardView.vue'
import TaskView from './views/TaskView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'board',
      component: BoardView,
      children: [
        {
          path: 'task/:id',
          name: 'task',
          component: TaskView
        }
      ]
    }
  ]
})
