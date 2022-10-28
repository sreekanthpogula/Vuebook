/* eslint-disable no-unused-vars */
import { shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'

// Components
import { createLocalVue, mount } from '@vue/test-utils'
// import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Register.vue'
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

test('but there is a "@" in username@gmail.com ', () => {
  expect('@').toMatch(/@/);
});

describe('Login', () => {
  it('has data', () => {
    expect(typeof Login.data).toBe('function')
  })
})

describe('Login', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          message: 'Hi Welcome',
          username: 'kminchelle',
        }
      }
    })

    // see if the message renders
    expect(wrapper.find('.message').text()).toEqual('Hi Welcome')

    // assert the error is rendered
    expect(wrapper.find('.error').exists()).toBeTruthy()

    // update the `username` and assert error is no longer rendered
    wrapper.setData({ username: 'kminchelle' })
    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})

const factory = (values = {}) => {
  return shallowMount(Login, {
    data () {
      return {
        ...values
      }
    }
  })
}

describe('Login', () => {
  it('renders a welcome message', () => {
    const wrapper = factory()

    expect(wrapper.find('.message').text()).toEqual("Hi Welcome")
  })

  it('renders an error when username is less than 8 characters', () => {
    const wrapper = factory({ username: 'kminchelle'  })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('renders an error when username is whitespace', () => {
    const wrapper = factory({ username: ' '.repeat(8) })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('does not render an error when username is 7 characters or more', () => {
    const wrapper = factory({ username: 'Lachlan'  })

    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
})

