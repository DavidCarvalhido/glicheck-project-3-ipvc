<template>
  <section id="webkit">
    <nav class="top-navbar">
      <!-- Glicheck logo -->
      <div class="navbar-logo">
        <a href="/">
          <img src="../assets/images/main_logo.png" alt="Navbar logo" class="navbar-icon">
        </a>
      </div>
      <!-- Group of links for login and sign up -->
      <ul>
        <div class="navbar-links-group">
          <li class="navbar-links-item">
            <router-link to="/login" id="login-link">Login</router-link>
            <router-link to="/signup" id="signup-link">Sign up</router-link>
          </li>
        </div>
      </ul>
    </nav>
    <HomeBody msg="Welcome to Your Vue.js App"/>
  </section>
</template>

<script>
// @ is an alias to /src
import HomeBody from '@/components/TheHomeBody.vue'

export default {
  name: 'HomeView',
  components: {
    HomeBody
  }
}
</script>

<style scoped lang="scss">
/* background */
#webkit {
  background: linear-gradient(24deg, #278cff, #ff9fc1, #ff9e72);
  background-size: 600% 600%;
  -webkit-animation: AnimationBackground 8s ease infinite;
  -moz-animation: AnimationBackground 8s ease infinite;
  -o-animation: AnimationBackground 8s ease infinite;
  animation: AnimationBackground 8s ease infinite;
  min-height: 100vh;
  /* display: flex; */
}

/* background */
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

.top-navbar {
	display: flex;
	align-items: center;
	justify-content: space-between; /*put logo on the left and links on the right*/
	padding: 13px;
	/* background-color: #9570de; */
	/* color: #fff; */
}

.navbar-icon {
  height: 40px;
  width: auto;
}

.navbar-links-item {
	display: flex;
	gap: 1.0em;
	font-size: 1.0em;
}

#login-link {
  font-size: 1.1em;
  color: #5c5c5c;
  text-decoration: none;
  border: 3px solid #56565600;  /* tentar centrar a div dos links */
  padding: 5px 8px;
  /* margin-right: 15px; */
  /* para remover depois e meter algures o justify-content */
}

#signup-link {
  font-size: 1.1em;
  color: #565656;
  text-decoration: none;
  border: 3px solid #565656;
  border-radius: 5px;
  padding: 5px 8px;
}
</style>
