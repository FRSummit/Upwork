<template>
  <div class="league-info-edit">
    <h3 style="text-align: center; margin-bottom: 10px; background: #dedede;">Set a post for this year</h3>
    <form @submit.prevent="onSubmit">
      <div class="name-field" style="position: relative;">
        <label class="label">Choose year</label>
        <select class="input select-option" v-model="year">
        <option v-for="(i, j) in yearsList" :key="j">{{ i.year }} </option>
        </select>
      <img src="../../assets/images/drop-down.png" style="width: 12px;position: absolute; right: 13%; top: 12px;">
        <!-- <span class="select-arrow">V</span> -->
      </div>
      <!-- Post 1 ----------------------------------------------------------------------->
      <h4 style="text-align: center; margin: 10px; background: #dedede;">Post 1</h4>
      <div class="name-field">
        <label class="label">Post Title</label>
        <input class="input" type="text" v-model="post1Title" placeholder="2020"/>
      </div>
      <!-- image upload field -->
      <div class="name-field">
        <label class="field-label label" style="width: auto">Upload an image:</label>
        <input class="field-input" @change="previewImage" type="file" accept="image/*" style="width: 30%"/>
        <div style="display: inline-block;">
          <p class="label" style="width: 100%; padding:0; margin: 0;">Progress: {{uploadValue.toFixed()+"%"}}
            <progress id="progress" :value="uploadValue" max="100" ></progress>  
          </p>
        </div>
        <div v-if="imageData!=null">
          <!-- <img class="preview" :src="picture" style="height: 100px;"> -->
          <span @click="onUpload" class="img-up-btn">Upload</span>
        </div>
      </div>
      <!-- image 2 upload field -->
      <div class="name-field">
        <label class="field-label label" style="width: auto">Upload an image:</label>
        <input class="field-input" @change="previewImage2" type="file" accept="image/*" style="width: 30%"/>
        <div style="display: inline-block;">
          <p class="label" style="width: 100%; padding:0; margin: 0;">Progress: {{uploadValue2.toFixed()+"%"}}
            <progress id="progress" :value="uploadValue2" max="100" ></progress>  
          </p>
        </div>
        <div v-if="imageData2!=null">
          <!-- <img class="preview" :src="picture2" style="height: 100px;"> -->
          <span @click="onUpload2" class="img-up-btn">Upload</span>
        </div>
      </div>
      <!-- Image preview -->
      <div class="name-field">
        <div v-if="imageData!=null" style="display: inline-block;">
          <img class="preview" :src="picture" style="height: 100px; margin: 0 2px">
        </div>
        <div v-if="imageData2!=null" style="display: inline-block;">
          <img class="preview" :src="picture2" style="height: 100px; margin: 0 2px">
        </div>
      </div>




      <!-- Post 3 ----------------------------------------------------------------------->
      <h4 style="text-align: center; margin: 10px; background: #dedede;">Post 3</h4>
      <div class="name-field">
        <label class="label">Post Title</label>
        <input class="input" type="text" v-model="post3Title" placeholder="2020"/>
      </div>
      <!-- image upload field -->
      <div class="name-field">
        <label class="field-label label" style="width: auto">Upload an image:</label>
        <input class="field-input" @change="previewImage3" type="file" accept="image/*" style="width: 30%"/>
        <div style="display: inline-block;">
          <p class="label" style="width: 100%; padding:0; margin: 0;">Progress: {{uploadValue3.toFixed()+"%"}}
            <progress id="progress" :value="uploadValue3" max="100" ></progress>  
          </p>
        </div>
        <div v-if="imageData3 != null">
          <!-- <img class="preview" :src="picture" style="height: 100px;"> -->
          <span @click="onUpload3" class="img-up-btn">Upload</span>
        </div>
      </div>
      <!-- image 2 upload field -->
      <div class="name-field">
        <label class="field-label label" style="width: auto">Upload an image:</label>
        <input class="field-input" @change="previewImage4" type="file" accept="image/*" style="width: 30%"/>
        <div style="display: inline-block;">
          <p class="label" style="width: 100%; padding:0; margin: 0;">Progress: {{uploadValue4.toFixed()+"%"}}
            <progress id="progress" :value="uploadValue4" max="100" ></progress>  
          </p>
        </div>
        <div v-if="imageData4 != null">
          <!-- <img class="preview" :src="picture2" style="height: 100px;"> -->
          <span @click="onUpload4" class="img-up-btn">Upload</span>
        </div>
      </div>
      <!-- Image preview -->
      <div class="name-field">
        <div v-if="imageData3 != null" style="display: inline-block;">
          <img class="preview" :src="picture3" style="height: 100px; margin: 0 2px">
        </div>
        <div v-if="imageData4 != null" style="display: inline-block;">
          <img class="preview" :src="picture4" style="height: 100px; margin: 0 2px">
        </div>
      </div>


      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
    <table style="">
      <thead>
        <tr>
          <th style="width: 22%;">Year</th>
            <th style="width: 12%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(para, i) in posts" :key="i">
            <td style="width: 22%; padding: 2px;">{{ para.postYear }}</td>
            <a href="#" class="delete-btn" @click="deleteSchedule(i)">Delete</a>
          </tr>
        </tbody>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      yearsList: [],
      year: null,
      post1Title: null,
      post3Title: null,
      imageName: null,
      imageName2: null,
      imageName3: null,
      imageName4: null,
      posts: [],
      imageData: null,
      picture: null,
      uploadValue: 0,//
      imageData2: null,
      picture2: null,
      uploadValue2: 0,//
      imageData3: null,
      picture3: null,
      uploadValue3: 0,//
      imageData4: null,
      picture4: null,
      uploadValue4: 0,//
    }
  },
  created() {
    firebase.database().ref('standingYearList').on('value', (snapshot)=> {
      this.yearsList = snapshot.val();
    });
    firebase.database().ref('standingYearPost').on('value', (snapshot)=> {
      this.posts = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('standingYearPost').push({
        postYear: this.year,
        post1Title: this.post1Title,
        post1ImgName: this.imageName,
        post1ImgURL: this.picture,
        post1ImgName2: this.imageName2,
        post1ImgURL2: this.picture2,

        post3Title: this.post3Title,
        post3ImgName3: this.imageName3,
        post3ImgURL3: this.picture2,
        post3ImgName4: this.imageName4,
        post3ImgURL4: this.picture4,
      })
      .then((data)=>{
        // document.querySelector('.delete-btn').click()
        console.log(data)
        this.post1Title = ''
        this.post3Title = ''  
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id) {
      console.log(id)
      firebase.database().ref('standingYearPost/' + id).remove();
      window.location.reload()
    },
    // Image 1
    previewImage(event) {
      this.uploadValue=0;
      this.picture=null;
      this.imageData = event.target.files[0];
    },
    onUpload(){
      this.picture=null;
      const storageRef = firebase.storage().ref(`${this.imageData.name}`).put(this.imageData);
      this.imageName = this.imageData.name.split('.')[0]
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      },
      error=>{console.log(error.message)},
      () => {
        this.uploadValue=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture = url;
        });
        console.log('This is the link : ' + storageRef.snapshot.ref.getDownloadURL());
        console.log(storageRef.snapshot.ref.getDownloadURL().url);
      });
    },
    // Image 2
    previewImage2(event) {
      this.uploadValue2=0;
      this.picture2=null;
      this.imageData2 = event.target.files[0];
    },
    onUpload2(){
      this.picture2=null;
      const storageRef = firebase.storage().ref(`${this.imageData2.name}`).put(this.imageData2);
      this.imageName2 = this.imageData2.name.split('.')[0]
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue2 = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      },
      error=>{console.log(error.message)},
      () => {
        this.uploadValue2=100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture2 = url;
        });
        console.log('This is the link : ' + storageRef.snapshot.ref.getDownloadURL());
        console.log(storageRef.snapshot.ref.getDownloadURL().url);
      });
    },
    // Image 3
    previewImage3(event) {
      this.uploadValue3 = 0;
      this.picture3 = null;
      this.imageData3 = event.target.files[0];
    },
    onUpload3(){
      this.picture3 = null;
      const storageRef = firebase.storage().ref(`${this.imageData3.name}`).put(this.imageData3);
      this.imageName3 = this.imageData3.name.split('.')[0]
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue3 = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      },
      error=>{console.log(error.message)},
      () => {
        this.uploadValue3 = 100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture3 = url;
        });
        console.log('This is the link : ' + storageRef.snapshot.ref.getDownloadURL());
        console.log(storageRef.snapshot.ref.getDownloadURL().url);
      });
    },
    // Image 4
    previewImage4(event) {
      this.uploadValue4 = 0;
      this.picture4 = null;
      this.imageData4 = event.target.files[0];
    },
    onUpload4(){
      this.picture4 = null;
      const storageRef = firebase.storage().ref(`${this.imageData4.name}`).put(this.imageData4);
      this.imageName4 = this.imageData4.name.split('.')[0]
      storageRef.on(`state_changed`, snapshot => {
        this.uploadValue4 = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
      },
      error=>{console.log(error.message)},
      () => {
        this.uploadValue4 = 100;
        storageRef.snapshot.ref.getDownloadURL().then((url)=>{
          this.picture4 = url;
        });
        console.log('This is the link : ' + storageRef.snapshot.ref.getDownloadURL());
        console.log(storageRef.snapshot.ref.getDownloadURL().url);
      });
    },
  }
}
</script>

<style scoped>
.league-info-edit {
  background: #a8fda8;
  position: absolute;
  top: 0;
  /* left: 8%; */
  right: 0;
  z-index: 10;
  width: 65%;
  border: 2px solid #272727;
  border-radius: 6px;
  padding: 6px;
}
.league-info-edit .label {
  display: inline-block;
  width: 20%;
  vertical-align: top;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  margin: 2px 0;
}
.league-info-edit .input {
  display: inline-block;
  width: 70%;
  border-radius: 6px;
  border: 2px solid #272727;
  padding: 4px;
  font-size: 14px;
  margin: 2px 0;
}
.league-info-edit .btn-section {
  width: 100%;
  text-align: center;
  margin: 10px 0;
}
.league-info-edit button {
  border: 2px solid #272727;
  border-radius: 6px;
  background: #272727;
  color: #FFFFFF;
  font-weight: bold;
  font-size: 16px;
  padding: 4px 10px;
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
.select-option {
  background: #787878;
  color: #FFF;
  font-weight: bold;
}
.select-arrow {
  position: absolute;
  right: 15%;
  top: 8px;
  font-weight: bold;
  color: #FFF;
}
</style>