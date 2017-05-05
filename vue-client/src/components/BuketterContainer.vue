

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<template>
    <div>
          <div class="wrapper video-top">
            <img src="https://flowr.dk/skin/frontend/flowr/default/images/static/static_4.jpg">
          </div>

          <div class="wrapper col-main">
              <div class="container">
                  <div class="wrapper home-intro">
                          <h2>Sådan bestiller du</h2>
                          <p>Send en smuk buket med friskhedsgaranti</p>
                          <p><img alt="" src="./../assets/icon_steps.png" height="87" width="332"></p>		
                  </div>
              </div>
          </div>
  </div>
</template>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<script>

export default {

    name : 'buketter-container',

    props : {
       
    },

    data : function(){
        return {
          
        };
    },

    computed : {

    },

    methods : {

      test : function(a,b){
        return a+b;
      }
       
    }
}
</script>

<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------->
<style scoped>

.video-top {
    margin: 0px 0px 0px 0px;
    width: 100%;
}

.wrapper {
    float: left;
    position: relative;
    width: 100%;
}

.video-top img {
    width: 100%;
    height: auto;
    z-index: 50;
}

.wrapper {
    float: left;
    position: relative;
    width: 100%;
}

.col-main {
    padding-bottom: 30px;
}

.container {
    position: relative;
    display: block;
    width: 985px;
    margin: 0px auto;
}

.home-intro {
    margin: 10px 0px 0px 0px;
}

.cms-home h2 {
    line-height: 48px;
}

.home-intro h2 {
    margin: 0px;
    color: #323232;
    font-size: 29.34px;
    font-weight: normal;
    text-align: center;
}

.home-intro p {
    margin: 0px;
    color: #000;
    font-size: 15.31px;
    line-height: 19.31px;
    text-align: center;
    text-transform: uppercase;
}

.home-intro img {
    max-width: 100%;
    height: auto;
    margin: 13px 0px 0px 0px;
}

</style>