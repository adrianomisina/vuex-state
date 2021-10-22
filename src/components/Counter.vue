<template>
  <div>
    <h1>Counter {{counter}}</h1>
    <button @click="decrement">Decrement - </button>
    <button @click="increment">Increment + </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex' 
// helpers do padrão Vuex //substituir o mapState para o mapGetters // substituir o mapMutation pelo mapActions para chamadas assincronas

export default {
    name:'Counter',
    // data() {
    //     return {
    //     counter: 0 - substituir pela função mapStae do Vuex e dentro de propriedades computadas
    // },

    computed: {
        // ...mapState({
        //     counter: state => state.counter
        // })

        ...mapGetters([ // recebe um array do que será recebido os getters
            'counter'
        ]) 
    },

    methods: {
        // Substituir pelas mutations
        // decrement() {
        //    this.counter--
        // },

        // increment() {
        //     this.counter++
        // }

        // ...mapMutations([ usa o spread para passar o mapMutation para a função pai methods
        //     'decrement',
        //     'increment'
        // ])

        ...mapActions([
            'decrement',
            'increment'
        ])
    }
}
</script>

<style>
    button {
        margin-right: 15px;
    }
</style>