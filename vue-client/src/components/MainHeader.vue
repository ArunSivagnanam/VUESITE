

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<template>
    <div class="wrapper header nav-down">
        <div v-on:click="toggleMenu()" class="opacity mobile-icon"></div>
        <div class="wrapper logo">
            <a href="/"><img src="./../assets/logo.png"></a>
        </div>
    <div class="wrapper login"><a href="/customer/account/login/">Log ind</a></div></div>
</template>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<script>

export default {

    name : 'main-header',

    props : {
       
    },

    data : function(){
        return {
          
        };
    },

    computed : {

    },

    methods : {
        toggleMenu : function(){
            this.$emit('on-menu-clicked');
        }
    }
}
</script>

<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<style scoped>

a {
    color: #5f306a;
    text-decoration: underline;
    outline: none;
}

.header {
    position: fixed;
    top: 0px;
    height: 86px;
    background: rgba(247, 243, 233, 0.9);
    transition: top 0.2s ease-in-out;
    text-align: center;
    z-index: 1000;

}

.wrapper {
    float: left;
    position: relative;
    width: 100%;
}

.mobile-icon {
    float: left;
    display: block;
    width: 34px;
    height: 23px;
    margin: 34px 0px 0px 30px;
    background-image: url('./../assets/icon_mobile_menu.png');
    background-repeat: no-repeat;
    background-position: 0px 0px;
    cursor: hand;
    cursor: pointer;
}

.logo {
    float: none;
    display: inline-block;
    width: 146px;
    margin: 18px 0px 7px 0px;
}

.login {
    float: right;
    width: 70px;
    height: 46px;
    margin: 27px 30px 0px 0px;
}

.header .logo img {
    max-width: 146px;
}

.header .login a {
    display: block;
    width: 100%;
    height: 46px;
    padding: 35px 0px 0px 0px;
    background-image: url('./../assets/icon_login.png');
    background-repeat: no-repeat;
    background-position: center 0px;
    color: #5f306a;
    font-size: 15.31px;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    box-sizing: border-box;
}


</style>