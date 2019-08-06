import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',
    data: {
      countries: [],
      favouriteCountries: [],
      selectedCountryIndex: null
    },
    mounted() {
      fetch('https://restcountries.eu/rest/v2/all')
        .then(response => response.json())
        .then(data => this.countries = data);
    },
    computed: {
      totalPopulation() {
        return this.countries.reduce((s, c) => s + c.population, 0).toLocaleString();
      },
      selectedCountry() {
        return this.countries[this.selectedCountryIndex];
      },
      selectedPopulation() {
        return this.selectedCountry.population.toLocaleString();
      },
      neighbours() {
        return this.selectedCountry.borders.map(c => this.findCountryNameByCode(c));
      },
      neighboursPopulation() {
        return this.neighbours.reduce((s, c) => s + c.population, 0).toLocaleString();
      }
    },
    methods: {
      findCountryNameByCode(code) {
        return this.countries.find(c => c.alpha3Code === code);
      },
      addFavourite() {
        if (!this.favouriteCountries.includes(this.selectedCountry.name)) {
          this.favouriteCountries.push(this.selectedCountry.name);
        }
      }
    }
  });
});
