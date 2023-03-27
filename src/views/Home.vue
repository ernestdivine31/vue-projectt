<template>
  <div class="m-auto max-w-[1200px] h-[100vh]">
    <div
      class="flex flex-col md:flex-row justify-between items-center mt-10 p-5 md:p-2 lg:p-0"
    >
      <div class="flex flex-col gap-7 max-w-[500px]">
        <h2 class="text-black font-bold text-[20px] md:text-[30px]">
          AltSchool
          <span class="underline text-red-600"> Frontend Engineering </span>
          Challenge
        </h2>
        <p class="text-black text-[16px] tracking-wide">
          Create a new vue js application then using the GitHub API, fetch your
          GitHub repositories using this endpoint https://api.github.com/users/(
          USERNAME)/repos. show a page with a list of all your repositories on
          GitHub(the page should have some form of pagination). Then create
          another page showing data for a single repo clicked from the list of
          repos using nested routes. Make sure to implement a wildcard route to
          catch 404 pages. NB: Good UI and Designs are important
        </p>

        <router-link
          to="/repositories"
          class="p-5 font-bold cursor-pointer border text-white text-center bg-red-400 hover:bg-opacity-0 hover:border-red-400 hover:text-red-400"
        >
          View Repositories
        </router-link>
      </div>
      <img
        src="../assets/Welcome-cuate.png"
        class="w-[500px] h-[500px] cover hidden md:flex"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {};
  },
  methods: {},
};
</script>
