<template>
  <div class="wrapper">
    <h1 class="repo-title1">My Github Repositories</h1>
    <div class="container">
      <div v-for="repo in repositories" :key="repo.id">
        <div class="card">
          <!-- <div class="card-details"> -->
          <h3 class="repo-name">{{ repo.name }}</h3>
          <div>
            <p class="created-at">Created at:</p>
            <p>{{ moment(repo.created_at).format("MMMM Do YYYY") }}</p>
          </div>

          <p>{{ repo.id }}</p>
          <button
            class="btn"
            @click="
              () =>
                $router.push({ name: 'Repository', params: { id: repo.name } })
            "
          >
            View Repo
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";

export default {
  name: "Repositories",
  data() {
    return {
      repositories: [],
    };
  },
  created() {
    this.moment = moment;
  },
  mounted() {
    this.loadRepositories();
  },
  methods: {
    async loadRepositories() {
      const { data } = await axios.get(
        "https://api.github.com/users/ernestdivine31/repos"
      );
      this.repositories = data;
    },
  },
};
</script>
<style scoped>
.repo-title {
  font-size: 1.7rem;
  font-weight: 600;
  text-align: center;
  margin: 30px 0;
}

.container {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card {
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 20px;
  gap: 15px;
  height: 100%;
  max-width: 400px;
  justify-content: center;

  /* flex: 1; */
  white-space: nowrap;
}

.btn {
  background-color: rgb(8, 8, 8);
  color: #fff;
  padding: 0.6rem 1rem;
}

.created {
  white-space: nowrap;
}

@media screen and (min-width: 600px) {
  .container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
  }
}
@media screen and (min-width: 56.25em) {
  .container {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    /* grid-gap: 16px; */
  }
}
</style>
