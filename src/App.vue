<template>
  <div id="app">
    <Repositories />
  </div>
    
  
</template>

<script>
// import '@/assets/tailwind.css';
import Repositories from '@/pages/Repositories.vue';
export default {
  name: 'App',
  components: {
    Repositories
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600&display=swap');
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: inherit;
}

.wrapper {
  max-width: 68.75rem;
  margin: 0 auto;
  width: calc(100% - 2rem);
  border: 1px solid red;
}
@media screen and (min-width: 600px) {  
  .wrapper {
    width: calc(100% - 4rem);
  }
}
body {
  min-height: 100vh;
  max-width:100%;
  font-family: 'Sora', sans-serif;
}

</style>
