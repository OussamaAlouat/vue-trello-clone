import { remove, isNil } from 'lodash'
import { uuid } from '../utils'

export default {
  CREATE_TASK (state, { tasks, name }) {
    if (!isNil(name) && !isNil(tasks)) {
      tasks.push({
        name,
        id: uuid(),
        description: ''
      })
    }
  },

  CREATE_COLUMN (state, { name }) {
    if (!isNil(name) && name !== '') {
      state.board.columns.push({
        name,
        tasks: []
      });
    }
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
};
