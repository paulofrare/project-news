<template>
  <footer class="footer text-center text-grey-4" elevated>
    <div class="newsletter">
      <div class="titulo newsletter-item">Receba nossa Newsletter:</div>
      <div class="nome newsletter-item">
        <q-input
          class="news-imput"
          outlined
          dark
          color="white"
          label-color="white"
          v-model="nome"
          label="Nome Completo"
        />
      </div>
      <div class="email newsletter-item">
        <q-input
          color="white"
          class="news-imput"
          outlined
          dark
          label-color="white"
          v-model="email"
          label="Seu melhor e-mail"
        />
      </div>
      <div class="newsletter-item">
        <q-btn class="btn" outline color="white" label="Enviar" />
      </div>
    </div>
    <div class="redes">
      <div class="facebook redes-item">
        <img src="../assets/face.png" alt />
        <span>/patotanews</span>
      </div>
      <div class="twitter redes-item">
        <img src="../assets/twitter.png" alt />
        <span>@patotanews</span>
      </div>
      <div class="youtube redes-item">
        <img src="../assets/youtube.png" alt />
        <span>/patotanews</span>
      </div>
      <div class="instagram redes-item">
        <img src="../assets/insta.png" alt />
        <span>@patotanews</span>
      </div>
    </div>
    <div class="copy">
      <p>Patota News ©- {{ano}} - Todos os direitos reservados</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",

  components: {},

  data() {
    return {
      ano: new Date().getFullYear(),
      nome: "",
      email: "",
    };
  },
};
</script>

<style scoped>
.footer {
  width: 100%;
  font-family: "Playfair Display", serif;
  bottom: 0;
  margin-top: 150px;
}

.redes {
  height: 100px;
  background-color: #858383;
}

.copy {
  padding-top: 25px;
  height: 70px;
  background-color: #3e3e3e;
  font-size: 1rem;
}

.redes {
  display: flex;
  justify-content: center;
}

img {
  max-width: 50px;
}

.redes-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
}

.newsletter {
  padding-top: 10px;
  height: 150px;
  background-color: #777777;
  display: flex;
  justify-content: center;
  align-items: center;
}

.newsletter-item {
  margin-right: 10px;
  margin-left: 10px;
}

.titulo {
  font-size: 2rem;
  padding-bottom: 10px;
}

.news-imput {
  width: 300px;
}

.btn {
  height: 53px;
  width: 200px;
}
</style>

