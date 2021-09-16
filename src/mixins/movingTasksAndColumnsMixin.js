import { mapActions } from 'vuex'
export default {
  props: {
    board: {
      type: Object,
      required: true
    },
    column: {
      type: Object,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions(['moveTaskAction', 'moveColumnAction']),
    moveTaskOrColumn (transferData) {
      if (transferData.type === 'task') {
        this.moveTask(transferData);
      } else {
        this.moveColumn(transferData);
      }
    },
    moveTask ({ fromColumnIndex, fromTaskIndex }) {
      const fromTasks = this.board.columns[fromColumnIndex].tasks
      this.moveTaskAction({
        fromTasks,
        fromTaskIndex,
        toTasks: this.column.tasks,
        toTaskIndex: this.taskIndex || 0
      })
    },

    moveColumn ({ fromColumnIndex }) {
      this.moveColumnAction({
        fromColumnIndex,
        toColumnIndex: this.columnIndex
      })
    }
  }
}
