<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  title: "Questions Bank",
  meta: [
    {
      name: "description",
      content:
        "This website is for saving questions and printing them as needed.",
    },
  ],
  link: [{ rel: "icon", type: "image/x-icon", href: "/qb-logo.png" }],
});
</script>
