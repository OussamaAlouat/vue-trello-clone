import VueRouter from 'vue-router';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppButton from '@/components/AppButton.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);
const $t = () => {};

describe('AppButton component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AppButton,
      {
        localVue,
        mocks: { $t }
      });
  });

  it('AppButton is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
