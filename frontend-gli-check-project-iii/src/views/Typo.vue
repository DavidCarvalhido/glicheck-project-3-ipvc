<template>
  <div class="content">
    <div>
      <h3 class="heading">Utilizadores</h3>
      <table id="datatable">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Primeiro Nome</th>
            <th scope="col">Apelido</th>
            <th scope="col">Taxa de glicemia</th>
            <th scope="col">Calorias</th>
            <th scope="col">Hidratos de carbono</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="patient in patients" v-bind:key="patient">
            <td>{{ patient.idPatient }}</td>
            <td>{{ patient.firstName }}</td>
            <td>{{ patient.lastName }}</td>
            <td>{{ patient.bloodGlucose }}</td>
            <td>{{ patient.calories }}</td>
            <td>{{ patient.carbohydrates }}</td>
            <button class="btn btn-success btn-sm" @click="$refs.modalName.openModal()">
              Atualizar
            </button>
            <button
              class="btn btn-danger btn-sm"
              @click="deleteUser(patient.idPatient)"
            >
              Delete
            </button>
          </tr>
        </tbody>
      </table>
    </div>

    <modal ref="modalName">
      <template v-slot:header>
        <h1>Modal title</h1>
      </template>

      <template v-slot:body>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc sed velit dignissim sodales ut eu sem integer vitae. Id aliquet lectus proin nibh nisl condimentum. Fringilla urna porttitor rhoncus dolor purus. Nam aliquam sem et tortor. Nisl vel pretium lectus quam id. Cras pulvinar mattis nunc sed. Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci. Tristique magna sit amet purus. Fermentum et sollicitudin ac orci phasellus egestas tellus. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Felis eget nunc lobortis mattis aliquam faucibus. Tincidunt eget nullam non nisi est sit amet facilisis. Mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Eget nunc scelerisque viverra mauris in aliquam sem fringilla ut. Nec nam aliquam sem et tortor consequat id. Commodo nulla facilisi nullam vehicula ipsum a. Elementum tempus egestas sed sed. Faucibus purus in massa tempor nec feugiat nisl pretium fusce.</p>
        <p>Arcu cursus vitae congue mauris rhoncus aenean. Tempor id eu nisl nunc mi. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Ut faucibus pulvinar elementum integer enim. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Eu non diam phasellus vestibulum lorem sed risus. Porttitor rhoncus dolor purus non enim praesent. Sit amet mauris commodo quis imperdiet. Lobortis feugiat vivamus at augue eget. Nibh tellus molestie nunc non blandit. Tellus mauris a diam maecenas sed enim ut. Tortor aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Mattis aliquam faucibus purus in massa.</p>
      </template>

      <template v-slot:footer>
        <div class="d-flex align-items-center justify-content-between">
          <button class="btn btn--secondary" @click="$refs.modalName.closeModal()">Cancel</button>
          <button class="btn btn--primary" @click="$refs.modalName.closeModal()">Save</button>
        </div>
      </template>
    </modal>
  </div>
</template>

<script>
import axios from "axios";
import Modal from "../components/Modal.vue";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

export default {
  name: "Typo",
  components: {
    Modal
  },
  data: function () {
    return {
      patients: [],
    };
  },
  mounted() {
    axios
      .get("patient")
      .then((response) => (this.patients = response.data.data))
      .catch((error) => console.log(error))
      .finally(() => (this.loading = false));
    setTimeout(() => {
      $("#datatable").DataTable({
        lengthMenu: [
          [5, 10, 25, 50, -1],
          [5, 10, 25, 50, "All"],
        ],
        pageLength: 5,
      });
    });
  },
  methods: {
    updateUser(idPatient) {
      axios
        .patch("patient/" + idPatient)
        .then(function (response) {
          console.log();
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    deleteUser(idPatient) {
      axios
        .delete("patient/" + idPatient)
        .then(function (response) {
          console.log();
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
label {
  background: black;
}

.content {
  margin-right: -20px;
}
</style>