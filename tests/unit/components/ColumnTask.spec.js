import VueRouter from 'vue-router';
import vuex from 'vuex';

import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppDrop from '@/components/AppDrop.vue';
import AppDrag from '@/components/AppDrag.vue';
import ColumnTask from '@/components/ColumnTask.vue';
import defaultBoard from '@/default-board'
import state from '@/store/state';

const localVue = createLocalVue();
localVue.use(vuex);

localVue.use(VueRouter);

describe('ColumnTask component', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = new vuex.Store({
      state
    });

    wrapper = shallowMount(ColumnTask,
      {
        store,
        localVue,
        components: {
          AppDrag,
          AppDrop
        },
        propsData: {
          board: { ...defaultBoard },
          column: {},
          columnIndex: 0,
          task: {
            description: 'My first task at these lesson ',
            name: 'first task',
            id: '1',
            userAssigned: null
          },
          taskIndex: 0
        }
      });
  });

  it('ColumnTask is vue component', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
