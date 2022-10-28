import { createLocalVue, mount, shallowMount, localVue} from '@vue/test-utils'
import Login from '@/components/Register.vue'
import Vuetify from "vuetify"
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

describe('Login.vue', () => {

  it('calls the login action correctly', () => {
      const loginMock = jest.fn(() => Promise.resolve());
      const store = new Vuex.Store({
          actions: {
              // mock function
              login: loginMock
          }
      });
      const wrapper = mount(Login, { localVue, store });
      wrapper.find('button').trigger('click');
      expect(loginMock).toHaveBeenCalled();
  });
});

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
  it('renders a vue instance', () => {
     expect(shallowMount(Login).isVueInstance()).toBe(true);
   });

  it('Checks the data-title', () => {
    expect(wrapper.vm.username).toBe(undefined)
  })

  it('has an title', ()=>{
    expect(wrapper.contains('Dashboard')).toBe(true)
  })
})
