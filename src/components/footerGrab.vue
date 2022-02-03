<template>
  <div class="">
    <!-- Footer First -->
    <div class="bg-footer">
      <div class="container pt-5 pb-4">
        <!-- footer content -->
        <img src="https://food.grab.com/static/images/logo-grabfood-mono.svg" alt="footer-grab">
        <hr>

        <div class="row">
          <!-- Menu Search -->
          <div class="col-sm-12 col-md-3 col-xl-3">
            <p class="fw-bold">Frequently Search</p>
            <ul>
              <li><a class="content-menu" href="#">Burger King Menu</a></li>
              <li><a class="content-menu" href="#">Chatime Menu</a></li>
              <li><a class="content-menu" href="#">Domino's Pizza Menu</a></li>
              <li><a class="content-menu" href="#">Hokben Menu</a></li>
              <li><a class="content-menu" href="#">JCO Delivery</a></li>
              <li><a class="content-menu" href="#">KFC Menu</a></li>
              <li><a class="content-menu" href="#">McDonalds Menu</a></li>
              <li><a class="content-menu" href="#">Pizza Hut Delivery</a></li>
              <li><a class="content-menu" href="#">Richeese Menu</a></li>
              <li><a class="content-menu" href="#">Menu Solaria</a></li>
              <li><a class="content-menu" href="#">Starbucks Menu</a></li>
            </ul>
          </div>
          <!-- /Menu Search -->
          <!-- Popular Cuisines -->
          <div class="col-sm-12 col-md-3 col-xl-3">
            <p class="fw-bold">Popular Cuisines</p>
            <ul>
              <li><a class="content-menu" href="#">Chinese Food</a></li>
              <li><a class="content-menu" href="#">Fast Food</a></li>
              <li><a class="content-menu" href="#">Indian Food</a></li>
              <li><a class="content-menu" href="#">Indonesian Food</a></li>
              <li><a class="content-menu" href="#">Italian Food</a></li>
              <li><a class="content-menu" href="#">Japanese</a></li>
              <li><a class="content-menu" href="#">Korean Food</a></li>
              <li><a class="content-menu" href="#">Thai Food</a></li>
              <li><a class="content-menu" href="#">Vietnamese Food</a></li>
            </ul>
          </div>
          <!-- /Popular Cuisines -->
          <!-- About Grab -->
          <div class="col-sm-12 col-md-3 col-xl-3">
            <p class="fw-bold">About Grab</p>
            <ul>
              <li><a class="content-menu" href="#">About Grab</a></li>
              <li><a class="content-menu" href="#">About GrabFood</a></li>
              <li><a class="content-menu" href="#">Grab</a></li>
            </ul>
          </div>
          <!-- /About Grab -->
          <!-- Support -->
          <div class="col-sm-12 col-md-3 col-xl-3">
            <p class="fw-bold">Support</p>
            <ul>
              <li><a class="content-menu" href="#">Help</a></li>
              <li><a class="content-menu" href="#">FAQ's</a></li>
              <li><a class="content-menu" href="#">Be a GrabFood Merchant</a></li>
              <li><a class="content-menu" href="#">Drive With Grab</a></li>
            </ul>
          </div>
          <!-- /Support -->
        </div>
        <!-- /Footer Content -->
      </div>
    </div>
    <!-- /Footer First -->

    <!-- Second Footer -->
    <div class="bg-second-footer">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-6 col-xl-6">
            <div class="fw-bold mb-2">Countries with GrabFood</div>
            <div class="d-flex align-items-center mb-4">
              <a class="content-menu-second" href="">Indonesian</a>
              <a class="content-menu-second" href="">Philipines</a>
              <a class="content-menu-second" href="">Thailand</a>
              <a class="content-menu-second" href="">Vietnam</a>
              <a class="content-menu-second" href="">Singapore</a>
              <a class="content-menu-second" href="">Malaysia</a>
              <a class="content-menu-second" href="">Myanmar</a>
            </div>
            <div class="d-block mb-2 text-copyright">© Grab 2022</div>
            <div class="d-flex algin-items-center">
              <a href="#" class="content-menu-second">Terms of Service</a>
              <a href="#" class="content-menu-second">Privacy Policy</a>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 col-xl-6">
            <div class="d-flex justify-content-end align-items-center mb-5">
              <a href="" class="content-logo"><i class="fab fa-facebook-square"></i></a>
              <a href="" class="content-logo"><i class="fab fa-twitter-square"></i></a>
              <a href="" class="content-logo"><i class="fab fa-instagram-square"></i></a>
            </div>

            <div class="d-flex justify-content-end align-items-center">
              <a href="#" class="me-3">
                <img src="https://food.grab.com/static/images/logo-appstore.svg" alt="app-store" height="38px">
              </a>
              <a href="#">
                <img src="https://food.grab.com/static/images/logo-playstore.svg" alt="playstore" height="38px">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Second Footer -->
  </div>
</template>
<style scoped>
  .bg-footer {
    background-color: #eaeff2 !important;
  }

  .content-logo {
    color: #FFF;
  }
  .content-logo::after {
    margin-right: 12px;
    content: "";
  }


  .text-copyright {
    color: #afb0b4;
  }
  
  .bg-second-footer {
    background-color: #363a45;
    color: #fff;
    padding-top: 32px;
    padding-bottom: 48px;
  }

  a.content-menu {
    text-decoration: none;
    color: #363a45;
  }

  a.content-menu:hover {
    text-decoration: underline;
    color: #363a45;
  }
  
  a.content-menu-second {
    text-decoration: none;
    color: #FFF;
    font-size: 14px;
  }

  a.content-menu-second::after {
    content: "|";
    color: #6b7896;
    margin-right: 8px;
    margin-left: 8px;
  }

  a.content-menu-second:last-child:after {
    content: "";
  }

  a.content-menu-second:hover {
    text-decoration: underline;
    color: #FFF;
  }

  ul {
    list-style-type: none;
    padding : 0;
  }
</style>