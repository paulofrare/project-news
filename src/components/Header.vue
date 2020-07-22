<template>
  <q-header elevated>
    <div class="header">
      <div>
        <q-btn class="menu" flat round aria-label="Menu" icon="menu" />
      </div>
      <div class="titulo">Patota News</div>
      <div>
        <q-btn class="btn-dir" flat color="gray" icon="account_circle" label="Entrar" />
        <q-btn class="btn-dir" flat color="gray" icon="search" label="BUscar" />
      </div>
    </div>
  </q-header>
</template>

<script>
export default {
  name: "Header",

  components: {},

  data() {
    return {};
  }
};
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background-color: rgb(82, 82, 82);
  align-items: center;
}

.titulo {
  padding-left: 150px;
  font-size: 2.5rem;
  font-family: "Playfair Display", serif;
}

.menu {
  font-size: 1.4rem !important;
}

.btn-dir {
  font-family: "Playfair Display", serif;
}
</style>