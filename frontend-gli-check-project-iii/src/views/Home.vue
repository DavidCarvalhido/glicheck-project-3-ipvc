<template>
  <section id="webkit">
    <nav class="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
      <div class="container-fluid">
        <div class="navbar-wrapper">
          <a class="navbar-brand" href="javascript:void(0);">
            <img src="../assets/LogoMain.png" alt="Glicheck" width="30" height="30" class="d-inline-block align-text-top">
            <!--Glicheck -- criar imagem com logo e titulo ao lado-->
          </a>
        </div>
        <!--Hamburger Button-->
        <div class="navbar-toggle">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
            <!--<span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>
            <span class="navbar-toggler-bar navbar-kebab"></span>-->
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse justify-content-end" id="navigation">
          <ul class="navbar-nav">
            <li class="nav-item">
              <!--<div class="group-buttons">
                <router-link id="login-button" to="/login">Iniciar sessão</router-link>
                <router-link id="register-button" to="/register">Registar</router-link>
              </div>-->
              <!--<a class="nav-link btn-magnify" href="javascript:;">
                <i class="nc-icon nc-layout-11"></i>
                <p><span class="d-lg-none d-md-block">Stats</span></p>
              </a>-->
              <form class="nav-link">
                <router-link id="login-button" to="/login">Iniciar sessão</router-link>
                <router-link id="register-button" to="/register">Registar</router-link>
              </form>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="group-buttons">
      <router-link id="login-button" to="/login">Iniciar sessão</router-link>
      <router-link  id="register-button" to="/register">Registar</router-link>
    </div> -->
  </section>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
#webkit {
  background: linear-gradient(24deg, #2c73c5, #cc7493, #ec8b5f);
  background-size: 600% 600%;
  -webkit-animation: AnimationBackground 8s ease infinite;
  -moz-animation: AnimationBackground 8s ease infinite;
  -o-animation: AnimationBackground 8s ease infinite;
  animation: AnimationBackground 8s ease infinite;
  min-height: 100vh;
  display: flex;
}

@-webkit-keyframes AnimationBackground {
  0% {
    background-position: 42% 0%;
  }
  50% {
    background-position: 59% 100%;
  }
  100% {
    background-position: 42% 0%;
  }
}
@-moz-keyframes AnimationBackground {
  0% {
    background-position: 42% 0%;
  }
  50% {
    background-position: 59% 100%;
  }
  100% {
    background-position: 42% 0%;
  }
}
@-o-keyframes AnimationBackground {
  0% {
    background-position: 42% 0%;
  }
  50% {
    background-position: 59% 100%;
  }
  100% {
    background-position: 42% 0%;
  }
}
@keyframes AnimationBackground {
  0% {
    background-position: 42% 0%;
  }
  50% {
    background-position: 59% 100%;
  }
  100% {
    background-position: 42% 0%;
  }
}

.logo {
  width: 25%;
}

.group-buttons {
  /* justify-content: space-between; */
  width: 20px;
}

#login-button {
  font-size: 1.1em;
  color: #5c5c5c;
  text-decoration: none;
}

#register-button {
  font-size: 1.1em;
  color: #5c5c5c;
  text-decoration: none;
  border: 3px solid #5c5c5c;
  border-radius: 5px;
  padding: 5px 8px;
}

#register-button:hover {
  color: #1d1d1d;
  border: 3px solid #1d1d1d;
}

#login-button:hover {
  color: #1d1d1d;
}

@media screen and (max-width: 800px) {
  #login-button {
    font-size: 1em;
    color: #5c5c5c;
    text-decoration: none;
  }

  #register-button {
    font-size: 1em;
    color: #5c5c5c;
    text-decoration: none;
    border: 3px solid #5c5c5c;
    border-radius: 5px;
    padding: 5px 8px;
  }
}
</style>
