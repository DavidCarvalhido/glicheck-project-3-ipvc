<template>
  <div class="geral">
    <section class="background-page">
      <div class="form-geral">
        <router-link to="/">
          <img class="logo" src="../assets/images/logo.png" alt="Glicheck">
        </router-link>
        <hr>
        <h1>Sign up</h1>
        <div class="formulario">
          <form @submit.prevent="handleSubmit">
            <div class="form-splitter">
              <div class="form-split">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="username" placeholder="Username" >
                </div>
                <div class="form-group">
                  <input type="email" class="form-control" v-model="email" placeholder="Email" >
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" v-model="password" placeholder="Password" >
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" v-model="repassword" placeholder="Rewrite your Password" >
                </div>
              </div>
              <div class="vertical-line"></div>
              <div class="form-split">
                <div class="form-group">
                  <input type="text" class="form-control" v-model="first_name" placeholder="First name" >
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" v-model="last_name" placeholder="Last name" >
                </div>
                <div class="number-group">
                  <div class="form-group new-group">
                    <input type="number" class="form-control" v-model="user_weight" min="0" placeholder="Weight" >
                    <div class="right-value">KG</div>
                  </div>
                  <div class="form-group new-group">
                    <input type="number" class="form-control" v-model="user_height" min="50" max="350"
                      placeholder="Height" >
                    <div class="right-value">CM</div>
                  </div>
                </div>
                <div class="form-group new-group number-group">
                  <input type="number" class="form-control age-control" v-model="user_age" min="0" placeholder="Age" >
                  <!-- <div class="tooltip">
                    <img class="info-icon" src="../assets/info_icon.png" alt="Info for account">
                    <span class="tooltiptext">We need colect your age because the glicose levels can vary, depending on the advance of your age.</span>
                  </div> -->
                </div>
                <!-- Aqui será um dropdown com os indicativos dos países -->
                <div class="phone-group">
                  <div class="form-group">
                    <select name="country_codes" id="country-select" class="country-dropdown" >
                      <option value="">Choose an option</option>
                      <option value="pt">Portugal +351</option>
                      <option value="es">Espanha +351</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <input type="tel" class="form-control-phone" v-model="phone_number" placeholder="Phone number" >
                  </div>
                </div>
                <!-- meter por baixo do formulario como deve ser -->
                <div class="form-group">
                  <button class="signup-btn">Sign up</button>
                </div>
              </div>
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
      this.$router.push('/signup');
    },
  },
};
</script>

<style scoped lang="scss">
.background-page {
  background: linear-gradient(24deg, #ffc260, #cc7493, #ec8b5f);
  min-height: 100vh;
  display: flex;
}

.vertical-line {
  border-left: 2px solid #3b2e30;
  margin: 0 120px;
  height: 470px;
}

.form-splitter {
  display: flex;
}

.form-geral {
  margin: auto;
  margin-top: 4.5rem;
  text-align: center;
  color: #474747;
}

.logo {
  width: 120px;
  height: auto;
  padding-bottom: 20px;
}

hr {
  width: 100%;
  color: #3b2e30;
}

.form-geral h1 {
  margin: 40px 0px 40px 0px;
  font-family: open sans, Arial, Helvetica Neue, sans-serif;
  font-size: 2.0em;
  line-height: 0.8;
  letter-spacing: .1em;
  color: #3b3b3b;
}

.formulario {
  padding-top: 20px;
}

input {
  padding: 0 20px;
  /* border:  2px solid #474747; */
  border: none;
}

input:focus {
  outline: 3px solid #474747;
}

.form-control {
  margin: 10px 0;
  width: 450px;
  height: 45px;
  border-radius: 8px;
  font-size: 01em;
}

.form-control-phone {
  width: 310px;
  height: 45px;
  border-radius: 8px;
  font-size: 01em;
}

.form-group-buttons {
  margin: auto;
  display: inline;
}

.number-group .form-control {
  width: 140px;
}

.new-group {
  display: flex;
}

.right-value {
  margin-top: 10px;
  width: 40px;
  height: 45px;
  text-align: center;
  line-height: 50px;
  font-weight: 700;
  color: #474747;
  /* border: 2px solid white; */
  /* border-radius: 0 8px 8px 0; */
}

.age-control {
  width: 100px;
}

.number-group {
  display: flex;
  justify-content: space-between;
}

.phone-group {
  display: flex;

}

.country-dropdown {
  background-color: #fff;
  height: 50px;
  border-radius: 8px;
  /* font-size: 1.0em; */
}

.signup-btn {
  margin: 20px auto 50px;
  align-items: center;
  background-image: linear-gradient(135deg, #f34079 40%, #fc894d);
  width: 100%;
  border: 3px solid #c3c3c3;
  border-radius: 10px;
  box-sizing: border-box;
  color: #d3d3d3;
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

.signup-btn span {
  transition: all 200ms;
}

.signup-btn:hover span {
  transform: scale(.9);
  opacity: .75;
}

@media screen and (max-width: 768px) {
  .form-geral {
    margin-top: 2.5em;
  }

  .logo {
    width: 70px;
    height: auto;
    padding-bottom: 20px;
  }

  hr {
    width: 100%;
    border: 0.1em solid;
    color: #474747;
  }

  .form-geral h1 {
    margin: 40px 0px 40px 0px;
    font-family: open sans, Arial, Helvetica Neue, sans-serif;
    font-size: 1.2em;
    line-height: 0.8;
    letter-spacing: .1em;
    color: #3b3b3b;
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
}</style>
