<template>
  <div class="home" v-if="userIsAuthorized">
  <v-card class="v-card">
    <v-card-title>
      User List
      <v-spacer></v-spacer>
      <v-text-field
        placeholder="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
  </v-card>
    
  <v-simple-table height="300px">
    <template v-slot:default>
      <thead class="table-head">
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Email</th>
          <th class="text-left">Address</th>
          <th class="text-left">Phone</th>
          <th class="text-left">Role</th>
          <th class="text-left">Password</th>
        </tr>
      </thead>
      <tbody class="table-body">
        <tr v-for="(user, key) in users" :key="key">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.address }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.password }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
    return {
      users: [],
      userIsAuthorized: false,
      // movies: ['thor', 'perfume']
    }
  },
  methods: {
    checkUserIsAuthorized() {
      const userAuth = localStorage.getItem("upwork_project_shaiket_login_pass");
      if(userAuth) {
        const authValue = JSON.parse(userAuth).login_auth_value;
        console.log(authValue);
        if(authValue == 'authorized') {
          this.userIsAuthorized = true; 
        }
      }
    }
  },
  created() {
    this.checkUserIsAuthorized();
    firebase.database().ref('users').on('value', (snapshot)=> {
      this.users = snapshot.val();
      console.log('snapshot : ');
      console.log(snapshot.val());
      console.log('Users : ');
      console.log(this.users);
    });
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home .v-card {
  background: #c2d0de;
}
.home .table-head {
  background: #b1cde8;
}
.home .table-body {
  background: #e3f0fd;
}
</style>