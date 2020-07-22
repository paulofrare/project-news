<template>
  <div class="nav">
    <q-tabs v-model="tab" inline-label class="bg-grey text-white shadow-2 nav">
      <router-link to="/geral">
        <q-tab class="tab" name="geral" label="Geral" />
      </router-link>
      <router-link to="/entretenimento">
        <q-tab class="tab" name="entretenimento" label="Entretenimento" />
      </router-link>
      <router-link to="/tecnologia">
        <q-tab class="tab" name="tecnologia" label="Tecnologia" />
      </router-link>
      <router-link to="/ciencia">
        <q-tab class="tab" name="ciencia" label="Ciência" />
      </router-link>
      <router-link to="/saude">
        <q-tab class="tab" name="saude" label="Saúde" />
      </router-link>
      <router-link to="/esporte">
        <q-tab class="tab" name="esporte" label="Esporte" />
      </router-link>
    </q-tabs>
  </div>
</template>

<script>
export default {
  name: "Nav",

  components: {},

  data() {
    return {
      tab: ""
    };
  }
};
</script>

<style>
.tab {
  font-family: "Playfair Display", serif;
  padding-right: 20px;
  padding-left: 20px;
}

a {
  color: rgba(19, 19, 19, 0.842);
  text-decoration: none;
}
</style>