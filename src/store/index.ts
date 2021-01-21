import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { TaskList, Task } from '@/models/TaskModels';

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
      createdOn: new Date(),
      duration: 0,
    },
    taskList: [],
    hasError: false,
  },
  // mutations have to synchronous
  mutations: {
    pushToTaskList(state, payload) {
      // had to copy new task because local and redux state would update at the same time
      state.taskList.push({ ...payload });
    },
  },
  // actions commit mutations, and can contain arbitary async operations
  actions: {
    addTask({ commit }, task) {
      commit('pushToTaskList', task);
    },
  },
  modules: {},
});

// this is straight from the docs
// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
