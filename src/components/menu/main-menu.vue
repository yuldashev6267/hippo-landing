<template>
   <div class="landing-page-nav">
        <div style="height: initial;">
            <div class="headroom--not-top headroom--not-bottom headroom--unpinned headroom" style="position: relative; top: 0px; left: 0px; right: 0px; z-index: 9999; transform: translate3d(0px, 0px, 0px);">
                <nav>
                    <div class="container d-flex align-items-center justify-content-between">
                        <a href="javascript:;" class="navbar-logo pull-left">
                            <img src="../../assets/Hippo_size_2.png" alt="">
                        </a>
                                        <ul class="navbar-nav d-none d-lg-flex flex-row">
                                            <li class="nav-item"><a href="javascript:;">FEATURES</a></li>
                                            <li class="nav-item"><a href="javascript:;">LAYOUTS</a></li>
                                            <li class="nav-item"><a href="javascript:;">COMPONENTS</a></li>
                                            <li class="nav-item"><a href="javascript:;">APPS</a></li>
                                           
                                        </ul> <span class="mobile-menu-button"><i class="fas fa-bars"></i></span>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div> 
</template>
<script>
export default {
    name:"mainMenu"
}
</script>

<style scoped>
@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css);


 /* .landing-page-nav {
  z-index: 5 !important;
  top: 0;
  position: fixed;
  width: 100%;
  background: transparent;
  -webkit-box-shadow: initial;
  box-shadow: none;
}
.landing-page-nav nav {
  -webkit-transition: -webkit-transform 0.5s;
  transition: -webkit-transform 0.5s;
  transition: transform 0.5s;
  transition: transform 0.5s, -webkit-transform 0.5s;
}
.landing-page-nav .headroom {
  -webkit-transition: top 0.5s, background 0.5s, -webkit-box-shadow 0.2s,
    -webkit-transform 0.5s !important;
  transition: top 0.5s, background 0.5s, -webkit-box-shadow 0.2s,
    -webkit-transform 0.5s !important;
  transition: top 0.5s, background 0.5s, box-shadow 0.2s, transform 0.5s !important;
  transition: top 0.5s, background 0.5s, box-shadow 0.2s, transform 0.5s,
    -webkit-box-shadow 0.2s, -webkit-transform 0.5s !important;
}
.landing-page-nav .container {
  height: 100px;
}
@media (max-width: 1439px) {
.landing-page-nav .container {
    height: 90px;
  }
}
@media (max-width: 1199px) {
.landing-page-nav .container {
    height: 80px;
  }
.landing-page-nav .container .navbar-logo,
.landing-page-nav .container .navbar-logo .dark,
.landing-page-nav .container .navbar-logo .white {
    width: 100px;
    height: 30px;
  }
}
@media (max-width: 767px) {
.landing-page-nav .container {
    height: 70px;
  }
}
.landing-page-nav .btn {
  padding-right: 1.75rem !important;
  padding-left: 1.75rem !important;
}
.landing-page-nav .navbar-logo {
  width: 120px;
  height: 40px;
}
.landing-page-nav .navbar-logo .white {
  display: inline-block;
  width: 120px;
  height: 40px;
  background: url(/assets/logos/white-full.svg);
  background-repeat: no-repeat;
}
.landing-page-nav .navbar-logo .dark {
  width: 120px;
  height: 40px;
  background: url(/assets/logos/black.svg);
  background-repeat: no-repeat;
  display: none;
}
.landing-page-nav .mobile-menu-button {
  font-size: 20px;
  display: none;
  cursor: pointer;
}
@media (max-width: 991px) {
.landing-page-nav .mobile-menu-button {
    display: block;
  }
}
.landing-page-nav .navbar-nav {
  height: 100%;
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.landing-page-nav .navbar-nav li {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  position: relative;
  margin-bottom: 0;
}
.landing-page-nav .navbar-nav li:last-of-type {
  padding-right: 0;
}
.landing-page-nav .navbar-nav li.active:before {
  content: " ";
  background: #fff;
  border-radius: 10px;
  position: absolute;
  width: calc(100% - 1.5rem);
  height: 4px;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0;
}
@media (max-width: 1199px) {
.landing-page-nav .navbar-nav li {
    padding-left: 0.85rem;
    padding-right: 0.85rem;
  }
.landing-page-nav .navbar-nav li:last-of-type {
    padding-right: 0;
  }
}
 .landing-page-nav .navbar-nav .nav-item > .dropdown > a,
.landing-page-nav .navbar-nav .nav-item > a {
  color: #fff;
  font-family: Nunito, sans-serif;
  font-size: 1rem;
  display: inline-block;
  margin-top: 0;
}

  .landing-page-nav
  .navbar-nav
  .nav-item:not(.active)
  .dropdown
  > a:active:not(.btn),
.landing-page
  .landing-page-nav
  .navbar-nav
  .nav-item:not(.active)
  .dropdown
  > a:hover:not(.btn),
  .landing-page-nav
  .navbar-nav
  .nav-item:not(.active)
  > a:active:not(.btn),
  .landing-page-nav
  .navbar-nav
  .nav-item:not(.active)
  > a:hover:not(.btn) {
  opacity: 0.8;
}
.landing-page-nav .navbar-nav .dropdown {
  height: 80px;
  position: relative;
}
.landing-page-nav .navbar-nav .dropdown:hover > .dropdown-menu {
  display: block;
}

  .landing-page-nav
  .navbar-nav
  .dropdown
  > .dropdown-toggle:active {
  pointer-events: none;
}
.landing-page-nav .navbar-nav .dropdown .dropdown-menu {
  position: absolute;
  margin-top: 0;
}
.landing-page-nav .navbar-nav .dropdown a.dropdown-item {
  font-size: 0.8rem;
  color: #3a3a3a;
  padding-bottom: 0.5rem;
}
.landing-page-nav .navbar-nav .dropdown a.dropdown-item.active,
.landing-page-nav .navbar-nav .dropdown a.dropdown-item:active {
  color: #fff;
}
 .landing-page-nav .headroom--pinned {
  background: #fff;
  -webkit-box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04),
    0 1px 6px rgba(0, 0, 0, 0.04);
  box-shadow: 0 1px 15px rgba(0, 0, 0, 0.04), 0 1px 6px rgba(0, 0, 0, 0.04);
}
 .landing-page-nav .headroom--pinned .navbar-logo .white {
  display: none;
}
 .landing-page-nav .headroom--pinned .navbar-logo .dark {
  display: inline-block;
}
.landing-page-nav .headroom--pinned .navbar-nav a {
  color: #3a3a3a;
}
.landing-page-nav .headroom--pinned .navbar-nav a:active,
.landing-page-nav .headroom--pinned .navbar-nav a:hover {
  color: #008ecc;
}
  .landing-page-nav
  .headroom--pinned
  .navbar-nav
  a.dropdown-item:focus {
  color: #fff;
}
 .landing-page-nav .headroom--pinned .navbar-nav li.active:before {
  content: " ";
  background-color: #008ecc;
}
  .landing-page-nav
  .headroom--pinned
  .navbar-nav
  .btn-outline-semi-light {
  border: 1px solid rgba(0, 142, 204, 0.3);
  color: #008ecc;
}
  .landing-page-nav
  .headroom--pinned
  .navbar-nav
  .btn-outline-semi-light:active,
  .landing-page-nav
  .headroom--pinned
  .navbar-nav
  .btn-outline-semi-light:hover {
  border: 1px solid #008ecc;
  background: #008ecc;
  color: #fff;
}
.landing-page-nav .headroom--unpinned {
  background: transparent;
}
.landing-page-nav .headroom--unfixed .mobile-menu-button {
  color: #fff;
}
.landing-page-nav .headroom--top {
  color: #fff;
  -webkit-box-shadow: initial;
  box-shadow: none;
  background: transparent;
}
 .landing-page-nav .headroom--top .navbar-nav a,
.landing-page
  .landing-page-nav
  .headroom--top
  .navbar-nav
  a.dropdown-item:focus,
.landing-page-nav .headroom--top .navbar-nav a:active,
.landing-page-nav .headroom--top .navbar-nav a:hover {
  color: #fff;
} */


</style>