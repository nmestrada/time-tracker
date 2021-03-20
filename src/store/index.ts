import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { TaskList, Task } from '@/models/TaskModels';
//import { Timer } from '@/utils/timer';

export interface State {
  currentTask: Task;
  taskList: TaskList;
  hasError: boolean;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  // initial state? idk if this is right way to declare this
  state: {
    currentTask: {
      name: '',
      duration: 0,
      isPaused: false,
      timerId: undefined
    },
    taskList: [],
    hasError: false
  },
  // mutations have to synchronous
  mutations: {
    createNewTask(state, payload) {
      if (state.currentTask?.timerId) {
        // if there is a current task clear timer
        clearInterval(state.currentTask?.timerId);
        // add old task to taskList
        state.taskList.push(state.currentTask);
      }
      state.currentTask = { ...payload };
      state.currentTask.timerId = setInterval(() => {
        state.currentTask.duration++;
      }, 1000);
    },
    pauseCurrentTask(state) {
      if (state.currentTask.timerId) {
        clearInterval(state.currentTask?.timerId);
      }
      state.currentTask.isPaused = true;
    },
    resumeCurrentTask(state) {
      state.currentTask.timerId = setInterval(() => {
        state.currentTask.duration++;
      }, 1000);
      state.currentTask.isPaused = false;
    },
    updateTaskName(state, payload) {
      state.currentTask.name = payload;
    },
    endTask(state) {
      // stop timer
      if (state.currentTask.timerId) {
        clearInterval(state.currentTask?.timerId);
      }
      // push to taskList
      state.taskList.push(state.currentTask);
      // reset currentTask
      state.currentTask = {
        name: '',
        duration: 0,
        isPaused: false,
        timerId: undefined
      };
    }
  },
  // actions commit mutations, and can contain arbitary async operations
  actions: {
    addTaskAction({ commit }, task) {
      commit('createNewTask', task);
    },
    pauseTaskAction({ commit }) {
      commit('pauseCurrentTask');
    },
    resumeTaskAction({ commit }) {
      commit('resumeCurrentTask');
    },
    updateTaskNameAction({ commit }, name) {
      commit('updateTaskName', name);
    },
    endTaskAction({ commit }) {
      commit('endTask');
    }
  },
  modules: {}
});

// this is straight from the docs
// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
