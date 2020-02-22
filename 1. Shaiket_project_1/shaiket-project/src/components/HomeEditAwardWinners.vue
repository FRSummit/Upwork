<template>
  <div>
    <v-card class="elevation-12 v-card-edit">
      <v-toolbar color="primary" dark flat>
        <v-spacer />
        <v-toolbar-title>Add Award Winner here</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text class="v-card-text">
        <v-form @submit.prevent="onSubmit">
          <div class="name-field">
            <label class="field-label" style="display: inline-block; width: 30%; text-align: center;">Award Name</label>
            <v-text-field class="field-input" v-model="award" id="award" placeholder="Award name" type="text" style="display: inline-block; width: 60%;"/>
          </div>
          <div class="name-field">
            <label class="field-label" style="display: inline-block; width: 30%; text-align: center;">Winner Name</label>
            <v-text-field class="field-input" v-model="name" id="name" placeholder="Winner name" type="text" style="display: inline-block; width: 60%;"/>
          </div>
          <v-card-actions>
            <v-spacer />
            <v-btn type="submit" class="edit-btn" color="primary">Create</v-btn>
            <v-spacer />
          </v-card-actions>
        </v-form>
        <table style="">
            <thead>
                <tr>
                    <th style="width: 35%;">Award Name</th>
                    <th style="width: 45%;">Winner</th>
                    <th style="width: 15%;">Action</th>
                </tr>
            </thead>
            <tbody style="background-color: #a09c9c;">
                <tr v-for="(award, key) in awards" :key="key">
                    <td style="width: 35%; padding: 2px;">{{ award.award }}</td>
                    <td style="width: 45%; padding: 2px;">{{ award.name }}</td>
                    <a href="#" class="delete-btn" @click="deleteAwardWinner(key)">Delete</a>
                </tr>
            </tbody>
        </table>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
  },
  data() {
    return {
      award: null,
      name: null,
      awards: []
    }
  },
  created() {
    firebase.database().ref('homeSidebarAwardWinner').on('value', (snapshot)=> {
      this.awards = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      const awards = {
          award: this.awards,
          name: this.name
      }
      if(this.award === "" || this.award === null || this.name === "" || this.name === null) {
          console.log('null')
        if(this.award == "" || this.award === null) {
          document.getElementById('award').placeholder = 'Award must not be empty';
        } if(this.name == "" || this.name === null) {
          document.getElementById('name').placeholder = 'Name must not be empty';
        }
      }else {
          console.log('firebase')
        firebase.database().ref('homeSidebarAwardWinner').push({
          award: this.award,
          name: this.name
        })
        .then((data)=>{
          console.log(data);
          this.award = '',
          this.name = ''
        })
        .catch((error)=>console.log(error))
      }
    },
    deleteAwardWinner(id) {
      console.log(id)
      firebase.database().ref('homeSidebarAwardWinner/' + id).remove();
    }
  },
}
</script>

<style scoped>
.v-card-edit {
  margin: 0px auto;
  position: absolute;
  top: 0;
  right: -402px;
  z-index: 5;
  min-width: 400px;
  border: 2px solid #272727;
}
.v-toolbar__title {
  font-weight: bold;
}
.edit-btn {
  background-color: #272727 !important;
  font-weight: bold;
}
header {
  background-color: #005f00 !important;
}
.v-card-text {
  padding: 4px;
  background: #f1c3c3;
}
.v-input {
  padding: 0;
  font-size: 14px;
}
form {
  border: 2px solid #272727;
  margin-bottom: 2px;
  border-radius: 4px;
  background-color: #bbb5b5;
}
table {
  width: 100%; 
  background-color: #787878; 
  text-align: center; 
  border-radius: 4px; 
  border: 2px solid #272727;
}
.delete-btn {
  text-decoration: none;
  font-weight: bold;
  color: #FFFFFF;
  border: 1px solid #272727;
  border-radius: 4px;
  background-color: red;
  width: 15%;
  vertical-align: middle;
}
</style>