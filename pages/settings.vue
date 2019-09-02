<template>
  <v-card height="95vh" outlined>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title>
        <v-icon left>
          {{ mdiSettings }}
        </v-icon>Settings
      </v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          {{ mdiDeveloperBoard }}
        </v-icon>
        General
      </v-tab>
      <v-tab>
        <v-icon left>
          {{ mdiViewModule }}
        </v-icon>
        Modules
      </v-tab>
      <v-tab>
        <v-icon left>
          {{ mdiEmailMultipleOutline }}
        </v-icon>
        Mailing
      </v-tab>
      <v-tab>
        <v-icon left>
          {{ mdiLanConnect }}
        </v-icon>
        Network
      </v-tab>
      <v-tab>
        <v-icon left>
          {{ mdiAccountKey }}
        </v-icon>
        Authorization
      </v-tab>
      <v-tab>
        <v-icon left>
          {{ mdiHexagonMultiple }}
        </v-icon>
        Integrations
      </v-tab>
      <v-tab>
        <v-icon left>
          {{ mdiUpdate }}
        </v-icon>
        Update
      </v-tab>

      <v-tab-item v-for="i in 7" :key="i">
        <v-card flat>
          <v-card-text>
            <p>
              Sed aliquam ultrices mauris. Donec posuere vulputate arcu. Morbi ac felis. Etiam feugiat lorem non metus. Sed a libero.
            </p>

            <p>
              Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Aenean tellus metus, bibendum sed, posuere ac, mattis non, nunc. Aliquam lobortis. Aliquam lobortis. Suspendisse non nisl sit amet velit hendrerit rutrum.
            </p>

            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio nec arcu. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec, quam. Phasellus blandit leo ut odio.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
import { mdiSettings, mdiDeveloperBoard, mdiLanConnect, mdiEmailMultipleOutline, mdiAccountKey, mdiViewModule, mdiHexagonMultiple, mdiUpdate } from '@mdi/js'
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  head: () => ({
    title: 'Settings'
  }),
  data: () => ({
    mdiSettings,
    mdiDeveloperBoard,
    mdiLanConnect,
    mdiEmailMultipleOutline,
    mdiAccountKey,
    mdiViewModule,
    mdiHexagonMultiple,
    mdiUpdate
  })
}
</script>
