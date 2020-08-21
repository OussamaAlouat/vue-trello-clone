import VueRouter from 'vue-router';
import Vue from 'vue';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import AppButton from '@/components/AppButton.vue';

const localVue = createLocalVue();
localVue.use(VueRouter);

describe('AppButton component', () => {
  let wrapper;
  const spyUpdate = jest.spyOn(AppButton.methods, 'emitClik');

  beforeEach(() => {
    wrapper = shallowMount(AppButton,
      {
        localVue
      });
  });

  it('AppButton is vue component', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('On click emits clicked', async () => {
    const button = wrapper.find('button')
    button.trigger('click')
    await Vue.nextTick()
    expect(spyUpdate).toHaveBeenCalled();
  });
});
