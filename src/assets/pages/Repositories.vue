<template>
    <div class="wrapper">
      <h1 class="repo-title1">My Github Repositories</h1>
      <div class="container">
        <div v-for="repo in repositories" :key="repo.id">
          <div class="card">
            <!-- <div class="card-details"> -->
              <h3 class="repo-name">{{ repo.name }}</h3>
            <div>
              <p class="created-at">
              Created at:
            </p>
            <p> {{ moment(repo.created_at).format('MMMM Do YYYY') }}</p>
          </div>
          
              <p>{{ repo.id }}</p>
              <button class="btn"> 
                <a :href="repo.html_url" target="_blank">View on Github</a>
              </button>
            <!-- </div> -->
           
              <!-- <h3 class="repo-name">{{ repo.name }}</h3>
           
            
              <p>Created at:{{ repo.created_at}}</p>
                <p>{{ repo.id }}</p>
            <button class="btn"> 
              <a :href="repo.html_url" target="_blank">View on Github</a>
            </button> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import moment from "moment";
  import axios from 'axios';
  
  export default {
    name: 'Repositories',
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
        const { data } = await axios.get('https://api.github.com/users/ernestdivine31/repos');
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
    
   
    
   

    /* .container-2 {
        display: flex;
        flex-direction: column; */
        /* flex-wrap: wrap; */
        /* justify-content: center;} */
    /* .row {
        display: flex;
    flex-direction: column;
    width: 210px;
    height: 250px;
    text-align: center;
    background: rgba(60, 164, 96, 0.7);
    color: #fff;
    padding: 20px;
    } */
    /* .row {
        display: flex;
        flex-wrap: wrap;
    max-height: 75vh;
    justify-content: center;
    margin: 7 20px; */
    /* border:1px solid red */
   /* }
 
 .check {
    display: flex;
    white-space: nowrap;
    justify-content: center;
    align-items: center; */

    /* flex-direction: column; */
    /* width: 300px; */
    /* height: 250px; */
    /* border:1px solid red;

    text-align: center;
    background: rgba(34, 37, 35, 0.7);
    color: #d6b3b3;
    padding: 20px;
} */

    /* .p-t-md {
        padding-top: 20px;
    }

    .m-t-md {
        margin-top: 0px;
    } */

    
    /* .panel-default > .panel-heading { */
        /* color: #fafafa;
        background-color: #bdb0b0;
        border-color: #ddd;
        font-weight: bolder; */
        /* border: 1px solid red; */

    /* } */

    /* .panel {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .panel-heading {
        padding: 10px 15px;
    }

    .repos-title {
        font-size: 16px;
        font-weight: 600;
        display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;


    }

    .link-body {
        padding: 15px;
        font-size: 16px;
        font-weight: 600;
    
    }

    .link-body p { */
        /* margin-bottom: 0;
        font-size: 16px;
        font-weight: 600;
        display: flex;
    align-items: center;
    justify-content: center; */
    /* margin-bottom: 16px;
    }

    .btn {
        padding: 5px 15px;
        font-size: 14px;
        font-weight: 600;
        border-radius: 0;
        
}

    .btn-primary {
        background: #deb887;
    color: #000;
    text-decoration: none;
    padding: 10px;
    border-radius: 25px;
    cursor: pointer;
    margin-top: 20px;

    }

    .btn-primary:hover {
        background-color: #eaf2fb;
        border-color: #192a3c;
    } */

</style>