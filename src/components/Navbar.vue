<template lang="">
  <div class="flex justify-between items-center max-w-[1200px] m-auto p-4">
    <h1>ERNETSDIVINE</h1>
    <ul class="flex flex-row gap-4">
      <li class="hover:text-gray-400">
        <router-link to="/">Home</router-link>
      </li>
      <li class="hover:text-gray-400">
        <router-link to="/repositories">Repositories</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Navbar",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang=""></style>
