<template>
  <div class="geral">
    <section id="webkit">
      <div class="form-geral">
        <router-link to="/">
          <img class="logo" src="../assets/LogoMain.png" alt="Glicheck">
        </router-link>
        <hr>
        <h1>Registo</h1>
        <div class="formulario">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" class="form-control" v-model="username" placeholder="Utilizador" />
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password" placeholder="Password" />
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="role_ID" placeholder="Role" />
            </div>
            <div class="form-group">
              <button class="btn-register">Registar</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      password: "",
      role_ID: "",
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post("", {
        username: this.username,
        password: this.password,
        role_ID: this.role_ID,
      });
      console.log(response);
      this.$router.push("/login");
    },
  },
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
  0% {background-position: 42% 0%;}
  50% {background-position: 59% 100%;}
  100% {background-position: 42% 0%;}
}
@-moz-keyframes AnimationBackground {
  0% {background-position: 42% 0%;}
  50% {background-position: 59% 100%;}
  100% {background-position: 42% 0%;}
}
@-o-keyframes AnimationBackground {
  0% {background-position: 42% 0%;}
  50% {background-position: 59% 100%;}
  100% {background-position: 42% 0%;}
}
@keyframes AnimationBackground {
  0% {background-position: 42% 0%;}
  50% {background-position: 59% 100%;}
  100% {background-position: 42% 0%;}
}

.form-geral {
  margin: auto;
  margin-top: 4.5rem;
  width: 25%;
  text-align: center;
  color: #474747;
}

.logo {
  width: 60px;
  height: auto;
  padding-bottom: 20px;
}

hr {
  width: 100%;
  border: 1px solid;
  color: #474747;
}

.form-geral h1 {
  margin: 40px 0px 40px 0px;
  font-family: open sans, Arial, Helvetica Neue, sans-serif;
  font-size: 2.3em;
  text-transform: uppercase;
  line-height: 0.8;
  letter-spacing: .1em;
  color: #3b3b3b;
}

.formulario {
  padding-top: 70px;
  /* padding: 0 500px 0 500px;
  padding-left: 500px;
  padding-right: 500px;
  color: #3b3b3b;*/
}

.form-group-buttons {
  margin: auto;
  display:inline;
}

.btn-register {
    margin-top: 20px;
    align-items: center;
    background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
    width: 100%;
    border: 3px solid #c3c3c3;
    border-radius: 10px;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    font-family: "Codec cold",sans-serif;
    font-size: 16px;
    font-weight: 700;
    height: 54px;
    justify-content: center;
    letter-spacing: .4px;
    line-height: 1;
    max-width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 3px;
    text-decoration: none;
    text-transform: uppercase;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
  }
  
  .btn-register:active {
    outline: 0;
  }
  
  .btn-register:hover {
    outline: 0;
  }
  
  .btn-register span {
    transition: all 200ms;
  }
  
  .btn-register:hover span {
    transform: scale(.9);
    opacity: .75;
  }
  
  @media screen and (max-width: 991px) {
    .btn-register {
      font-size: 15px;
      height: 50px;
    }
  
    .btn-register span {
      line-height: 50px;
    }
  }

.formulario button {
  margin-top: 30px;
}

.form-group {
  padding: 5px;
}
</style>