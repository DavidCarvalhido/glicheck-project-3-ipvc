<template>
  <nav class="navbar">
    <!-- Left part of navbar -->
    <div>Dashboard</div>
    <div class="menu-group">
      <!-- Notification icon -->
      <div class="notice-button"><img src="../assets/icons/notification_icon.svg" class="notification-icon" alt="Notifications"></div>
      <!-- Dropdown menu for account -->
      asdasd
    </div>
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

<style scoped lang="scss">
.navbar {
  display: flex;
  align-items: center;
  width: 100vw;
  padding: 15px;
  background: rgb(161, 161, 201);
  justify-content: space-between;
}

.menu-group {
  display: flex;
}

.notice-button {
  cursor: pointer;
}

.notification-icon {
  width: 20px;
}
</style>
