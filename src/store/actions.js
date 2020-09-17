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
  }
};
