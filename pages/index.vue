<template>
  <v-layout class="py-5" row>
    <v-flex xs12>
      <v-card class="mx-auto text-center slight-br main-gradient inset-shadow" flat dark>
        <v-sheet color="transparent" height="500px" width="100%">
          <v-sparkline
            :value="sparklineValues"
            color="rgba(255, 255, 255, .7)"
            height="100"
            :auto-draw="true"
            :auto-draw-duration="5000"
            :auto-line-width="50"
            padding="10"
            stroke-linecap="round"
            smooth
          />
        </v-sheet>
        <v-card-text>
          <div class="display-4 font-weight-thin">
            Welcome to x249 ERP
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
      for (let i = 0; i < 10; i++) {
        values.push(this.generateRandomNumber())
      }
      return values
    }
  },
  methods: {
    generateRandomNumber () {
      return Math.floor(Math.random() * 1000)
    }
  }
}
</script>
