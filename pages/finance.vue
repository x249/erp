<template>
  <v-layout align-center justify-center row>
    <v-flex class="ma-5" xs12 md4>
      <v-card
        id="finance-stats"
        height="90vh"
        width="auto"
        flat
        outlined
      >
        <v-timeline class="mx-5" :dense="true">
          <v-timeline-item
            color="green lighten-2"
            fill-dot
            right
          >
            <v-card class="slight-br">
              <v-card-title class="green lighten-2">
                <h2 class="title white--text font-weight-light">
                  Today
                </h2>
                <v-spacer />
                <v-icon
                  dark
                  size="42"
                  class="mr-4"
                >
                  {{ mdiTrendingUp }}
                </v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="10" md="12">
                    <span class="headline">Sales increasing</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="grey lighten-1"
            fill-dot
            left
            small
          >
            <v-card class="slight-br">
              <v-card-title class="grey lighten-1 justify-end">
                <h2 class="title mr-4 white--text font-weight-light">
                  Yesterday
                </h2>
                <v-spacer />
                <v-icon
                  dark
                  size="42"
                >
                  {{ mdiTrendingNeutral }}
                </v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="10" md="12">
                    <span class="headline">Sales steady</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="green lighten-1"
            fill-dot
            right
          >
            <v-card class="slight-br">
              <v-card-title class="green lighten-1">
                <h2 class="title white--text font-weight-light">
                  August 28 - 2019
                </h2>
                <v-spacer />
                <v-icon
                  class="mr-4"
                  dark
                  size="42"
                >
                  {{ mdiTrendingUp }}
                </v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="10"
                    md="12"
                  >
                    <span class="headline">Sales increased</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="red lighten-1"
            fill-dot
            left
            small
          >
            <v-card class="slight-br">
              <v-card-title class="red lighten-1 justify-end">
                <h2 class="title mr-4 white--text font-weight-light">
                  August 27 - 2019
                </h2>
                <v-spacer />
                <v-icon
                  dark
                  size="42"
                >
                  {{ mdiTrendingDown }}
                </v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="10" md="12">
                    <span class="headline">Sales decreased</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="red lighten-1"
            fill-dot
            left
            small
          >
            <v-card class="slight-br">
              <v-card-title class="red lighten-1 justify-end">
                <h2 class="title mr-4 white--text font-weight-light">
                  August 26 - 2019
                </h2>
                <v-spacer />
                <v-icon
                  dark
                  size="42"
                >
                  {{ mdiTrendingDown }}
                </v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="10" md="12">
                    <span class="headline">Sales decreased</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="red lighten-1"
            fill-dot
            left
            small
          >
            <v-card class="slight-br">
              <v-card-title class="red lighten-1 justify-end">
                <h2 class="title mr-4 white--text font-weight-light">
                  August 25 - 2019
                </h2>
                <v-spacer />
                <v-icon
                  dark
                  size="42"
                >
                  {{ mdiTrendingDown }}
                </v-icon>
              </v-card-title>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="10" md="12">
                    <span class="headline">Sales decreased</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-flex>
    <v-flex class="ma-5" xs12 md6>
      <v-card height="90vh" outlined flat>
        <client-only>
          <canvas id="mix" count="2" />
          <chartjs-line
            target="mix"
            datalabel="Monthly Profit"
            :bordercolor="'rgba(0, 128, 128, 1)'"
            :backgroundcolor="'rgba(0, 128, 128, 0.1)'"
            :labels="lineLabels"
            :data="lineData"
            :options="lineOptions"
          />
          <chartjs-bar
            target="mix"
            datalabel="Monthly Revenue"
            :bordercolor="'rgba(128, 0, 128, 1)'"
            :backgroundcolor="'rgba(128, 0, 128, 0.1)'"
            :labels="barLabels"
            :data="barData"
            :fill="true"
            :options="barOptions"
          />
        </client-only>
        <v-divider class="my-10" />
        <client-only>
          <chartjs-polar-area
            datalabel="Leads"
            :labels="polarLabels"
            :data="polarData"
            :beginzero="true"
            :backgroundcolor="['rgba(115,143,33,0.1)','rgba(110,83,112,0.1)','rgba(247,37,147,0.1)','rgba(142,1,250,0.1)']"
            :bordercolor="['rgba(115,143,33,1)','rgba(110,83,112,1)','rgba(247,37,147,1)','rgba(142,1,250,1)']"
            :options="polarOptions"
          />
        </client-only>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiTrendingUp, mdiTrendingNeutral, mdiTrendingDown } from '@mdi/js'
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  head: () => ({
    title: 'Finance'
  }),
  data: () => ({
    mdiTrendingUp,
    mdiTrendingNeutral,
    mdiTrendingDown,
    barLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    lineLabels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    barData: [51000, 38000, 64000, 89000, 101000, 87000, 79000],
    lineData: [51000 * 0.3, 38000 * 0.5, 64000 * 0.8, 89000 * 0.7, 101000 * 0.5, 87000 * 1.1, 79000 * 0.9],
    barOptions: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        position: 'bottom',
        text: 'Monthly Revenue'
      }
    },
    lineOptions: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        position: 'bottom',
        text: 'Monthly Profit'
      }
    },
    polarOptions: {
      responsive: true,
      maintainAspectRatio: true,
      title: {
        display: true,
        position: 'bottom',
        text: 'Leads'
      }
    },
    polarLabels: ['2015', '2016', '2017', '2018'],
    polarData: [58, 33, 79, 101]
  })
}
</script>

<style scoped>
#finance-stats {
  overflow-y: scroll;
}
#finance-stats::-webkit-scrollbar {
  width: 6px;
  background-color: rgba(128, 128, 128, 0.3);
}
#finance-stats::-webkit-scrollbar-thumb {
  background-color: grey;
  border-radius: 30px;
}
#finance-stats::-webkit-scrollbar-track {
  background-color: transparent;
}
</style>
