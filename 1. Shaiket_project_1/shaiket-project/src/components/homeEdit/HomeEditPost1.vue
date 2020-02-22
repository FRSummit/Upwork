<template>
  <div>
    <v-card class="elevation-12 v-card-edit">
      <v-toolbar color="primary" dark flat>
        <v-spacer />
        <v-toolbar-title>Update Post 1</v-toolbar-title>
        <v-spacer />
      </v-toolbar>
      <v-card-text class="v-card-text">
        <v-form @submit.prevent="onSubmit">
          <div class="name-field">
            <label class="field-label">Title</label>
            <v-text-field class="field-input" v-model="title" id="title" placeholder="Write Some Title" type="text"/>
          </div>
          <div class="name-field">
            <label class="field-label">Description</label>
            <v-text-field class="field-input" v-model="description" id="description" placeholder="Description" type="text"/>
          </div>
          <div class="name-field">
            <label class="field-label">URL Text</label>
            <v-text-field class="field-input" v-model="urlText" id="urlText" placeholder="URL Text" type="text"/>
          </div>
          <div class="name-field">
            <label class="field-label">URL</label>
            <v-text-field class="field-input" v-model="url" id="url" placeholder="URL" type="text"/>
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
                    <th style="width: 22%;">Title</th>
                    <th style="width: 22%;">Details</th>
                    <th style="width: 22%;">Url Text</th>
                    <th style="width: 22%;">URL</th>
                    <th style="width: 12%;">Action</th>
                </tr>
            </thead>
            <tbody style="background-color: #a09c9c;">
                <tr v-for="(post, key) in posts" :key="key">
                    <td style="width: 22%; padding: 2px;">{{ post.title }}</td>
                    <td style="width: 22%; padding: 2px;">{{ post.description }}</td>
                    <td style="width: 22%; padding: 2px;">{{ post.urlText }}</td>
                    <td style="width: 12%; padding: 2px;">{{ post.url }}</td>
                    <a href="#" class="delete-btn" @click="deleteImpDate(key)">Delete</a>
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
      title: null,
      description: null,
      urlText: null,
      url: null,
      posts: []
    }
  },
  created() {
    firebase.database().ref('homePost1').on('value', (snapshot)=> {
      this.posts = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      const impDates = {
          title: this.title,
          description: this.description,
          urlText: this.urlText,
          url: this.url
      }
      if(this.title === "" || this.title === null || this.description === "" || this.description === null || 
            this.urlText === "" || this.urlText === null || this.url === "" || this.url === null) {
          console.log('null')
        if(this.title == "" || this.title === null) {
          document.getElementById('title').placeholder = 'Title must not be empty';
        } if(this.description == "" || this.description === null) {
          document.getElementById('description').placeholder = 'Description must not be empty';
        } if(this.urlText == "" || this.urlText === null) {
          document.getElementById('urlText').placeholder = 'Url text must not be empty';
        } if(this.url == "" || this.url === null) {
          document.getElementById('url').placeholder = 'URL must not be empty';
        }
      }else {
        console.log('firebase')
        firebase.database().ref('homePost1').push({
          title: this.title,
          description: this.description,
          urlText: this.urlText,
          url: this.url,
        })
        .then((data)=>{
          console.log(data);
          this.title = '',
          this.description = '',
          this.urlText = '',
          this.url = ''
        })
        .catch((error)=>console.log(error))
      }
    },
    deleteImpDate(id) {
      console.log(id)
      firebase.database().ref('homePost1/' + id).remove();
    }
  },
}
</script>

<style scoped>
.v-card-edit {
  margin: 0px auto;
  z-index: 5;
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
.name-field {
  display: inline-block; 
  width: 100%; 
  text-align: center;
}
.field-label {
  display: inline-block; 
  width: 20%;
}
.field-input {
  display: inline-block; 
  width: 60%;
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
  color: #272727;
  font-weight: bold;
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