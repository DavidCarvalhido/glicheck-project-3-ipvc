<template>
  <nav class="navbar">
    <div class="navbar-wrapper">
      <router-link to="/page">
        <img src="../assets/images/logo.png" alt="Navbar icon" class="navbar-icon">
      </router-link>
    </div>
    <ul class="navbar-items">
      <div class="menu">
        <li><a href="#"></a>
          <!-- <img src="../assets/icons/notification_icon.svg" alt="notification icon"> -->
        </li>
        <!-- DROPDOWN MENU -->
        <NavDropdown title="David Carvalhido"/>
      </div>
    </ul>
  </nav>
</template>

<script>
import NavDropdown from '../components/TheNavDropdownMenu.vue'

export default {
  name: 'Navbar',
  components: {
    NavDropdown
  },
  methods: {
    handleClick() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  }
}
</script>

<style>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: lightslategrey;
  border-bottom: 2px;
}

.navbar-icon {
  width: 40px;
}

.navbar-items {
  display: flex;
}

li {
  list-style: none;
}

.menu {
  display: flex;
  gap: 1.0em;
}

.menu li:hover {
  cursor: pointer;
  /* background-color: blue; */
  transition: 0.3s ease;
}

.menu li {
  padding: 5px 14px;
}

.user-menu {
  position: relative;
}

.dropdown {
  background-color: rgb(140, 9, 9);
  padding: 1.0em 0;
  position: absolute;
  display: none;
  border-radius: 8px;
  top: 35px;
}

.dropdown li+li {
  margin-top: 10px;
}

.dropdown li {
  padding: 0.5em 1em;
  width: 8em;
  text-align: center;
}

.dropdown li:hover {
  background-color: #4c9e9e;
}

.user-menu:hover .dropdown {
  display: block;
}
</style>
