import Vue from 'vue';

document.addEventListener("DOMContentLoaded", ()=>{
  new Vue({
    el: "#app",
    data:{
      rates:{}
    },//ends data

    mounted(){
      this.getExchangeRates()
    },

    methods: {
      getExchangeRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(response =>response.json())
        .then(rates => this.rates = rates)
      }//ends getExchangeRates

    }//ends methods

  })//end new

})//ends Listener
