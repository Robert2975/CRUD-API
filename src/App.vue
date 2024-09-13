<template>
  <div id="app">
    <nav class="navigation-menu">
      <ul>
        <li>
          <router-link to="/">
            Home 
          </router-link>
        </li>
        <li>
          <router-link to="/Cadastrar">
            Cadastrar 
          </router-link>
        </li>
        <li>
          <router-link to="/Consultar">
            Consultar 
          </router-link>
        </li>
        <li>
          <router-link to="/Editar">
            Editar 
          </router-link>
        </li>
      </ul>
    </nav>
    <RouterView/>
  </div>
</template>

