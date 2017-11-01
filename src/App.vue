<template>
  <div id="app">
    <div class="navbar navbar-default navbar-static-top" role="navigation">
      <div class="container">
   
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="http://yourwebsite.com/">Home</a>
          </div>
   
          <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                  <li class="active">
                      <a href="#">All</a>
                  </li>
                  <li>
                      <a href="#">Demo</a>
                  </li>
                  <li>
                      <a href="#">Contact</a>
                  </li>
              </ul>
          </div><!--/.nav-collapse -->
   
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>

body{
  background-color: rgba(247, 247, 247, 0.35);  
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
