<template lang="">
  <div class="flex flex-col items-center justify-center">
    <div>
      <img
        src="https://github.githubassets.com/images/modules/profile/achievements/pull-shark-default.png"
        alt="ernestdivine31"
      />
      <h2 class="text-center text-gray-500 font-bold text-[22px]">
        {{ repository?.owner?.login }}
      </h2>
      <span class="flex flex-row gap-3">
        <span class="font-bold">Repository name:</span>
        <p>{{ repository.name }}</p>
      </span>
    </div>
    <div class="flex flex-row gap-3">
      <span class="font-bold">Stars:</span>
      <p>{{ repository.stargazers_count }}</p>
    </div>
    <div class="flex flex-row gap-3">
      <span class="font-bold">Watchers:</span>
      <p>{{ repository.watchers }}</p>
    </div>
    <p class="max-w-[400px] text-justify">
      The repository was created on
      {{ moment(repository.created_at).format("MMMM Do YYYY") }} by
      {{ repository?.owner?.login }} and was updated on
      {{ moment(repository.created_at).format("MMMM Do YYYY") }} by
      {{ repository?.owner?.login }}
    </p>

    <a
      :href="repository.html_url"
      target="_blank"
      rel="noreferrer"
      class="p-5 mt-4 bg-black text-white hover:bg-gray-400 hover:text-black"
    >
      <span>
        View repository on github
        <Icon icon="ion:logo-github" color="#A6A6A6" />
      </span>
    </a>
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";

export default {
  name: "Repository",
  components: {},
  data() {
    return {
      repository: {},
    };
  },
  created() {
    this.moment = moment;
  },
  methods: {
    async loadRepository() {
      const { data } = await axios.get(
        `https://api.github.com/repos/ernestdivine31/${this.$route.params.id}`
      );
      this.repository = data;
      console.log(this.repository);
    },
  },
  mounted() {
    this.loadRepository();
  },
};
</script>
<style lang=""></style>
