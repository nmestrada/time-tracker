<template>
  <div class="home">
    <TaskList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TaskList from '@/components/Tasks/TaskList.vue';

export default defineComponent({
  /**
   * To Do:
   *  In this component load user data for tasks
   * Features:
   * - save task logs in db tbd
   * - let tasks be edited time and name
   * - set time goals
   */
  name: 'Home',
  components: {
    TaskList
  }
});
</script>
