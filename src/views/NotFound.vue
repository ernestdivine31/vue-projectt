<template lang="">
  <div class="flex flex-col h-[100vh] justify-center items-center gap-4">
    <h1 class="text-4xl text-center">404</h1>
    <h2 class="text-2xl text-center">Page not found!</h2>
    <p
      class="p-3 border border-gray-600 hover:bg-red-600 hover:text-white w-fit mb-3 text-center md:text-left"
    >
      <router-link to="/">Go back to home</router-link>
    </p>
  </div>
</template>
<script>
export default {
  name: "NotFound",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang=""></style>
