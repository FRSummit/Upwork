<template>
  <div class="league-info-edit">
    <form @submit.prevent="onSubmit">
      <label class="label">Title</label>
      <input class="input" type="text" v-model="title" placeholder="Bat Ploicy"/>
      <label class="label">Summery 1</label>
      <textarea class="input" type="text" v-model="summery1" placeholder="Write some summery"/>
      <label class="label">Summery 2</label>
      <textarea class="input" type="text" v-model="summery2" placeholder="Write some summery"/>
      <label class="label">Summery 3</label>
      <textarea class="input" type="text" v-model="summery3" placeholder="Write some summery"/>
      <label class="label">Summery 4</label>
      <textarea class="input" type="text" v-model="summery4" placeholder="Write some summery"/>
      <div style="padding: 10px 6px;">
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
      <!-- Image preview -->
      <div class="name-field">
        <div v-if="imageData!=null" style="display: inline-block; height: 100px;">
          <img class="preview" :src="picture" style="height: 100px; margin: 0 2px">
        </div>
      </div>

      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
    <table style="">
      <thead>
        <tr>
          <th style="width: 80%;">Title</th>
            <th style="width: 15%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(schedule, i) in schedules" :key="i">
            <td style="width: 80%; padding: 2px;">{{ schedule.title }}</td>
            <a href="#" class="delete-btn" @click="deleteSchedule(i)" style="width: 15%;">Delete</a>
          </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      summery1: null,
      summery2: null,
      summery3: null,
      summery4: null,
      schedules: [],
      imageData: null,
      picture: null,
      uploadValue: 0,//
    }
  },
  created() {
    firebase.database().ref('adminBatPolicy').on('value', (snapshot)=> {
      this.schedules = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('adminBatPolicy').push({
        title: this.title,
        summery1: this.summery1,
        summery2: this.summery2,
        summery3: this.summery3,
        summery4: this.summery4,
        imgURL: this.picture,
      })
      .then((data)=>{
        console.log(data)
        this.title = '',
        this.summery1 = '',
        this.summery2 = '',
        this.summery3 = '',
        this.summery4 = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id) {
      firebase.database().ref('adminBatPolicy/' + id).remove();
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
  }
}
</script>

<style scoped>
.league-info-edit {
  background: #a8fda8;
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 10;
  width: 90%;
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
  width: 80%;
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
</style>