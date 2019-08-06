import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      selectedCountryIndex: null
    },
    mounted() {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.countries = data);
    },
    computed: {
      totalPopulation() {
        return this.countries.reduce((s, c) => s + c.population, 0);
      },
      selectedCountry() {
        return this.countries[this.selectedCountryIndex];
      }
    },
    methods: {
      displayCountryInfo(index) {
        
      }
    }
  });
});
