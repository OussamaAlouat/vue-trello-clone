import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppDrag from '@/components/AppDrag.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('AppDrag component', () => {
  let wrapper;

  beforeEach(() => {
    const transferData = {};
    wrapper = shallowMount(AppDrag,
      {
        localVue,
        props: {
          transferData
        }
      });
  });

  it('AppDrag is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
