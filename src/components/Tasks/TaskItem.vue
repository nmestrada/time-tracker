<template>
  <div class="taskItem">
    <h3>{{ task.name }}</h3>
    <div class="timeLogContainer">
      <h4>{{ task.timeLogged }}</h4>
      <button class="icon-button" v-on:click="toggleIcon">
        <font-awesome-icon v-if="isTracking" class="icon" icon="pause-circle" />
        <font-awesome-icon v-else class="icon" icon="play-circle" />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
/**
 * To Do:
 * - once the time is logged the timer shouldn't able to fired?
 * - time should be logged and play/pause button should be hidden
 * - only one log at a time
 */
export default defineComponent({
  name: 'TaskItem',
  props: ['task'],
  data() {
    return {
      isTracking: false,
    };
  },
  methods: {
    toggleIcon() {
      this.isTracking = !this.isTracking;
    },
  },
});
</script>

<style scoped>
.taskItem {
  display: flex;
  flex: 1;
  width: 200px;
  text-align: center;
  justify-content: space-between;
}
.timeLogContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
}
.icon-button {
  border: none;
  background-color: transparent;
}
.icon {
  color: palevioletred;
  font-size: 1.5rem;
}
</style>
