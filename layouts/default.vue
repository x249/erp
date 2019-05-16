<template>
  <v-app :dark="darkMode">
    <v-navigation-drawer
      v-model="drawer"
      class="white"
      :mini-variant="miniVariant"
      :clipped="true"
      :floating="true"
      fixed
      app
    >
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" :clipped-left="true" dark flat fixed app>
      <v-toolbar-side-icon @click="miniVariant = !miniVariant" />
    </v-toolbar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer color="primary" dark :fixed="fixed" app>
      <v-flex text-xs-center>
        <span>&copy; 2019</span>
      </v-flex>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      darkMode: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      items: [
        {
          icon: 'apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'bubble_chart',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Vuetify.js'
    }
  }
}
</script>
