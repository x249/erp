<template>
  <h1>{{ $route.path }}</h1>
</template>

<script>
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  head: () => ({
    title: 'Profile'
  })
}
</script>
