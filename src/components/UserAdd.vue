

<template>

<nav class="navbar navbar-expand-lg bg-light fixed-top">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img alt="Eldor logo" src="./logo.png" style="height: 120px">
      <b>Match & Draw App</b>
    </a>
  </div> 
  <div class="container-fluid">
    <form class="d-flex" role="search" @submit="Search()">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>      
</nav>
    <br><br><br><br><br>


  <button  class="button1"  type="button" @click="controllerAddUser=!controllerAddUser" >ADD USER</button><br><br>
  <div class="p-3 mb-2 bg-dark text-white" v-if="controllerAddUser">
  <div id="addForm">
    <h2 @click="controllerAddUser=!controllerAddUser">Add User</h2><br>
    <form @submit="handleAdd">
    <div class="row g-3">
      <div class="col">
        <input
          type="text"
          v-model="user.userName" class="form-control"
          placeholder="First name" 
          aria-label="First name"
          id="userName"
        /><br><br>
      </div>

      <div class="col" >
        <input
          type="text"
          v-model="user.userSurname" class="form-control"
          placeholder="Last name" aria-label="Last name"
          id="userSurname"
        /><br><br>
      </div></div>

      <br>
   
      <button type="submit" class="btn btn-light" >Add User</button>&nbsp;

      <button type="button" @click="controllerShowUsers=!controllerShowUsers" class="btn btn-outline-light">Show</button>
    </form>
  </div><br><br>

  <div v-if="controllerShowUsers">
    <table  class="table table-light table-striped text-dark" >
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First name</th>
          <th scope="col">Last name</th> 
        </tr>
      </thead>
   
    <tbody>
      <tr v-for="item in this.userlist" :key="item.id">
          <td>{{item.id}}</td>
          <td>{{ item.name }}</td>
          <td>{{item.surname}}</td>
      </tr>
    </tbody>
    </table>
  </div></div><br><br>
  
  <div class="container">
  <div class="row">
    <div class="col">
      <button class="button1 " @click="ShowDraw()">DRAW</button>
      <br><br><br>
      <div class="p-3 mb-2 bg-dark text-white" v-if="controllerDraw==1">
        <div v-if="controllerDraw==1">
          <button @click="ShowDraw()" class="btn btn-light">Draw</button>&nbsp;
          <button @click="controllerDraw=0" class="btn btn-outline-light">Clear</button>
          <table class="table table-dark table-striped text-white" >
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
                <td>{{item.choserUser.id}}</td>
                <td>{{ item.choserUser.name }}</td>
                <td>{{item.choserUser.surname}}</td>
                <td>----></td>
                <td>{{item.chosenUser.id}}</td>
                <td>{{ item.chosenUser.name }}</td>
                <td>{{item.chosenUser.surname}}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div><br><br>

    <div class="col">
      
      <button class="button1 " @click="ShowMatch()">MATCH</button>
      <br><br><br>
      <div class="p-3 mb-2 bg-dark text-white" v-if="controllerMatch==1">
        <div v-if="controllerMatch==1">
          <button @click="ShowMatch()" class="btn btn-light" >Match</button>&nbsp;
          <button @click="controllerMatch=0;" class="btn btn-outline-light">Clear</button>
          <table class="table table-dark table-striped text-white">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
                <th scope="col">#</th>
                <th scope="col">First name</th>
                <th scope="col">Last name</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in this.matchList" :key="item.id">
                <td>{{item.firstUser.id}}</td>
                <td>{{ item.firstUser.name }}</td>
                <td>{{item.firstUser.surname}}</td>
                <td v-if="item.secondUser.id!=0">{{item.secondUser.id}}</td>
                <td v-else-if="item.secondUser.id==0"></td>
                <td v-if="item.secondUser.id!=0">{{ item.secondUser.name }}</td>
                <td v-else-if="item.secondUser.id==0"></td>
                <td v-if="item.secondUser.id!=0">{{item.secondUser.surname}}</td>
                <td v-else-if="item.secondUser.id==0"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  </div>

<div class="position-static bottom-0 end-0">
  <img alt="Tree" src="./tree.png" style="height: 300px">
</div>


</template>

<script>
import axios from 'axios';

export default {
  name: "user-add",

  data() {
    return {
      count:0,
      controllerDraw:0,
      controllerMatch:0,
      controllerShowUsers:false,
      controllerAddUser:false,
      user: {
        name: "",
        surname: "",
        id: "",
      },
      userlist:[], 
      drawList:[
      ],
      matchList:[]  
   
    };
  },
  methods: {
    handleAdd(e) {
      e.preventDefault()
      console.log(this.user.userName);
      this.count=this.count+1
      this.userlist.push({name:this.user.userName,surname:this.user.userSurname,id:this.count})
    },
    ShowDraw(){
        this.controllerDraw=1;
        axios.post("https://localhost:5001/api/Person/Draw",this.userlist).then(responses =>this.drawList=responses.data)
    },
    
    ShowMatch(){
        this.controllerMatch=1;
        axios.post("https://localhost:5001/api/Person/Matching",this.userlist).then(responses =>this.matchList=responses.data)
        
    },
    Search(){

    }
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
  font-family:serif;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  color: #032C5A;
  background-color: #FCD24F;
  border-style: solid;
  border-color:#032C5A ;
  border-radius: 15px;
  border-width: 5px;
  box-shadow: 0 9px #999;
}

.button1:hover {background-color: #FCD24F}

.button1:active {
  background-color: #FCD24F;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>