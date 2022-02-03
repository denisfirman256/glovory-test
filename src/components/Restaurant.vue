<template>
  <div>
    <!-- Breadcrumb -->
    <nav aria-label="breadcrumb mt-5" style="margin-top: 80px;">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item"><a href="#">Restaurant</a></li>
        <li class="breadcrumb-item active" aria-current="page">Do Yan Seafood - Sumbersekar</li>
      </ol>
    </nav>
    <!-- /Breadcrumb -->

    <!-- Verified -->
    <div class="d-flex align-items-center mb-2">
      <i class="text-success fas fa-check-circle"></i> <small class="text-success ms-2">Preferred Merchant</small>
    </div>
    <!-- /Verified -->

    <!-- Name Restaurant with etc -->
    <div class="name-restaurant">
      <h3 class="fw-bold">Do Yan Seafood - Sumbersekar</h3>
      <!-- Category -->
      <div class="category d-flex align-items-center text-secondary mb-2">
        Seafood, snack
      </div>
      <!-- /Category -->
      <!-- Star Km -->
      <div class="d-flex align-items-center mb-2">
        <span class="text-warning me-2">
          &starf;
        </span>
        <small class="me-5">4,7</small>
        <i class="fas fa-motorcycle me-2"></i>
        <small class="text-secondary">
          664.1 km
        </small>
      </div>
      <!-- /Star Km -->

      <!-- Opening Hours -->
      <div class="d-flex align-items-center mb-3">
        <small class="fw-bold text-secondary me-4">Opening Hours</small><small class="text-secondary">Today 13:00 - 22:00</small>
      </div>
      <!-- /Opening Hours -->

      <!-- Discount order fee -->
      <div class="discount mb-3">
        <div class="d-flex align-items-center">
          <i class="text-success fas fa-tag me-2 mb-1"></i> <small>HEMAT40 40% | HEMAT35 35%</small>
        </div>
        <div class="d-flex align-items-center">
          <i class="text-secondary fas fa-info-circle me-2"></i> <small>Order fee of Rp3.000 applies for this restaurant.</small>
        </div>
      </div>
      <!-- /Discount order fee -->

      <!-- Deliver Time -->
      <div class="d-flex align-items-center w-50">
        <b-form-select class="form-control me-2" v-model="selectedDate" :options="optionsDate"></b-form-select>
        <b-form-select class="form-control" v-model="selectedTime" :options="optionsTime"></b-form-select>
      </div>
      <!-- /Deliver Time -->
    </div>
    <!-- /Name Restaurant with etc -->
  </div>
</template>


<style scoped>
.breadcrumb-item a{
  text-decoration: none;
  color: #00a5cf !important;
  transition: 0.5s;
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #1ebd60;
  outline: 0;
  box-shadow: 0 0 0 2px rgb(0 177 79 / 20%);
}

.breadcrumb-item a:hover {
  color :#1ebd60 !important;
}
</style>

<script>
  export default {
    data() {
      return {
        selectedDate: 'today',
        selectedTime: 'now',
        optionsDate: [
          { value: 'today', text: 'Deliver Date : Today' },
          { value: '3 Feb', text: 'Thu, 3 Feb' },
          { value: '4 Feb', text: 'Fri, 4 Feb' },
        ],
        optionsTime: [
          { value: 'now', text: 'Now / Sekarang' },
          { value: '12:00', text: 'Jam : 12.00' },
          { value: '13:00', text: 'Jam : 13.00' },
        ]

      }
    }
  }
</script>
