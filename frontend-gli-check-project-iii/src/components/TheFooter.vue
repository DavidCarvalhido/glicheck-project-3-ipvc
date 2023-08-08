<template>
    <footer class="footer footer-black footer-white">
      <div class="container-fluid">
        <div class="row">
          <nav class="footer-nav">
            <ul>
              <li><a>Projeto III</a></li>
              <li><a>|</a></li>
              <li><a>David Carvalhido</a></li>
            </ul>
          </nav>
          <div class="credits ml-auto">
            <span class="copyright">&copy; {{ currentYear }} Glicheck</span>
          </div>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: "Footer",
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>