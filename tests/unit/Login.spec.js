import { createLocalVue, mount, shallowMount } from '@vue/test-utils'
import Login from '@/components/Login.vue'
import Vuetify from "vuetify"

describe('Login.vue', () => {
  let wrapper;
  let vuetify;
  beforeEach(()=>{
    const localVue = createLocalVue()
    vuetify = new Vuetify()

    wrapper = mount(Login, {
      localVue,
      vuetify
    });
  })
  it('should match snapshot', () => {
    
  })
  // it('renders a vue instance', () => {
  //    expect(shallowMount(Login).isVueInstance()).toBe(true);
  //  });

  it('Checks the data-title', () => {
    expect(wrapper.vm.username).toBe('')
  })

  // it('has an title', ()=>{
  //   // expect(wrapper.contains('title')).toBe(true)
  // })
})
