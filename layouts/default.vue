<template>
  <v-app>
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

        <v-list-group prepend-icon="security">
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-title>Admin</v-list-tile-title>
            </v-list-tile>
          </template>
          <v-list-tile v-for="(page, i) in adminPages" :key="i" :to="page.to">
            <v-list-tile-action>
              <v-icon>{{ page.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ page.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
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
      drawer: true,
      fixed: false,
      miniVariant: false,
      items: [
        {
          icon: 'dashboard',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          icon: 'assignment',
          title: 'Projects',
          to: '/projects'
        },
        {
          icon: 'calendar_today',
          title: 'Calendar',
          to: '/calendar'
        },
        {
          icon: 'assignment_ind',
          title: 'Employees',
          to: '/employees'
        },
        {
          icon: 'monetization_on',
          title: 'Finance',
          to: '/finance'
        }
      ],
      adminPages: [
        {
          icon: 'account_circle',
          title: 'Users',
          to: '/admin/users'
        },
        {
          icon: 'settings',
          title: 'Settings',
          to: '/admin/settings'
        }
      ],
      title: 'Vuetify.js'
    }
  }
}
</script>
