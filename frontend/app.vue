<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const projectName = 'Suggestion Box';
const projectDescription = 'An intuitive platform for submitting bug reports and suggestions, with options for anonymous feedback';
useHead({
  titleTemplate: (pageTitle) => {
    if (!pageTitle || pageTitle === projectName) {
      return projectName;
    }
    return `${pageTitle} - ${projectName}`;
  }
})

useSeoMeta({
  title: projectName,
  ogTitle: projectName,
  description: projectDescription,
  ogDescription: projectDescription,
});
</script>