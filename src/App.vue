<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img src="@/assets/logo01.png" alt="Logo" height="25">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="w-100 d-flex flex-column">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link" to="/aa" active-class="active">Shipment Detail</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/bb" active-class="active">Cargo Tracking</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/cc" active-class="active">Statistics Report</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/dd" active-class="active">ISF Status</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-md-center" to="/ee" active-class="active">
                  Shipments Status<br class="d-none d-md-inline">Update
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <keep-alive include="BBPage">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.navbar {
  background-color: #e6f2e6;
}

.nav-link {
  color: #006400;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 14px;
  font-weight: bold;
}

.nav-link:hover {
  background-color: #c1e1c1;
  color: #004d00;
}

.nav-item .active {
  background-color: #a9d6a9;
  box-shadow: inset 0px 3px 5px rgba(0, 0, 0, 0.2);
  color: white;
}

/* 在 md 以下隱藏 <br> */
.d-none {
  display: none;
}

.d-md-inline {
  display: inline;
  /* 在 md 及以上顯示 */
}
</style>
