export default {
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
  },

  moveTaskAction({ commit }, { fromTasks, toTasks, fromTaskIndex, toTaskIndex }) {
    commit('MOVE_TASK', { fromTasks, toTasks, fromTaskIndex, toTaskIndex })
  },

  moveColumnAction({ commit }, { fromColumnIndex, toColumnIndex }) {
    commit('MOVE_COLUMN', { fromColumnIndex, toColumnIndex })
  }
};
