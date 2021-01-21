<template lang="pug">
html
    h2 Task List
    label Start Task: 
    input( name='task', type='text' v-model="name" v-on:keyup.enter="updateCurrentTask(name)" )
    div.currentTask
        CurrentTask(v-bind:currentTask="currentTask")
    div.taskList
        TaskItem(v-for='task in taskList' v-bind:task="task")
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from '@/store';
import { Task } from '@/models/TaskModels';
import { Timer } from '@/utils/timer';
import TaskItem from '@/components/Tasks/TaskItem.vue';
import CurrentTask from '@/components/Tasks/CurrentTask.vue';

export default defineComponent({
  name: 'Task List',
  components: { TaskItem, CurrentTask },
  setup() {
    // documentation about setup function: https://v3.vuejs.org/guide/composition-api-setup.html#arguments
    const store = useStore();
    // can access the store.state.currentTask e.g. documentation here: https://next.vuex.vuejs.org/guide/composition-api.html#accessing-state-and-getters
    return {
      taskList: computed(() => store.state.taskList),
      addTask: (task: Task) => store.dispatch('addTask', task),
    };
  },
  data() {
    return {
      name: '',
    };
  },
  methods: {
    updateCurrentTask(name: string) {
      this.currentTask = new Timer(name);
      this.currentTask.startTracking();
      console.log('currentTask', this.currentTask);
      this.addTask(this.currentTask);
    },
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
.currentTask {
  display: flex;
  justify-content: center;
}
</style>
