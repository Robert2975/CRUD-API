<template>
  <div class="container">
    
    <h1 class="titulo">Consultar</h1>
      <div id="divBusca">
        <!-- <img src="search3.png" alt="Buscar..."/> -->
            <input type="text" v-model="busca" id="txtBusca" placeholder="Buscar..."/>
            <button id="btnBusca">Buscar</button>
      </div>

      <table>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Quantidade</th>
            <th scope="col">Preço de Compra</th>
            <th scope="col">Data de Entrada</th>
          </tr>
        </thead>

        <tbody>
          <tr  v-for="item in itensFiltrados" :key="item.id">
            <td class="desc">{{ item.descricao }}</td>
            <td>{{ item.quantidade }}</td>
            <td>{{ item.precoCompra }}</td>
            <td>{{ item.dataEntrada}}</td>
          </tr>
        </tbody>

        <tfoot>
          <tr>
            <td>Total de Itens:</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            
          </tr>
        </tfoot>
        
      </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      busca: '',
      items: [],
    };
  },
  created() {
    this.fetchItems();
    
  },

  methods: {
    async fetchItems() {
      try {
        const response = await axios.get('http://localhost:3000/produtos');
        this.items = response.data;
      } catch (error) {
        console.error('Erro ao buscar itens:', error);
      }
    },
  },

  computed: {
    itensFiltrados(){
      if(this.busca === ''){
        return this.items;
      }else{
        return this.items.filter(item =>
          item.descricao.toLowerCase().includes(this.busca.toLowerCase())
        )
      }
    }
  },

  
};
</script>

<style scoped>

</style>












