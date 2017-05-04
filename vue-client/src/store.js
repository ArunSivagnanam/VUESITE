
var store = {

    state : {
        sharedCount : 30,
        backEndTaskComplete : false
    },

    getters : {
        getCountPlusTen : function(state){
            return state.sharedCount + 10;
        },
        getCountPlusX : function(state){
            return function(x){
                return state.sharedCount + x;
            }
        }
    },

    mutations : {
        increment : function(state){
            state.sharedCount++;
        },
        incrementX : function(state,payLoad){
            state.sharedCount = state.sharedCount + payLoad;
        },
        markBackEndCompleted : function(state){
            state.markBackEndCompleted = true;
        }
    },
    
    actions : {

        addNumberFromBackEnd : function(context,payload){
            
            return new Promise(function(resolve, reject){
                setTimeout(() => {
                    context.commit('incrementX',payload);
                    context.commit('markBackEndCompleted');
                    resolve();
                },3032);    
            });
        }
    }
}
export default store;
