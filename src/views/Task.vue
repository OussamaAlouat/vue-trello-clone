<template>
  <div class="task-view">
    <div class="flex flex-col flex-grow items-start justify-between px-4">
      <input
        class="p-2 w-full mr-2 flex-grow text-xl font-bold"
        type="text"
        :value="task.name"
        @change="updateTaskProperty($event, 'name')"
        @keyup.enter="updateTaskProperty($event, 'name')"

        >
      <textarea
        class="relative w-full bg-transparent px-2 mt-2 h-64 border-none leading-normal"
        :value="task.description"
        @change="updateTaskProperty($event, 'description')"
        @keyup.enter="updateTaskProperty($event, 'description')"
        placeholder="Enter a description"
        >
      </textarea>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  computed: {
    ...mapGetters(['getTask']),
    task () {
      return this.getTask(this.$route.params.id);
    }
  },
  methods: {
    ...mapActions(['updateTaskAction']),
    updateTaskProperty (event, property) {
      const data = {
        task: this.task,
        key: property,
        value: event.target.value
      };

      this.updateTaskAction({ data });
    }
  }
}
</script>

<style>
.task-view {
  @apply relative flex flex-row bg-white pin mx-4 m-32 mx-auto py-4 text-left rounded shadow;
  max-width: 700px;
}
</style>
