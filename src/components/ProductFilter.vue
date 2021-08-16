.<template>
  <form class="filter">
    <div @click="toggleFilter" class="filter-button">
      <p>Filter</p>
      <p>+</p>
    </div>

    <div v-if="showFilter" class="filter-options">
      <div @click="brandOptions = !brandOptions" class="option-title">
        <p>Brand</p>
        <p>+</p>
      </div>

      <div v-if="brandOptions" class="options-container">
        <div v-for="(brand, i) in brands" :key="i" class="option">
          <input
            :value="brand"
            type="checkbox"
            name="brand"
            v-model="filtersApplied"
            v-on:change="getfilteredData"
          />
          <label for="brand">
            {{ brand }}
          </label>
        </div>
      </div>

      <div @click="colorOptions = !colorOptions" class="option-title">
        <p>Color</p>
        <p>+</p>
      </div>

      <div v-if="colorOptions" class="options-container">
        <div v-for="(color, i) in colors" :key="i" class="option">
          <input
            :value="color"
            type="checkbox"
            name="color"
            v-model="filtersApplied"
          />
          <label for="color">
            {{ color }}
          </label>
        </div>
      </div>

      <div @click="categoryOptions = !categoryOptions" class="option-title">
        <p>Category</p>
        <p>+</p>
      </div>

      <div v-if="categoryOptions" class="options-container">
        <div v-for="(category, i) in categories" :key="i" class="option">
          <input
            :value="category.name"
            type="checkbox"
            name="category"
            v-model="filtersApplied"
          />
          <label for="category">
            {{ category.name }}
          </label>
        </div>
      </div>
    </div>
    <div v-for="(filter, i) in filtersApplied" :key="i">
      <li>{{ filter.toUpperCase() }}</li>
    </div>
  </form>
</template>

<script>
/* import plusIcon from "../assets/icons/plus.svg"; */
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductFilter",
  components: {
    /*     plusIcon, */
  },

  data() {
    return {
      showFilter: false,
      colorOptions: false,
      brandOptions: false,
      categoryOptions: false,
      filtersApplied: [],
    };
  },

  computed: {
    ...mapGetters("product", ["categories", "brands", "colors"]),
  },

  methods: {
    toggleFilter() {
      this.showFilter = !this.showFilter;
      console.log(this.brands);
    },
    ...mapActions("product", ["getBrands", "getColors"]),
  },

  created() {
    this.getBrands();
    this.getColors();
  },
};
</script>

<style lang="scss" scoped>
@import "@/scss/Variables.scss";
@import "@/scss/Mixins.scss";

.filter {
  width: 200px;
  margin: 4rem 0rem;
  width: 250px;
  p {
    color: $black;
  }

  label {
    color: $black;
    font-size: 0.7rem;
  }

  .filter-button {
    display: flex;
    justify-content: space-between;
    padding: 0.8rem;
    text-transform: uppercase;
    background: black;
    cursor: pointer;

    p {
      color: $white;
    }
  }

  .option-title {
    display: flex;
    justify-content: space-between;
    background: #dbdad4;
    text-transform: uppercase;
    padding: 0.8rem;
    border-bottom: 1px solid $divider-dark;
  }

  .options-container {
    background: #dbdad4;
    padding: 0.8rem;
    color: $black;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    .option {
      display: flex;
      align-items: center;
      text-transform: uppercase;

      input {
        height: 10px;
        width: 10px;
        -webkit-appearance: none;
        -moz-appearance: none;
        -o-appearance: none;
        appearance: none;
        outline: none;
        transition-duration: 0.3s;
        background-color: $divider-dark;
        cursor: pointer;
      }

      input:checked {
        background-color: $black;
      }
    }
  }
}
</style>
