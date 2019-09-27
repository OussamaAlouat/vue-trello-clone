<template>
  <div class="task"
    draggable
    @dragover.prevent
    @dragenter.prevent
    @dragstart="pickupTask($event, taskIndex, columnIndex)"
    @click="goToTask(task)"
    @drop.stop="moveTaskOrColumn($event, column.tasks, columnIndex, taskIndex)"
    >
    <span class="w-full flex-no-shrink font-bold">
      {{task.name}}
    </span>
    <p v-if="task.description" class="w-full flex-no-shink mt-1 text-sm">
      {{task.description}}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    },
    taskIndex: {
      type: Number,
      required: true
    },
    columnIndex: {
      type: Number,
      required: true
    },
    column:{
      type: Object,
      required: true
    },
    board: {
      type: Object,
      required: true
    }
  },
  methods: {
    pickupTask (event, taskIndex, fromColumnIndex) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.dropEffect = 'move';

      event.dataTransfer.setData('from-task-index', taskIndex);
      event.dataTransfer.setData('from-column-index', fromColumnIndex);
      event.dataTransfer.setData('type', 'task');
    },
    goToTask(task) {
      this.$router.push({name: 'task', params: {id: task.id}});
    },

    moveTaskOrColumn(event, toTasks,toColumnIndex, toTaskIndex) {
      const type = event.dataTransfer.getData('type');
      if(type === 'task') {
        this.moveTask(event, toTasks, toTaskIndex !== undefined ? toTaskIndex : toTasks.length);
      } else {
        this.moveColumn(event, toColumnIndex);
      }
    },
    moveTask(event, toTasks, toTaskIndex) {
      const fromColumnIndex = event.dataTransfer.getData('from-column-index');
      const fromTaskIndex = event.dataTransfer.getData('from-task-index');
      const fromTasks = this.board.columns[fromColumnIndex].tasks;
      this.$store.commit('MOVE_TASK', {
        fromTasks,
        fromTaskIndex,
        toTasks,
        toTaskIndex
      });
    },
    moveColumn(event, toColumnIndex) {
      const fromColumnIndex = event.dataTransfer.getData('from-column-index');
      this.$store.commit('MOVE_COLUMN', {
        fromColumnIndex,
        toColumnIndex
      });
    },
  }
}
</script>

<style>
.task {
  @apply flex items-center flex-wrap shadow mb-2 py-2 px-2 rounded bg-white text-grey-darkest no-underline;
}


</style>
