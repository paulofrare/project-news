<template>
  <div class="home" v-if="ready">
    <div v-for="noticia in noticias" :key="noticia.publishedAt" class="noticia">
      <div
        v-if="noticia.urlToImage && noticia.publishedAt && noticia.description"
        class="noticia-container"
      >
        <q-img
          class="imagem"
          :src="noticia.urlToImage"
          spinner-color="white"
          style="height: 450px; width: 960px"
        />
        <div class="noticia-titulo">{{noticia.title}}</div>
        <q-separator />
        <div
          class="autor-data"
        >{{noticia.author ? noticia.author : "Autor Desconhecido"}} | {{noticia.publishedAt}}</div>
        <q-separator />
        <div class="descricao">{{noticia.description}}</div>
        <q-separator size="4" color="black" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { api } from "../../services.js";

export default {
  name: "Categoria",
  props: ["categoria"],
  components: {},
  data() {
    return {
      noticias: [],
      ready: false,
    };
  },
  watch: {
    categoria() {
      this.buscar();
    },
  },
  created() {
    this.buscar();
  },
  methods: {
    buscar() {
      this.ready = false;
      let cat = "";
      switch (this.categoria) {
        case "geral":
          cat = "general";
          break;
        case "entretenimento":
          cat = "entertainment";
          break;
        case "tecnologia":
          cat = "technology";
          break;
        case "ciencia":
          cat = "science";
          break;
        case "saude":
          cat = "health";
          break;
        case "esporte":
          cat = "sports";
          break;
      }
      api.get(cat).then((r) => {
        this.noticias = r.data.articles;
        this.ready = true;
      });
    },
  },
};
</script>

<style  scoped>
.home {
  max-width: 960px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

.noticia {
  width: 100%;
}

.noticia-titulo {
  font-size: 2rem;
  max-width: 960px;
  font-family: "Playfair Display", serif;
}

.q-img {
  margin-top: 50px;
  border: rgb(97, 97, 97) 2px solid;
  max-width: 100%;
  border-radius: 5px;
}
.autor-data {
  font-size: 1rem;
  font-family: "Playfair Display", serif;
  max-width: 960px;
  padding-top: 4px;
  padding-bottom: 4px;
}

.descricao {
  max-width: 960px;
  font-family: "Playfair Display", serif;
  font-size: 1.5rem;
  margin-bottom: 15px;
}
</style>
