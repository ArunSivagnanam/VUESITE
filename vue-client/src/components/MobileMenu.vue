

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<template>
  <div v-bind:class="['mobile-menu', {'mobile-menu-active' : menuOpen}]">
    <ul v-for="(array,arrayIndex) in itemList">
        <li v-for="(item,index) in array">
            <a v-on:click="itemClicked(arrayIndex,index)">{{item}}</a>
        </li>
    </ul>
    <a v-on:click="closeMenu()" class="mobile-close"></a>
  </div>
</template>

<!-- ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ -->

<script>

export default {

    name : 'mobile-menu',

    props : {
        itemList : {
                type : Array,
                default : function(){
                    return [['Button one', 'Button two'],['Logout']];
                }
        },
        menuOpen : {
                type : Boolean,
                default : true
        }
    },

    data : function(){
        return {
            msg : 'used in unitTest for leaning purpose'
        };
    },

    computed : {

    },

    methods : {

        itemClicked : function(arrayIndex,itemIndex){
            var payload = { index : itemIndex, value : this.itemList[arrayIndex][itemIndex]};
            this.$emit('on-item-clicked',payload);
        },
        closeMenu : function(){
            this.$emit('on-menu-close');
        }
    }
}
</script>

<!---------------------------------------------------------------------------------------------------------------------------------------------------------------------------->

<style scoped>

.mobile-menu {
    position: fixed;
    display: block;
    width: 250px;
    min-height: 100%;
    top: 86px;
    left: -400px;
    right: auto;
    padding: 35px 0px 0px 0px;
    border-right: 1px solid #d8d3c7;
    background-color: #f0eadd;
    z-index: 100000;
}

.mobile-menu-active {
    position: absolute;
    left: 0px;
    width: 400px;
    height: 100%;
    padding-bottom: 30px;
    -moz-transition: all 300ms;
    -webkit-transition: all 300ms;
    transition: all 300ms;
}

.mobile-menu ul {
        margin: 0px 0px 15px 0px;
}

.menu-item-border{
        border-top :  1px solid #d8d3c7;
}


.mobile-menu ul:nth-child(even) {
    float: left;
    width: 100%;
    padding: 30px 0px 0px 0px;
    border-top: 1px solid #d8d3c7;
}


.mobile-menu ul li {
    float: left;
    width: 100%;
    margin: 0px;
    padding: 0px 0px 33px 135px;
    box-sizing: border-box;
    list-style-type: none;
}

.mobile-menu ul li a {
    color: #5f306a;
    font-family: 'GothamRounded-Medium';
    font-size: 29.34px;
    font-weight: normal;
    text-decoration: none;
    line-height: 30.61px;
}

.mobile-close {
    position: absolute;
    display: block;
    top: 34px;
    left: 20px;
    width: 35px;
    height: 34px;
    background-image: url(https://flowr.dk/skin/frontend/flowr/default/images/menu_close.png);
    background-repeat: no-repeat;
}

</style>