<template lang="pug">
html
    h2 Task List
    div.task(v-for='task in tasks')
        p {{task.name}}
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Task List',
  data() {
    return {
      tasks: [
        { id: 1, name: 'task1' },
        { id: 2, name: 'task2' },
      ],
    };
  },
});
</script>

<style scoped>
.task {
  color: blue;
}
</style>
