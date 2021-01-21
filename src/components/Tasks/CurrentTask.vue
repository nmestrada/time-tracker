<template>
  <div class="task-container">
    <p>{{ currentTask.name }}</p>
    <p>{{ currentTask.duration }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'CurrentTask',
  props: ['currentTask'],
});
</script>

<style scoped>
.task-container {
  display: flex;
  justify-content: center;
  width: 200px;
}
</style>
