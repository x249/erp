<template>
  <v-layout column align-center justify-center>
    <v-flex xs12>
      <v-card
        :loading="loading"
        width="500"
        flat
      >
        <div class="text-center mb-10 mt-5">
          <v-avatar
            size="150"
          >
            <v-img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-avatar>
        </div>
        <v-text-field
          v-model="name"
          class="mx-5"
          label="Name"
          :prepend-inner-icon="mdiAccount"
          outlined
          clearable
          :clear-icon="mdiClose"
        />
        <v-text-field
          v-model="email"
          class="mx-5"
          label="Email"
          :prepend-inner-icon="mdiEmail"
          outlined
          clearable
          :clear-icon="mdiClose"
        />
        <v-text-field
          v-model="position"
          class="mx-5"
          label="Position"
          :prepend-inner-icon="mdiAccountBadge"
          outlined
          clearable
          :clear-icon="mdiClose"
        />
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" text :loading="loading" @click.stop.prevent="startLoading">
            Save <v-icon right>
              {{ mdiContentSave }}
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiAccount, mdiEmail, mdiAccountBadge, mdiContentSave, mdiClose } from '@mdi/js'
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  head: () => ({
    title: 'Profile'
  }),
  data: () => ({
    loading: false,
    name: 'John Adams',
    email: 'john.adams@gmail.com',
    position: 'Manager',
    mdiAccount,
    mdiEmail,
    mdiAccountBadge,
    mdiContentSave,
    mdiClose
  }),
  methods: {
    startLoading () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 3000)
    }
  }
}
</script>
