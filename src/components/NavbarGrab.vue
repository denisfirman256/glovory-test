<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="../assets/libraries/images/logo.png" alt="" height="50px"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto align-items-center d-flex">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownCart" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <span class="border p-2 rounded">
                  <i class="fas fa-shopping-cart"></i>
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                    {{ cart.length }}
                    <span class="visually-hidden">unread messages</span>
                  </span>
                </span> 
              </a>

              <ul class="dropdown-menu" aria-labelledby="dropdownCart" v-if="cart.length > 0">
                <li class="cart-item" v-for="item in cart" :key="item.id">
                  <div class="row">
                    <div class="col-4">
                      <img :src="item.img" :alt="item.food" width="100%">
                    </div>
                    <div class="col-8">
                      <div class="d-block fw-bold">{{ item.food }}</div>
                      <small class="d-block text-secondary">{{ item.prize }}</small>
                      <div class="d-flex justify-content-end">
                        <button @click="removeCart(item.id)" class="btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                      </div>
                    </div>
                  </div>
                </li>
                <hr>
                <li><a class="dropdown-item btn btn-success" href="#">Checkout</a></li>
              </ul>
              <ul class="dropdown-menu" aria-labelledby="dropdownCart" v-else>
                <li class="cart-item">Tidak ada item</li>
              </ul>
            </li>
            <li class="nav-item dropdown ms-4">
              <a class="nav-link dropdown-toggle" href="#" id="dropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="../assets/libraries/images/avatar.png" alt="" height="40px">
              </a>
              <ul class="dropdown-menu" aria-labelledby="dropdownUser">
                <li><a class="dropdown-item" href="#">On Going Orders</a></li>
                <hr>
                <li><a class="dropdown-item" href="#">Logout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>

.dropdown-toggle::after {
    content: none;
}

.cart-item {
  display: block;
  width: 100%;
  padding: 0.25rem 1rem;
  clear: both;
  font-weight: 400;
  color: #212529;
  text-align: inherit;
  text-decoration: none;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}

.dropdown-menu {
    top: 100%;
    left: -350% !important;
    margin-top: 0.125rem;
    min-width: 15rem;
}


  
</style>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.length;
    }
  },
  methods: {
    ...mapActions(["getCart", "removeCart"]),
    placeOrder(){
      this.isProcessing = true;
      setTimeout(() => {
        this.orderPlaced = true;
        this.isProcessing = false;
        this.emptyCart();
      }, 1000);
    },
  },
  mounted() {
    this.getCart()
  },
}
</script>