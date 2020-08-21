import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppDrop from '@/components/AppDrop.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('AppDrop component', () => {
  let wrapper;

  beforeEach(() => {
    const transferData = {};
    wrapper = shallowMount(AppDrop,
      {
        localVue,
        props: {
          transferData
        }
      });
  });

  it('AppDrop is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
