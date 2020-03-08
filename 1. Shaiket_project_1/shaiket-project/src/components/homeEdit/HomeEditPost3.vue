<template>
  <div>
    <v-card class="elevation-12 v-card-edit">
      <v-toolbar color="primary" dark flat>
        <v-spacer />
        <v-toolbar-title>Update Post 3</v-toolbar-title>
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
          <!-- img 1 -->
          <div class="name-field">
            <label class="field-label" style="width: 30%">Upload an image:</label>
            <input class="field-input" @change="previewImage" id="img1" type="file" accept="image/*" style="width: 30%"/>
            <div style="display: inline-block;">
                <p>Progress: {{uploadValue.toFixed()+"%"}}
                <progress id="progress" :value="uploadValue" max="100" ></progress>  </p>
            </div>
            <div v-if="imageData!=null">
                <img class="preview" :src="picture" style="width: 200px;">
                <br>
            <span @click="onUpload" class="img-up-btn">Upload</span>
            </div>
          </div>
          <div class="name-field">
            <label class="field-label">Image 1 Details 1</label>
            <v-text-field class="field-input" v-model="img1_desc1" id="img1_desc1" placeholder="Description" type="text"/>
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
                    <th style="width: 12%;">Action</th>
                </tr>
            </thead>
            <tbody style="background-color: #a09c9c;">
                <tr v-for="(post, key) in posts" :key="key">
                    <td style="width: 22%; padding: 2px;">{{ post.title }}</td>
                    <td style="width: 22%; padding: 2px;">{{ post.description }}</td>
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
      img1_url: null,
      img1_desc1: null,
      img1_desc2: null,
      img2_url: null,
      img2_desc1: null,
      img2_desc2: null,
      urlText: null,
      url: null,
      posts: [],
      imageData: null,
      imageData2: null,
      picture: null,
      picture2: null,
      uploadValue: 0,
      uploadValue2: 0
    }
  },
  created() {
    firebase.database().ref('homePost3').on('value', (snapshot)=> {
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
      if(this.title === "" || this.title === null || this.description === "" || this.description === null) {
          console.log('null')
        if(this.title == "" || this.title === null) {
            console.log('title null')
          document.getElementById('title').placeholder = 'Title must not be empty';
        } if(this.description == "" || this.description === null) {
            console.log('desc null')
          document.getElementById('description').placeholder = 'Description must not be empty';
        }
      }else {
        console.log('firebase')
        firebase.database().ref('homePost3').push({
          title: this.title,
          description: this.description,
          img1_url: this.img1_url,
          img1_desc1: this.img1_desc1,
          img1_desc2: this.img1_desc2,
          img2_url: this.img2_url,
          img2_desc1: this.img2_desc1,
          img2_desc2: this.img2_desc2,
          urlText: this.urlText,
          url: this.url,
        })
        .then((data)=>{
          console.log(data);
          this.title = '',
          this.description = '',
          this.img1_desc1 = '',
          this.img1_desc2 = '',
          this.img2_desc1 = '',
          this.img2_desc2 = '',
          this.urlText = '',
          this.url = ''
        })
        .catch((error)=>console.log(error))
      }
    },
    deleteImpDate(id) {
      console.log(id)
      firebase.database().ref('homePost3/' + id).remove();
    },
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
    previewImage2(event) {
      this.uploadValue2=0;
      this.picture2=null;
      this.imageData2 = event.target.files[0];
    },
    onUpload(){
      this.picture=null;
      const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      },
      error=>{console.log(error.message)},
      () => {this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture = url;
          this.img1_url = url;
        //   this.saveUrlToDatabase(url);
        console.log(this.img1_url)
        });
        console.log('This is the link : ' + storageRef.snapshot.ref.getDownloadURL());
        console.log(storageRef.snapshot.ref.getDownloadURL().url);
      });
    },
    onUpload2(){
      this.picture2=null;
      const storageRef = firebase.storage().ref(`${this.imageData2.name}`).put(this.imageData2);
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue2 = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      },
      error=>{console.log(error.message)},
      () => {this.uploadValue2=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture2 = url;
          this.img2_url = url;
        //   this.saveUrlToDatabase(url);
        console.log(this.img2_url)
        });
        console.log('This is the link : ' + storageRef.snapshot.ref.getDownloadURL());
        console.log(storageRef.snapshot.ref.getDownloadURL().url);
      });
    },
    saveUrlToDatabase(myURL) {
      console.log(myURL);
      /*firebase.database().ref('my_movies').push({
            name: myURL
        })
        .then((data)=>{
        console.log(data);
        })
        .catch((error)=>console.log(error))*/
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
.img-up-btn {
  border: 2px solid #272727;
  border-radius: 6px;
  background: #272727;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
  padding: 4px 10px;
  cursor: pointer;
}
</style>