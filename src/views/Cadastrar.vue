<template>
    <div >
      <h1 class="titulo">Cadastrar</h1>
      <form @submit.prevent="cadastrar">
      <div>
        <label for="descricao">Descrição:</label>
        <input class="inputCad" type="text" v-model="data.descricao" id="descricao" required />
      </div>
      <div>
        <label for="quantidade">Quantidade:</label>
        <input class="inputCad" type="number" v-model="data.quantidade" id="quantidade" required />
      </div>
      <div>
        <label for="preco">Preço:</label>
        <input class="inputCad" type="number" v-model="data.precoCompra" id="preco" required />
      </div>
      <div>
        <label for="data">Data:</label>
        <input class="inputCad" type="date" v-model="data.dataEntrada" id="data" required />
      </div>
      <button class="btnSubmit" type="submit">Cadastrar</button>
    </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  export default {
  data() {
    return {
      data: {
        descricao: '',
        quantidade: '',
        precoCompra: '',
        dataEntrada: ''
      }
    };
  },
  methods: {
    async cadastrar() {
      // Aqui você pode adicionar a lógica para enviar os dados do formulário
        try {
            const response = await axios.post('http://localhost:3000/produtos', this.data);
            alert('Cadastrado com Sucesso!', response.data);
        }catch(error) {
          console.error('Erro ao postar!', error);
        }
    }
  }
}
</script>
  
  