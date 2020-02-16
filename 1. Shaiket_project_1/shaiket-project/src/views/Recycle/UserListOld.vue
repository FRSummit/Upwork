<template>
  <div class="admin">
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
  props: {
  },
  data () {
    return {
      users: [],
      userIsAuthorized: false,
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

<style stcope>
.admin {
  background-color: #fff; 
  border-radius: 4px; 
  overflow: hidden;
  padding-bottom: 10px;
}
.admin .v-card {
  background: #c2d0de;
}
.admin .table-head {
  background: #b1cde8;
}
.admin .table-body {
  background: #e3f0fd;
}
</style>