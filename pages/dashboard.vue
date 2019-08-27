<template>
  <v-layout row wrap>
    <v-flex xs12 md4>
      <v-card class="pa-3 ma-3 slight-br" hover flat>
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
      <v-card class="pa-3 ma-3 slight-br" hover flat>
        <client-only>
          <chartjs-line
            :height="300"
            :datalabel="'Sales'"
            :labels="['January', 'February', 'March', 'April', 'May', 'June', 'July']"
            :data="[100, 55, 80, 122, 55, 22, 80]"
            :fill="true"
            :option="lineOptions"
          />
        </client-only>
      </v-card>
    </v-flex>
    <v-flex xs12 md4>
      <v-card class="pa-3 ma-3 slight-br" hover flat>
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
export default {
  head: () => ({
    title: 'Dashboard'
  }),
  data: () => ({
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
