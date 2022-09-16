import Vuetify from 'vuetify'

// Components
import Login from '@/components/Login.vue'
import { createLocalVue, mount } from '@vue/test-utils'
describe('Login.vue', () => {
    const localVue = createLocalVue()
    let vuetify
  
    beforeEach(() => {
      vuetify = new Vuetify()
    })
  
    const mountFunction = options => {
      return mount(Login, {
        localVue,
        vuetify,
        ...options,
      })
    }
  
    it('should have a custom title and match snapshot', () => {
      const wrapper = mountFunction({
        propsData: { title: 'Foobar' },
      })
  
      expect(wrapper.html()).toMatchSnapshot()
    })
  })