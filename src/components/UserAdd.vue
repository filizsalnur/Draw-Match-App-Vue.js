

<template>
  <nav class="navbar navbar-expand-lg bg-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img alt="Eldor logo" src="./logo.png" style="height: 120px" />
        <b>Match & Draw App</b>
      </a>
    </div>
    <div class="container-fluid">
      <form class="d-flex" role="search" @submit="Search()">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </nav>
  <br /><br /><br /><br /><br />

  <button
    class="button1"
    type="button"
    @click="controllerAddUser = !controllerAddUser"
  >
    ADD USER</button
  ><br /><br />
  <div class="p-3 mb-2" v-if="controllerAddUser">
    <div id="addForm">
      <h2 @click="controllerAddUser = !controllerAddUser">Add User</h2>
      <br />
      <form @submit="handleAdd" novalidate="true" method="post">
        <div class="row g-3">
          <div class="col">
            <input
              type="text"
              v-model="user.userName"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
              id="userName"
            /><br /><br />
          </div>

          <div class="col">
            <input
              type="text"
              v-model="user.userSurname"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
              id="userSurname"
            /><br /><br />
          </div>
        </div>

        <br />

        <button type="submit" class="btn btn-light">Add User</button>&nbsp;

      </form>
    </div>
    <br /><br />

    <div v-if="controllerShowUsers">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First name</th>
            <th scope="col">Last name</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in this.userlist" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.surname }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <br /><br />

  <div class="container">
    <div class="row">
      <div class="col">
        <button class="button1" @click="ShowDraw()">DRAW</button>
        <br /><br /><br />
        <div v-if="controllerDraw == 1">
          <div v-if="controllerDraw == 1">
            <button @click="ShowDraw()" class="btn btn-light">Draw</button
            >&nbsp;
            <button @click="controllerDraw = 0" class="btn btn-outline-light">
              Clear
            </button>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col"></th>
                  <th scope="col">#</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in this.drawList" :key="item.id">
                  <td>{{ item.choserUser.id }}</td>
                  <td>{{ item.choserUser.name }}</td>
                  <td>{{ item.choserUser.surname }}</td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right-circle"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"
                      />
                    </svg>
                  </td>
                  <td>{{ item.chosenUser.id }}</td>
                  <td>{{ item.chosenUser.name }}</td>
                  <td>{{ item.chosenUser.surname }}</td>
                </tr>
              </tbody>
            </table>
            <br><br>
            <button type="button" class="btn btn-success" @click="SaveDrawData">Export to Excel</button>
          </div>
        </div>
      </div>
      <br /><br />

      <div class="col">
        <button class="button1" @click="ShowMatch()">MATCH</button>
        <br /><br /><br />
        <div v-if="controllerMatch == 1">
          <div v-if="controllerMatch == 1">
            <button @click="ShowMatch()" class="btn btn-light">Match</button
            >&nbsp;
            <button @click="controllerMatch = 0" class="btn btn-outline-light">
              Clear
            </button>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                  <th scope="col"></th>
                  <th scope="col">#</th>
                  <th scope="col">First name</th>
                  <th scope="col">Last name</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in this.matchList" :key="item.id">
                  <td>{{ item.firstUser.id }}</td>
                  <td>{{ item.firstUser.name }}</td>
                  <td>{{ item.firstUser.surname }}</td>
                  <td v-if="item.secondUser.id != 0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-left-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"
                      />
                    </svg>
                  </td>
                  <td v-else-if="item.secondUser.id == 0"></td>
                  <td v-if="item.secondUser.id != 0">
                    {{ item.secondUser.id }}
                  </td>
                  <td v-else-if="item.secondUser.id == 0"></td>
                  <td v-if="item.secondUser.id != 0">
                    {{ item.secondUser.name }}
                  </td>
                  <td v-else-if="item.secondUser.id == 0"></td>
                  <td v-if="item.secondUser.id != 0">
                    {{ item.secondUser.surname }}
                  </td>
                  <td v-else-if="item.secondUser.id == 0"></td>
                </tr>
              </tbody>
            </table><br><br>
            <button type="button" class="btn btn-success" @click="SaveMatchData">Export to Excel</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <div class="position-static bottom-0 end-0">
    <img alt="Tree" src="./tree.png" class="image" />
  </div>
 
</template>

<script >
import axios from "axios";
import Swal from "sweetalert2";
import excelMatchExport from "@/Tools/ExcelMatchExporter.js"
import excelDrawExport from "@/Tools/ExcelDrawExporter.js"
export default {
  name: "user-add",
  data() {
    return {
      count: 0,
      controllerDraw: 0,
      controllerMatch: 0,
      controllerShowUsers: false,
      controllerAddUser: false,
      user: {
        name: null,
        surname: null,
        id: "",
      },
      errors: [],
      userlist: [],
      drawList: [],
      matchList: [],
    };
  },
  methods: {
    handleAdd(e) {
      e.preventDefault();
      console.log(this.user.userName);
      
      if (this.user.userName && this.user.userSurname) {
        this.count = this.count + 1;
        this.controllerShowUsers = true
        this.userlist.push({
          name: this.user.userName,
          surname: this.user.userSurname,
          id: this.count,
        });
        return true;
      }

      if (!this.user.userName) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Name required!",
          footer: "Please enter a valid name",
        });
      }
      if (!this.user.userSurname) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Surname required!",
          footer: "Please enter a valid surname",
        });
      }
      if (!this.user.userName && !this.user.userSurname) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Name and Surname required!",
          footer: "Please enter a valid name and surname",
        });
      }
    },
    checkForm: function (e) {
      this.errors = [];

      if (this.user.name === "") {
        this.errors.push("User name is required.");
      }
      if (this.user.name === "") {
        this.errors.push("User name is required.");
      }

      e.preventDefault();
    },
    ShowDraw() {
      this.controllerDraw = 1;
      axios
        .post("https://localhost:5001/api/Person/Draw", this.userlist)
        .then((responses) => (this.drawList = responses.data));
    },

    ShowMatch() {
      this.controllerMatch = 1;
      axios
        .post("https://localhost:5001/api/Person/Matching", this.userlist)
        .then((responses) => (this.matchList = responses.data));
    },
   async SaveMatchData(){

      let data = JSON.parse(JSON.stringify(this.matchList));
      let bufferObj=await excelMatchExport.ExportFile(data)
      const blob = new Blob([bufferObj],{type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,"});
  
      // Programatically create a link and click it:
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `Matched_Users.xlsx`;
      a.click();
      a.remove();
    },
    async SaveDrawData(){

      let data = JSON.parse(JSON.stringify(this.drawList));
      let bufferObj=await excelDrawExport.ExportFile(data)
      const blob = new Blob([bufferObj],{type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,"});
  
      // Programatically create a link and click it:
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = `Drawed_Users.xlsx`;
      a.click();
      a.remove();
    },
  },
};
</script>

<style scoped>
#addForm {
  margin: auto;
}
.button1 {
  display: inline-block;
  padding: 15px 25px;
  font-size: 30px;
  font-family: serif;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #032c5a;
  background-color: #fcd24f;
  border-style: solid;
  border-color: #032c5a;
  border-radius: 15px;
  border-width: 5px;
  box-shadow: 0 9px #999;
}

.button1:hover {
  background-color: #fcd24f;
}

.button1:active {
  background-color: #fcd24f;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

th {
  background-color: #555273;
  color: white;
}
tr:nth-child(even) {
  background-color: #65799b;
  color: white;
}
tr:nth-child(odd) {
  background-color: #e2eff1;
  color: #555273;
}
.image {
  width: 300px;
}
</style>