<template>
  <div class="home" v-if="ready">
    <div v-for="(noticia, index) in noticias" :key="index" class="noticia">
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
    <div class="btn">
      <q-btn
        v-if="mostraBtn"
        @click="buscar(page)"
        class="btn"
        outline
        color="black"
        label="Mais noticias"
      />
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
      page: null,
      totalResults: 0,
      mostraBtn: false,
    };
  },
  watch: {
    categoria() {
      this.page = 1;
      this.ready = false;
      this.noticias = [];
      this.buscar(this.page);
    },
  },
  created() {
    this.page = 1;
    this.buscar(this.page);
  },
  methods: {
    async buscar(pag) {
      this.mostraBtn = false;
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
      await api.get(cat, pag).then((r) => {
        this.noticias.push(...r.data.articles);
        this.totalResults = r.data.totalResults;
        this.ready = true;
        this.page++;
      });
      if (this.noticias.length < this.totalResults) {
        console.log("aui");
        this.mostraBtn = true;
      }
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

.btn {
  margin-top: 20px;
}
</style>
