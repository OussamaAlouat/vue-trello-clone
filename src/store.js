import Vue from 'vue'
import Vuex from 'vuex'
import { saveStatePlugin, uuid } from './utils'
import { remove } from 'lodash'
import state from './store/state'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [saveStatePlugin],
  state: { ...state },
  mutations: {
    CREATE_TASK (state, { tasks, name }) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    },
    CREATE_COLUMN (state, { name }) {
      state.board.columns.push({
        name,
        tasks: []
      });
    },
    UPDATE_TASK (state, { task, key, value }) {
      task[key] = value;
    },
    MOVE_TASK (state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
      const taskToMove = fromTasks.splice(fromTaskIndex, 1)[0]
      toTasks.splice(toTaskIndex, 0, taskToMove);
    },
    MOVE_COLUMN (state, { fromColumnIndex, toColumnIndex }) {
      const columnList = state.board.columns;
      const columnToMove = columnList.splice(fromColumnIndex, 1)[0];
      columnList.splice(toColumnIndex, 0, columnToMove);
    },
    REMOVE_TASK (state, { task }) {
      const board = { ...state.board }
      for (let i = 0; i < board.columns.length; i++) {
        const tasks = [ ...board.columns[i].tasks ];

        const filtered = remove(tasks, (t) => t.id !== task.id);
        board.columns[i].tasks = filtered;
      }

      state.board = board;
    }
  },
  getters: {
    getTask (state) {
      return (id) => {
        for (const column of state.board.columns) {
          for (const task of column.tasks) {
            if (task.id === id) {
              return task;
            }
          }
        }
      }
    }
  },
  actions: {
    createTaskAction ({ commit }, { tasks, name }) {
      commit('CREATE_TASK', { tasks, name });
    },

    createColumnAction ({ commit }, { name }) {
      commit('CREATE_COLUMN', { name });
    },
    updateTaskAction ({ commit }, { data }) {
      const { task, key, value } = data;
      commit('UPDATE_TASK', { task, key, value });
    },
    removeTaskAction ({ commit }, { task }) {
      commit('REMOVE_TASK', { task })
    }
  }
})
