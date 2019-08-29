<template>
  <v-layout align-center justify-center>
    <v-flex xs12 md6>
      <v-card
        class="mx-auto slight-br"
      >
        <v-img
          class="white--text"
          gradient="to right, rgba(0,0,0,0.1), rgba(0,0,0,0.1)"
          src="https://avatars2.githubusercontent.com/u/16164793?s=460&v=4"
        >
          <v-card-title class="align-end fill-height">
            Osama Adil - Web Developer
          </v-card-title>
        </v-img>

        <v-card-text>Reach out to me on social media to connect and more</v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn href="tel:+249121812240" target="_blank" color="primary" icon>
            <v-icon>{{ mdiPhone }}</v-icon>
          </v-btn>
          <v-btn href="mailto:adilosama47@gmail.com" target="_blank" color="#db4437" icon>
            <v-icon>{{ mdiGmail }}</v-icon>
          </v-btn>
          <v-btn href="https://www.github.com/phr3nzy" target="_blank" color="#333" icon>
            <v-icon>{{ mdiGithubCircle }}</v-icon>
          </v-btn>
          <v-btn href="https://www.linkedin.com/in/osama-adil/" target="_blank" color="#007bb5" icon>
            <v-icon>{{ mdiLinkedin }}</v-icon>
          </v-btn>
          <v-btn href="https://twitter.com/_phr3nzy" target="_blank" color="#1da1f2" icon>
            <v-icon>{{ mdiTwitter }}</v-icon>
          </v-btn>
          <v-spacer />
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiPhone, mdiGmail, mdiGithubCircle, mdiLinkedin, mdiTwitter } from '@mdi/js'
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  head: () => ({
    title: 'About'
  }),
  data: () => ({
    mdiPhone,
    mdiGmail,
    mdiGithubCircle,
    mdiLinkedin,
    mdiTwitter
  })
}
</script>
