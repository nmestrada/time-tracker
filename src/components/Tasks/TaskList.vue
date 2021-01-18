<template lang="pug">
html
    h2 Task List
    label Log Task: 
    input( name='task', type='text' )
    div.taskList
        TaskItem(v-for='task in tasks' v-bind:task="task")
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskItem from '@/components/Tasks/TaskItem.vue';
export default defineComponent({
  name: 'Task List',
  components: { TaskItem },
  data() {
    return {
      tasks: [
        { id: 1, name: 'task1', timeLogged: '1:30' },
        { id: 2, name: 'task2', timeLogged: '2:30' },
      ],
    };
  },
});
</script>

<style scoped>
.taskList {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: blue;
}
</style>
