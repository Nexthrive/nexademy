<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const tabAktif = ref("");
const router = useRouter();

const navigasi = (tab: string) => {
  tabAktif.value = tab;
  router.push(`/${tab}`);
};

</script>

<template>
  <div class="header-container">
    <div class="brand-logo">
      <img src="../assets/Nexademy.png" alt="SG" @click="navigasi('')" />
    </div>
    <div class="menu-container">
    </div>
    <div class="nav">
      <!-- <div class="nav-item">PROFILE</div> -->
      <div class="nav-item"><ion-icon name="log-out"></ion-icon></div>
      <img src="../assets/Doge hehe.jpg" class="profil-pic" alt="" @click="navigasi('')" />
    </div>
  </div>
</template>

<style scoped>
.profil-pic {
  background-color: #0000ff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}
.nav {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* width: 100%; */
}
.nav-item {
  /* background-color: #0000ff; */
  color: #222;
  padding: 10px;
  cursor: pointer;
}

.header-container {
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
  white-space: nowrap;
  padding: 0 1px;
}

@media (max-width: 991px) {
  .header-container {
    max-width: 100%;
    flex-wrap: wrap;
    white-space: initial;
  }
}

.brand-logo {
  align-self: start;
  margin-top: 8px;
  flex-grow: 1;
  flex-basis: auto;
}

.brand-logo img {
  width: 60px;
  cursor: pointer;
  margin-bottom: 7px;
}

.brand-logo:hover img {
  margin-bottom: 7px;
}

.menu-container {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  margin: auto 0;
  padding: 0 60px;
}

@media (max-width: 991px) {
  .menu-container {
    max-width: 100%;
    white-space: initial;
    padding: 0 20px;
  }
}

.menu-items {
  display: flex;
  width: 333px;
  max-width: 100vw;
  justify-content: center;
  gap: 20px;
  /* margin-right: 290px; */
  position: absolute;
  /* top: 50%; */
  left: 50%;
  transform: translateX(-50%);
}

@media (max-width: 991px) {
  .menu-items {
    white-space: initial;
    /* margin-right: 290px; */
    position: absolute;
    /* top: 50%; */
    left: 50%;
    transform: translateX(-50%) translateY(-190%);
  }
}

.menu-item {
  color: #000;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}

.nav-item {
  font-family: Poppins, sans-serif;
  justify-content: center;
  padding: 10px 25px;
  margin-top: 10px;
}

@media (max-width: 991px) {
  .profile-section {
    white-space: initial;
    /* padding: 0 20px; */
  }
}
</style>
