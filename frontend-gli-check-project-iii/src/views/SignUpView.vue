<template>
  <div class="geral">
    <section id="background-page">
      <div class="form-geral">
        <router-link to="/">
          <img class="logo" src="../assets/logo.png" alt="Glicheck">
        </router-link>
        <hr>
        <h1>Sign Up</h1>
        <div class="formulario">
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <input type="text" class="form-control" v-model="username" placeholder="Username" required>
            </div>
            <div class="form-group">
              <input type="email" class="form-control" v-model="email" placeholder="Email" required>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="password" placeholder="Password" required>
            </div>
            <div class="form-group">
              <input type="password" class="form-control" v-model="repassword" placeholder="Rewrite your Password"
                required>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="first_name" placeholder="First name" required>
            </div>
            <div class="form-group">
              <input type="text" class="form-control" v-model="last_name" placeholder="Last name" required>
            </div>
            <div class="number-group">
              <div class="form-group">
                <input type="number" class="form-control" v-model="user_weight" min="0" placeholder="Weight" required>
              </div>
              <div class="form-group">
                <input type="number" class="form-control" v-model="user_height" min="50" max="350" placeholder="Height" required>
              </div>
            </div>
            <div class="form-group">
              <input type="number" class="form-control" v-model="user_age" min="0" placeholder="Age" required>
            </div>
            <!-- Aqui será um dropdown com os indicativos dos países -->
            <div class="phone-group">
              <div class="form-group">
                <select name="country_codes" id="country-select" required>
                  <option value="">--Please choose an option--</option>
                  <option value="pt">Portugal +351</option>
                  <option value="es">Espanha +351</option>
                </select>
              </div>
              <div class="form-group">
                <input type="tel" class="form-control-phone" v-model="phone_number" placeholder="Phone number" required>
              </div>
            </div>
            <div class="form-group">
              <button class="signup-btn">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'SignUpView',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      repassword: '',
      first_name: '',
      last_name: '',
      user_weight: '',
      user_height: '',
      user_age: '',
      country: '',
      phone_number: '',
      role_ID: '',
    };
  },
  methods: {
    async handleSubmit() {
      const response = await axios.post('', {
        username: this.username,
        password: this.password,
        repassword: this.repassword,
        first_name: this.first_name,
        last_name: this.last_name,
        user_weight: this.user_weight,
        user_height: this.user_height,
        user_age: this.user_age,
        country: this.country,
        phone_number: this.phone_number,
        role_ID: this.role_ID,
      });
      console.log(response);
      this.$router.push('/login');
    },
  },
};
</script>
  
<style scoped lang="scss">
#background-page {
  background: linear-gradient(24deg, #ffc260, #cc7493, #ec8b5f);
  min-height: 100vh;
  display: flex;
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
  height: auto;
  padding-bottom: 20px;
}

hr {
  width: 80%;
  border: 0.1em solid;
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
  padding-top: 20px;
  /* padding: 0 500px 0 500px;
    padding-left: 500px;
    padding-right: 500px;
    color: #3b3b3b;*/
}

input {
  padding: 0 20px;
}

.form-control {
  width: 300px;
  height: 45px;
  border-radius: 8px;
  font-size: 01em;
}

.form-group-buttons {
  margin: auto;
  display: inline;
}

.number-group {
  background-color: #f34079;
  display: flex;
}

.phone-group {
  display: flex;
}

.signup-btn {
  margin: 20px auto 50px;
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  width: 100%;
  border: 3px solid #c3c3c3;
  border-radius: 10px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: "Codec cold", sans-serif;
  font-size: 16px;
  font-weight: 700;
  height: 54px;
  justify-content: center;
  letter-spacing: .4px;
  line-height: 1;
  max-width: 100%;
  padding: 3px 20px 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.signup-btn:active {
  outline: 0;
}

.signup-btn:hover {
  outline: 0;
}

.signup-btn span {
  transition: all 200ms;
}

.signup-btn:hover span {
  transform: scale(.9);
  opacity: .75;
}

@media screen and (max-width: 991px) {
  .signup-btn {
    font-size: 15px;
    height: 50px;
  }

  .signup-btn span {
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
