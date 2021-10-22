//importar o Vue e o Vuex
import Vue from 'vue'
import Vuex from 'vuex'

//Instanciando o Vue e o Vuex
Vue.use(Vuex)

//Criar uma Store
const store = new Vuex.Store({
    //trabalhar com o estado da aplicação:
    state: {
       counter: 0 
    },

    //mutations - métodos que alteram os valores das variáveis das states
    mutations: { 
        //por default recebe a state que será alterada
        decrement: state => state.counter--,
        increment: state => state.counter++
    },

    getters: { // métodos que vão pegar dados da store, processar e devolver. Recebe a state como parâmentro.
        counter: state => state.counter
    },

    actions: { //utilizado para realizar chamadas assincronas

        decrement: context => context.commit('decrement'),
        increment: context => context.commit('increment')

        // simulando chamadas em API: 

        // decrement: ({commit}) => commit('decrement'),
        // increment: ({commit}) => {
        //     setTimeout(() => {
        //         commit('increment')
        //     }, 2000)
        // }
    }

})

export {store}