<template>
  <app-drop
    @drop="moveTaskOrColumn"
  >
    <app-drag
      class="column"
      :transferData ="{
        type: 'column',
        fromColumnIndex: columnIndex
      }"
    >
      <div class="flex items-center mb-2 font-bold">
        {{column.name}}
      </div>
      <div class="list-reset">
        <ColumnTask
          v-for="(task, $taskIndex) of column.tasks"
          :key="$taskIndex"
          :columnIndex="columnIndex"
          :taskIndex="$taskIndex"
          :task="task"
          :column="column"
          :board="board"
        />

        <input
          type="text"
          class="block p-2 w-full bg-transparent"
          placeholder="Enter new task"
          @keyup.enter="createTask($event, column.tasks)"
        />
      </div>
    </app-drag>
  </app-drop>
</template>

<script>
import ColumnTask from './ColumnTask';
import movingTasksAndColumnsMixin from '@/mixins/movingTasksAndColumnsMixin';
import AppDrag from './AppDrag.vue';
import AppDrop from './AppDrop.vue';

export default {
  components: {
    ColumnTask,
    AppDrag,
    AppDrop
  },
  mixins: [movingTasksAndColumnsMixin],
  methods: {
    pickupColumn (event, fromColumnIndex) {
      event.dataTransfer.effectAllowed = 'move';
      event.dataTransfer.dropEffect = 'move';

      event.dataTransfer.setData('from-column-index', fromColumnIndex);
      event.dataTransfer.setData('type', 'column');
    },
    createTask (event, tasks) {
      this.$store.commit('CREATE_TASK', { tasks, name: event.target.value });
      event.target.value = '';
    }
  }
}
</script>

<style>
.column {
  @apply bg-grey-light p-2 mr-4 text-left shadow rounded;
  min-width: 350px;
}
</style>
