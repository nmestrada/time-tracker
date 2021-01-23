<template>
  <div>
    <button class="icon-button">
      <font-awesome-icon class="icon plus-icon" icon="plus-circle" />
    </button>
    <input
      name="task"
      type="text"
      placeholder="enter task"
      v-model="name"
      v-on:keyup.enter="updateOrCreateTask(name)"
    />
    <div class="task-container">
      <p>{{ currentTask.name }}</p>
      <div class="timer-container">
        {{ currentTask.duration }}
        <button class="icon-button" v-on:click="toggleIcon">
          <font-awesome-icon
            v-if="currentTask.isPaused"
            class="icon"
            icon="play-circle"
          />
          <font-awesome-icon v-else class="icon" icon="pause-circle" />
        </button>
        <button @click="endTask">
          end
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { Task } from '@/models/TaskModels';
import { Timer } from '@/utils/timer';
import { useStore } from '@/store';

export default defineComponent({
  name: 'CurrentTask',
  setup() {
    // documentation about setup function: https://v3.vuejs.org/guide/composition-api-setup.html#arguments
    const store = useStore();
    // can access the store.state.currentTask e.g. documentation here: https://next.vuex.vuejs.org/guide/composition-api.html#accessing-state-and-getters
    return {
      taskList: computed(() => store.state.taskList),
      addTask: (task: Task) => store.dispatch('addTaskAction', task),
      currentTask: computed(() => store.state.currentTask),
      updateTaskName: (name: string) =>
        store.dispatch('updateTaskNameAction', name),
      resumeTask: () => store.dispatch('resumeTaskAction'),
      pauseTask: () => store.dispatch('pauseTaskAction'),
      endTask: () => store.dispatch('endTaskAction')
    };
  },
  data() {
    return {
      isTracking: false,
      name: ''
    };
  },
  methods: {
    toggleIcon() {
      if (this.currentTask.isPaused) {
        this.resumeTask();
      } else {
        this.pauseTask();
      }
    },
    addNewTask(name: string) {
      const currentTask = new Timer(name);
      console.log('currentTask', currentTask);
      this.addTask(currentTask);
    },
    updateOrCreateTask(name: string) {
      if (this.currentTask.name) {
        //if name exists just update the name
        this.updateTaskName(name);
      } else {
        // create new task
        this.addNewTask(name);
      }
    }
  }
  // watch: {
  //   name(newName) {
  //     this.updateTaskName(newName);
  //   }
  // }
});
</script>

<style scoped>
.task-container {
  display: flex;
  justify-content: space-between;
  width: 200px;
  font-weight: 700;
  font-size: 28px;
}
.timer-container {
  display: flex;
  align-items: center;
}
.icon-button {
  border: none;
  background-color: transparent;
}
.icon {
  font-size: 1.5rem;
}
.plus-icon {
  color: rgb(95, 182, 95);
}
.stop-icon {
  color: red;
}
</style>
