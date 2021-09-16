import VueRouter from 'vue-router';
import vuex from 'vuex';

import { shallowMount, createLocalVue } from '@vue/test-utils';
import BoardColumn from '@/components/BoardColumn.vue'
import AppDrop from '@/components/AppDrop.vue';
import AppDrag from '@/components/AppDrag.vue';
import ColumnTask from '@/components/ColumnTask.vue';
import defaultBoard from '@/default-board'
import state from '@/store/state';

const localVue = createLocalVue();
localVue.use(vuex);

localVue.use(VueRouter);

describe('BoardColumn component', () => {
  let wrapper;
  let store;
  beforeEach(() => {
    store = new vuex.Store({
      state
    });

    wrapper = shallowMount(BoardColumn,
      {
        store,
        localVue,
        components: {
          AppDrag,
          AppDrop,
          ColumnTask
        },
        propsData: {
          board: { ...defaultBoard },
          column: {},
          columnIndex: 0
        }
      });
  });

  it('BoardColumn is vue component', () => {
    expect(wrapper.vm).toBeTruthy();
  });
});
