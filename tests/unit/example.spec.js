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
  // Inspect the raw component options
  it('has data', () => {
    expect(typeof Login.data).toBe('function')
  })
})

describe('Login', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallowMount(Login, {
      data() {
        return {
          message: 'Hello World',
          username: ''
        }
      }
    })

    // see if the message renders
    expect(wrapper.find('.message').text()).toEqual('Hello World')

    // assert the error is rendered
    expect(wrapper.find('.error').exists()).toBeTruthy()

    // update the `username` and assert error is no longer rendered
    wrapper.setData({ username: 'Lachlan' })
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

    expect(wrapper.find('.message').text()).toEqual("")
  })

  it('renders an error when username is less than 7 characters', () => {
    const wrapper = factory({ username: ''  })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('renders an error when username is whitespace', () => {
    const wrapper = factory({ username: ' '.repeat(7) })

    expect(wrapper.find('.error').exists()).toBeTruthy()
  })

  it('does not render an error when username is 7 characters or more', () => {
    const wrapper = factory({ username: 'Lachlan'  })

    expect(wrapper.find('.error').exists()).toBeFalsy()
  })
})
})


{/* <template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title>Vuebook Homepage</v-toolbar-title>
      <v-spacer></v-spacer>

      <div id="nav">
        <router-link to="/"><v-btn text rounded>Home</v-btn></router-link> |
        <router-link to="/register"><v-btn text rounded>Register</v-btn></router-link> |
        <router-link to="/login"><v-btn text rounded>Login</v-btn></router-link
        ><v-btn text rounded>Contact us</v-btn>
      </div>
    </v-app-bar>

    <v-content>
      <v-card width="500" class="mx-auto mt-9">
        <v-card-title>Long Area</v-card-title>
        <v-card-text>
          <v-text-field label="Username" prepend-icon="mdi-account-circle" />
          <v-text-field
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-card-text>

        <v-divider></v-divider>
        <v-card-actions>
          <v-btn color="success">Register</v-btn>
          <v-btn color="info">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-content>

    <template>
      <v-footer dark padless>
        <v-card class="flex" flat tile>
          <v-card-title class="teal">
            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" dark icon>
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-title>

          <v-card-text class="py-2 white--text text-center">
            {{ new Date().getFullYear() }} — <strong>Vuebook</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
  <!-- <div class="app-layout">
    <v-toolbar class="header" color="primary" dark fixed app>
      <v-toolbar-title>Vuebook Dashboard </v-toolbar-title>
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/register">Register</router-link> |
        <router-link to="/login">Login</router-link>
      </div>
    </v-toolbar>
    <div class="app-layout-content">
      <v-container fluid class="content">
        <router-view> </router-view>
      </v-container>
    </div>
  </div> -->
  <!-- <v-app>
    <v-container> </v-container>
    <router-view />
  </v-app> -->
</template> */}

