import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppDrag from '@/components/AppDrag.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const $t = () => {};

describe('AppDrag component', () => {
  let wrapper;

  beforeEach(() => {
    const transferData = {};
    wrapper = shallowMount(AppDrag,
      {
        localVue,
        mocks: { $t },
        props: {
          transferData
        }
      });
  });

  it('AppDrag is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
