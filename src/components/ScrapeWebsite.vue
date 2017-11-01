<template>
  <div>
    <div class="row col-lg-12 col-lg-offset-1">
      <div class="card col-lg-4" col-md-3 col-sm-4 v-for="item in items">
        <div class="card-body">
          <h4 class="card-title">{{ item.name }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a v-bind:href=item.website class="card-link">Website</a>
          <a v-bind:href=item.careersPage class="card-link">Careers</a>
        </div>
      </div>
    </div>
    <div class='pagination-block'>
      <button class="btn btn-primary" @click="loadPrevious()" v-if="currentPage > 1">Prev</button>
      <button class="btn btn-primary" @click="loadNext()" v-if="!lastPage">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Scrape a website',
      items: [],
      currentpage: 1,
      lastPage: false
    }
  },
  methods: {
    loadNext(){
      this.currentPage++;
      this.fetchData();
    },
    loadPrevious(){
      this.currentPage--;
      this.fetchData();
    },
    fetchData(){
      this.$http.get('companies', {params: {page: this.currentPage}})
      .then(response => {
        if(response.data.list.length==0){
          this.currentPage--;
          this.lastPage = true;
        }
        else{
          this.currentPage = response.data.currentPage;
          this.items = response.data.list;
        }
      });
    }
  },
  created: function () {
    this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

.card {
    width: 24rem;
    height: 220px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin: 4px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background-color: #fff;
    border-radius: 0.30rem;
    box-shadow: 0 1px 1px #e8e8e8;
}

.card-title{
  line-height:2;
}

.pagination-block button{
  margin:16px;
}

</style>
