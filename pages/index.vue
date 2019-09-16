<template>
  <v-layout class="pa-0" row>
    <v-flex class="mb-10" xs12>
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
              Welcome to Element
            </div>
            <div class="display-1 font-weight-thin mt-2">
              Your numbers presented beautifully.
            </div>
          </v-card-text>
          <v-divider />
          <v-card-actions class="justify-center">
            <v-btn class="accent--text" color="white" x-large to="/dashboard">
              Take me there!
              <v-icon right>
                {{ mdiDesktopMacDashboard }}
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </client-only>
    </v-flex>
    <v-flex class="text-center my-10" xs12>
      <h1 class="display-3 font-weight-thin">
        Main Features
      </h1>
    </v-flex>
    <v-container>
      <v-layout class="pa-2 mb-10" row>
        <v-flex class="pa-5" xs12 md4>
          <v-card class="slight-br" flat height="300" width="100%">
            <v-card-title class="text-center">
              Data Visualization
            </v-card-title>
            <v-img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
            <v-card-text class="title">
              See how your business is preforming in beautiful, unique dashboards
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex class="pa-5" xs12 md4>
          <v-card class="slight-br" flat height="300" width="100%">
            <v-card-title class="text-center">
              Inventory/Project Management
            </v-card-title>
            <v-img src="https://images.unsplash.com/photo-1470173274384-c4e8e2f9ea4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
            <v-card-text class="title">
              Keep track of stock or projects' progress in a team shared workspace
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex class="pa-5" xs12 md4>
          <v-card class="slight-br" flat height="300" width="100%">
            <v-card-title class="text-center">
              Finance and Accounting
            </v-card-title>
            <v-img src="https://images.unsplash.com/photo-1534951009808-766178b47a4f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
            <v-card-text class="title">
              All your company's finances and expenses in one place
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<script>
import { mdiDesktopMacDashboard } from '@mdi/js'
export default {
  layout: ({ isMobile }) => (isMobile ? 'mobile' : 'default'),
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
