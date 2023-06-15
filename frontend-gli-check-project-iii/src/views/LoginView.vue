<template>
  <div class="geral">
    <section id="webkit">
      <div class="form-geral">
        <router-link to="/">
          <img class="logo" src="../assets/logo.png" alt="Glicheck">
        </router-link>
        <hr>
        <h1>Glicheck</h1>
        <div class="formulario">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" class="form-control" v-model.trim="$v.username.$model"
                :class="{ 'is-invalid': $v.username.$error, 'is-valid': !$v.username.$invalid }"
                placeholder="Nome de utilizador">
              <div class="valid-feedback">Your username is valid</div>
              <div class="invalid-feedback">
                <span v-if="!$v.username.required">Username is required.</span>
                <span v-if="!$v.username.isUnique">This username is already registered.</span>
                <!--meter isto no register-->
              </div>
            </div>
            <div class="form-group">
              <input type="password" id="password" class="form-control" v-model.trim="$v.password.$model"
                :class="{ 'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid }"
                placeholder="Palavra-passe" />
              <div class="valid-feedback">Your password is valid</div>
              <div class="invalid-feedback">
                <span v-if="!$v.password.required">Password is required.</span>
                <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min }} characters minimum.</span>
              </div>
            </div>
            <div class="form-group">
              <input type="checkbox" id="showpassword" class="form-check-input" @click="toggleShowPassword"
                v-model="showpassword">
              <label class="form-check-label" for="showpassword">Mostrar palavra-passe</label>
            </div>
            <br>
            <div class="form-group-buttons">
              <router-link to="/register" style="color: #474747">Não tem conta? Registe-se aqui.</router-link>
              <button class="btn-login">Iniciar sessão</button>
            </div>
            <div class="card">
              <p>some text here</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
// APAGAR E FAZER NATIVAMENTE
// import { required, minLength, maxLength, between, email, sameAs, numeric, url } from 'vuelidate/lib/validators';

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      showpassword: false
    }
  },
  validations: {
    username: {
      required,
      isUnique(value) {
        if (value === '') return true
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(typeof value === 'string' && value.length % 2 !== 0)
          }, 350 + Math.random() * 300)
        })
      }
    },
    password: {
      required,
      minLength: minLength(8)
    }
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('login', {
        username: this.username,
        password: this.password,
      });
      console.log(response);
      //atribui o token
      localStorage.setItem('token', response.data.token);
      this.$router.push('/table');

      /*if (response.data.role == 'Administrador') {
      }
      else if (response.data.role == 'Utilizador') {
        this.$router.push('/admin');
      }*/
      /*else {
        alert('O nome de utilizador e/ou a palavra-passe estão incorretos');
        //this.$router.push('/');
      }*/
    },
    toggleShowPassword() {
      var show = document.getElementById('password')
      if (this.showpassword == false) {
        this.showpassword = true
        show.type = 'text'
      } else {
        this.showpassword = false
        show.type = 'password'
      }
    }
  }
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

.form-geral {
  margin: auto;
  margin-top: 4.5rem;
  width: 25%;
  text-align: center;
  color: #474747;
}

.logo {
  width: 120px;
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
  margin-top: 70px;
}

.form-group-buttons {
  margin: auto;
  display: inline;
}

.btn-login {
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
  font-family: "Codec cold", sans-serif;
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

.btn-login:active {
  outline: 0;
}

.btn-login:hover {
  outline: 0;
}

.btn-login span {
  transition: all 200ms;
}

.btn-login:hover span {
  transform: scale(.9);
  opacity: .75;
}

@media screen and (max-width: 991px) {
  .btn-login {
    font-size: 15px;
    height: 50px;
  }

  .btn-login span {
    line-height: 50px;
  }
}

.invalid-feedback span {
  /*padding: 5px;*/
  text-align: right;
}

/*
  /* .form-check-input {
    left: 0px;
  } */

.card {
  border-bottom: 100px solid red;
  border-left: 50px solid transparent;
  height: 0;
  width: 100px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.35);
  backdrop-filter: blur(15px);
}

@media screen and (max-width: 800px) {
  #webkit {
    background: linear-gradient(24deg, #2c73c5, #cc7493, #ec8b5f);
    /*background: linear-gradient(173deg, #e47c35, #eee8d6, #e47c35);*/
    background-size: 600% 600%;
    -webkit-animation: AnimationName 8s ease infinite;
    -moz-animation: AnimationName 8s ease infinite;
    -o-animation: AnimationName 8s ease infinite;
    animation: AnimationName 8s ease infinite;
    min-height: 100vh;
    display: flex;
  }

  @-webkit-keyframes AnimationName {
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

  @-moz-keyframes AnimationName {
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

  @-o-keyframes AnimationName {
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

  @keyframes AnimationName {
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
    width: 60px;
    padding-bottom: 20px;
  }

  hr {
    width: 100%;
    border: 1px solid;
    color: #474747;
  }

  .form-geral {
    margin: auto;
    margin-top: 2rem;
    width: 70%;
    text-align: center;
    color: #474747;
  }

  .form-geral h1 {
    margin: 30px 0px 30px 0px;
    font-family: open sans, Arial, Helvetica Neue, sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    line-height: 0.8;
    letter-spacing: .1em;
    color: #3b3b3b;
  }
}
</style>
<!-- O <HR> não está proporcional quando a página está em landscape no smartphone -->
