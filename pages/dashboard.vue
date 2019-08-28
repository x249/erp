<template>
  <v-layout class="py-5" row>
    <v-flex xs12 md4>
      <v-card
        class="mt-5 mx-auto"
        flat

        max-width="400"
      >
        <v-sheet
          class="v-sheet--offset mx-auto px-4 py-2"
          color="#F44336"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
            :auto-draw="true"
            :auto-draw-duration="1000"
            :auto-line-width="true"
          />
        </v-sheet>
        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">
            Server Traffic Load
          </div>
          <div class="subheading font-weight-light green--text">
            Cluster Autoscaling Active <v-icon color="green">
              {{ mdiGaugeFull }}
            </v-icon>
          </div>
          <v-divider class="my-2" />
          <v-icon
            class="mr-2"
            small
          >
            {{ mdiClock }}
          </v-icon>
          <span class="caption grey--text font-weight-light">last pinged 2 minutes ago</span>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card
        class="mt-5 mx-auto"
        flat

        max-width="400"
      >
        <v-sheet
          class="v-sheet--offset mx-auto px-4 py-2"
          color="cyan"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
            :auto-draw="true"
            :auto-draw-duration="1000"
            :auto-line-width="true"
          />
        </v-sheet>
        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">
            User Registrations
          </div>
          <div class="subheading font-weight-light grey--text">
            Last Campaign Performance
          </div>
          <v-divider class="my-2" />
          <v-icon
            class="mr-2"
            small
          >
            {{ mdiClock }}
          </v-icon>
          <span class="caption grey--text font-weight-light">last registration 26 minutes ago</span>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card
        class="mt-5 mx-auto"
        flat

        max-width="400"
      >
        <v-sheet
          class="v-sheet--offset mx-auto px-4 py-2"
          color="#9C27B0"
          elevation="12"
          max-width="calc(100% - 32px)"
        >
          <v-sparkline
            :labels="labels"
            :value="value"
            color="white"
            line-width="2"
            padding="16"
            :auto-draw="true"
            :auto-draw-duration="1000"
            :auto-line-width="true"
          />
        </v-sheet>
        <v-card-text class="pt-0">
          <div class="title font-weight-light mb-2">
            Daily Profit
          </div>
          <div class="subheading font-weight-light green--text">
            Increasing <v-icon color="green">
              {{ mdiTrendingUp }}
            </v-icon>
          </div>
          <v-divider class="my-2" />
          <v-icon
            class="mr-2"
            small
          >
            {{ mdiClock }}
          </v-icon>
          <span class="caption grey--text font-weight-light">last calculated a minute ago</span>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="pa-3 ma-3" flat>
        <client-only>
          <chartjs-pie
            :width="100"
            :height="100"
            :datalabel="'Customer Segments'"
            :labels="['Children', 'Adults', 'Elderly']"
            :data="[120, 83, 138]"
            :option="options"
          />
        </client-only>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="pa-3 ma-3" flat>
        <client-only>
          <chartjs-line
            :height="300"
            :datalabel="'Sales'"
            :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
            :data="[55000, 23500, 15000, 80000, 250000, 150000, 300000]"
            :fill="true"
            :option="lineOptions"
          />
        </client-only>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="pa-3 ma-3" flat>
        <client-only>
          <chartjs-radar
            :height="300"
            :datalabel="'Customers'"
            :labels="['Children', 'Adults', 'Elderly']"
            :data="[18, 48, 26]"
            :option="radarOptions"
          />
        </client-only>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiClock, mdiTrendingUp, mdiGaugeFull } from '@mdi/js'
export default {
  head: () => ({
    title: 'Dashboard'
  }),
  data: () => ({
    mdiClock,
    mdiTrendingUp,
    mdiGaugeFull,
    labels: [
      '12am',
      '3am',
      '6am',
      '9am',
      '12pm',
      '3pm',
      '6pm',
      '9pm'
    ],
    value: [
      200,
      675,
      410,
      390,
      310,
      460,
      250,
      800
    ],
    options: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        position: 'bottom',
        text: 'Most medicine sold'
      }
    },
    lineOptions: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        position: 'bottom',
        text: 'Monthly Sales'
      }
    },
    radarOptions: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        position: 'bottom',
        text: 'Monthly Customers'
      }
    }
  })
}
</script>

<style>
  .v-sheet--offset {
    top: -24px;
    position: relative;
  }
</style>
