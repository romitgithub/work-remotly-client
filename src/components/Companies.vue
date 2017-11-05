<template>
  <div>
    <div class="row col-lg-11 col-lg-offset-1">
      <div class="card col-lg-4 col-md-6 col-sm-12" v-for="item in items">
        <div class="card-body">
          <!--<img v-bind:src=item.logo class="logo-img" v-if="item.logo != ''"/>-->
          <h4 class="card-title">{{ item.name }}</h4>
          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p class="card-text"><span v-if="item.location">{{ item.location }},</span> {{ item.country }}</p>
          <div class="links-box">
            <a v-bind:href=item.website class="card-link">Website</a>
            <a v-bind:href=item.careersPage v-if="item.careersPage!=''" class="card-link">Careers</a>
          </div>
        </div>
      </div>
    </div>
    <div class='pagination-block'>
      <button class="btn btn-primary" @click="loadNext()" v-if="!lastPage">Load More</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Companies',
  data () {
    return {
      msg: 'Scrape a website',
      items: [],
      lastPage: false,
      currentPage: 1
    }
  },
  methods: {
    loadNext(){
      this.fetchData(Number(this.currentPage) + 1);
    },
    loadPrevious(){
      if(this.lastPage == true){
        this.lastPage = false;
      }
      this.fetchData(Number(this.currentPage) - 1);
    },
    fetchData: function(pageNum){
      this.$http.get('companies', {params: {page: pageNum}})
      .then(response => {
        this.currentPage = response.data.currentPage;
        if(response.data.list.length==0){
          this.lastPage = true;
        }
        else{
          this.items.push.apply(this.items, response.data.list);
        }
      });
    }
  },
  created: function () {
    this.fetchData(Number(this.currentPage));
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
    height: 160px;
    vertical-align: middle;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    margin: 8px;
    padding:8px;
    background-color: #fff;
    border-radius: 0.30rem;
    box-shadow: 0 1px 1px #e8e8e8;
}

.card-body{
  vertical-align: middle;
}

.card-title{
  line-height:1.5;
}

.pagination-block button{
  margin:16px;
}

.logo-img{
  height: 32px;
  margin:8px;
}

.links-box{
  position: absolute;
  bottom: 0;
  left:0;
  right:0;
  padding:12px;
}

.links-box a{
  display: inline-block;
  width: 49%;
  padding: 4px;
  border-radius: 16px;
  font-size: 12px;
  background: rgba(236, 236, 236, 0.3);
  box-shadow: 0 1px 1px #ececec;
  -webkit-transition: box-shadow 0.2s; /* Safari */
  transition: box-shadow 0.2s;
}

a:hover{
  text-decoration: none;
  box-shadow: 0 1px 4px #c1c1c1;
}

</style>
