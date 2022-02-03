<template>
  <div>
    <nav id="navbarProduct" class="navbar navbar-light bg-white shadow-sm px-3 mt-4">
      <div class="container">
        <!-- Category -->
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#Food">Food</a>
          </li>
        </ul>
        <!-- /Category -->
      </div>
    </nav>
    <div data-bs-spy="scroll" data-bs-target="#navbarProduct" data-bs-offset="0" class="scrollspy-example bg-light pt-4 pb-5" tabindex="0">
      <div class="container">
        <!-- Category -->
        <h4 id="Food">Food</h4>
        <div class="row mb-3">
          <div class="col-4 mb-3 mt-3" v-for="item in products" :key="item.id">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-12 col-md-4 col-xl-4">
                    <img :src="item.img" :alt="item.food" width="100%">
                  </div>
                  <div class="col-sm-12 col-xl-8 col-md-8">
                    <!-- Content Food / Water -->
                    <p class="fw-bold">
                      {{ item.food }}
                    </p>
                    <small class="text-secondary d-block">{{ item.desc }}</small>
                    <small class="fw-bold">Rp. {{ item.prize }}</small>
                    <span class="position-absolute top-100 start-100 translate-middle ">
                      <a @click="addToCart(item)" href="#" class="btn btn-success">
                        <i class="fas fa-plus"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- /Category -->
      </div>
    </div>    
  </div>
</template>

<style scoped>
  .card {
    min-height : 142px;
  }
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(["products"])
  },
  methods: {
    ...mapActions(["getProducts", "addToCart"])
  },
  mounted() {
    this.getProducts()
  },
}
</script>