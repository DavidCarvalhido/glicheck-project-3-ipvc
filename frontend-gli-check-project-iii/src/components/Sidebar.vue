<template>
    <div class="sidebar-wrapper">
      <ul class="nav" id="nav">
        <li>
          <router-link to="/table">
            <i class="nc-icon nc-tile-56"></i>
            <p>Adicionar Utilizador</p>
          </router-link>
        </li>
        <li>
          <router-link to="/user">
            <i class="nc-icon nc-simple-add"></i>
            <p>Inserir Valores</p>
          </router-link>
        </li>
        <li>
          <router-link to="/typo">
            <i class="nc-icon nc-tile-56"></i>
            <p>Listar Utilizadores</p>
          </router-link>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sidebar'
  }
  </script>
  
  <style scoped>
  #nav {
    padding: 0px;
  }
  
  /* Highlight */
  #nav a.router-link-exact-active {
    color:#ececec;
    opacity: 1;
    background: rgb(164, 164, 255);
    border-radius: 10px;
    /*margin-left: 0px;
    margin-right: 0px;*/
  }
  
  #nav a {
    font-size: 10px;
    margin-left: 7px;
    margin-right: 7px;
    text-align: left;
  }
  </style>