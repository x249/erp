<template>
  <v-layout align-center justify-center column>
    <v-flex xs12>
      <v-card :loading="loading" flat outlined loader-height="5px" min-width="500px">
        <v-card-title primary-title>
          Sign In
        </v-card-title>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-text class="pa-5">
            <v-text-field
              v-model="email"
              :rules="emailRules"
              type="email"
              label="Email"
              :prepend-inner-icon="mdiEmail"
              outlined
            />
            <v-text-field
              v-model="password"
              :rules="passwordRules"
              type="password"
              label="Password"
              :prepend-inner-icon="mdiLock"
              outlined
            />
            <nuxt-link to="/">
              Forgot password?
            </nuxt-link>
          </v-card-text>
          <v-card-actions class="px-5">
            <v-checkbox v-model="check" color="primary" label="Keep me signed in" :on-icon="mdiCheckboxMarked" :off-icon="mdiCheckboxBlankOutline" />
            <v-spacer />
            <v-btn color="primary" type="submit" depressed @click.stop.prevent="signin()">
              Sign In
              <v-icon right>
                {{ mdiLogin }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiEmail, mdiLock, mdiCheckboxMarked, mdiCheckboxBlankOutline, mdiLogin } from '@mdi/js'
export default {
  layout: () => 'none',
  middleware: 'no-auth',
  head: () => ({
    title: 'Sign In'
  }),
  data: () => ({
    mdiEmail,
    mdiLock,
    mdiCheckboxMarked,
    mdiCheckboxBlankOutline,
    mdiLogin,
    check: true,
    valid: true,
    loading: false,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]
  }),
  methods: {
    signin () {
      if (this.$refs.form.validate()) {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.$router.push('/')
        }, 3000)
      }
    }
  }
}
</script>
