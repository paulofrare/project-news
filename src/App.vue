<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <Header></Header>
      <Nav></Nav>
      <transition mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
export default {
  name: "LayoutDefault",
  components: { Header, Nav },

  data() {
    return {};
  }
};
</script>

<style>
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
