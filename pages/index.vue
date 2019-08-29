<template>
  <v-layout class="py-5" row>
    <v-flex xs12>
      <client-only>
        <v-card class="mx-auto text-center slight-br main-gradient inset-shadow" flat dark>
          <v-sheet color="transparent">
            <v-sparkline
              :value="sparklineValues"
              :labels="sparklineValues"
              color="rgba(255, 255, 255, .7)"
              height="100"
              :auto-draw="true"
              :auto-draw-duration="5000"
              :auto-line-width="true"
              padding="24"
              stroke-linecap="round"
              smooth
            >
              <template v-slot:label="item">
                ${{ item.value }}
              </template>
            </v-sparkline>
          </v-sheet>
          <v-card-text class="mt-10">
            <div class="display-2 font-weight-regular">
              Welcome to x249 ERP
            </div>
            <div class="display-1 font-weight-thin mt-2">
              Your numbers presented beautifully.
            </div>
          </v-card-text>
          <v-divider />
          <v-card-actions class="justify-center">
            <v-btn large text to="/dashboard">
              Dashboard
              <v-icon right>
                {{ mdiDesktopMacDashboard }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </client-only>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiDesktopMacDashboard } from '@mdi/js'
export default {
  head: () => ({
    title: 'Home'
  }),
  data: () => ({
    mdiDesktopMacDashboard
  }),
  computed: {
    sparklineValues () {
      const values = []
      for (let i = 0; i < 8; i++) {
        values.push(this.generateRandomNumber())
      }
      return values
    }
  },
  methods: {
    generateRandomNumber () {
      return Math.floor(Math.random() * 50000)
    }
  }
}
</script>
