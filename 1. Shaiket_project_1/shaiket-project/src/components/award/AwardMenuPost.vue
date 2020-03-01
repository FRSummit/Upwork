<template>
  <div class="league-info-edit">
    <h3 style="text-align: center; margin-bottom: 10px; background: #dedede;">Set a post for this year</h3>
    <form @submit.prevent="onSubmit">
      <div class="name-field" style="position: relative;">
        <label class="label" style="width: 25%;">Choose Menu List</label>
        <select class="input select-option" v-model="listItem" style="width: 42%;">
        <option v-for="(i, j) in itemList" :key="j">{{ i.title }} </option>
        </select>
      <img src="../../assets/images/drop-down.png" style="width: 12px;position: absolute; right: 35%; top: 11px;">
        <!-- <span class="select-arrow">V</span> -->
      </div>
      <div class="name-field">
        <label class="label">Title</label>
        <input class="input" type="text" v-model="title" placeholder="RICHARD KIRKBY MEMORIAL TROPHY"/>
      </div>
      <div class="name-field">
        <label class="label">Description 1</label>
        <input class="input" type="text" v-model="description1" placeholder="Write some description or leave it as blank"/>
      </div>
      <div class="name-field">
        <label class="label">Description 2</label>
        <input class="input" type="text" v-model="description2" placeholder="Write some description or leave it as blank"/>
      </div>
      <div class="name-field">
        <label class="label">Description 3</label>
        <input class="input" type="text" v-model="description3" placeholder="Write some description or leave it as blank"/>
      </div>
      <div class="name-field">
        <label class="label">Description 4</label>
        <input class="input" type="text" v-model="description4" placeholder="Write some description or leave it as blank"/>
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
      <div class="name-field">
        <label class="label">Image Description</label>
        <input class="input" type="text" v-model="imgDescription" placeholder="Kevan MacDonald Cup Charity Tournament Champions"/>
      </div>
      <div class="name-field">
        <label class="label">Special Words</label>
        <input class="input" type="text" v-model="specialWords" placeholder="Special Thanks to FRS Official trophy caretaker to the Summit"/>
      </div>
      <div class="name-field">
        <label class="label">Address</label>
        <input class="input" type="text" v-model="address1" placeholder="Street" style="width: 26%;"/>
        <input class="input" type="text" v-model="address2" placeholder="City" style="width: 26%; margin: 0 6px"/>
        <input class="input" type="text" v-model="address3" placeholder="State" style="width: 26%;"/>
      </div>
      <div class="name-field">
        <label class="label">Tel : </label>
        <input class="input" type="text" v-model="phone1" placeholder="(0088-017-XXX-XXXX)" style="width: 40%; margin-right: 10px;"/>
        <input class="input" type="text" v-model="phone2" placeholder="(0088-016-XXX-XXXX)" style="width: 38%;"/>
      </div>


      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
    <table style="">
      <thead>
        <tr>
          <th style="width: 22%;">Title</th>
            <th style="width: 12%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(para, i) in posts" :key="i">
            <td style="width: 22%; padding: 2px;">{{ para.listItem }}</td>
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
      itemList: [],
      listItem: null,
      title: null,
      description1: null,
      description2: null,
      description3: null,
      description4: null,
      imgDescription: null,
      specialWords: null,
      address1: null,
      address2: null,
      address3: null,
      phone1: null,
      phone2: null,
      posts: [],
      imageData: null,
      picture: null,
      uploadValue: 0,//
    }
  },
  created() {
    firebase.database().ref('awardMenuItem').on('value', (snapshot)=> {
      this.itemList = snapshot.val();
    });
    firebase.database().ref('awardMenuPost').on('value', (snapshot)=> {
      this.posts = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('awardMenuPost').push({
        listItem: this.listItem,
        title: this.title,
        description1: this.description1,
        description2: this.description2,
        description3: this.description3,
        description4: this.description4,
        imgURL: this.picture,
        imgDescription: this.imgDescription,
        specialWords: this.specialWords,
        address1: this.address1,
        address2: this.address2,
        address3: this.address3,
        phone1: this.phone1,
        phone2: this.phone2
      })
      .then((data)=>{
        // document.querySelector('.delete-btn').click()
        console.log(data)
        this.listItem = '',
        this.title = '',
        this.description1 = '',
        this.description2 = '',
        this.description3 = '',
        this.description4 = '',
        this.imgDescription = '',
        this.specialWords = '',
        this.address1 = '',
        this.address2 = '',
        this.address3 = '',
        this.phone1 = '',
        this.phone2 = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id) {
      console.log(id)
      firebase.database().ref('awardMenuPost/' + id).remove();
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
  top: 0;
  /* left: 8%; */
  right: 0;
  z-index: 10;
  width: 60%;
  border: 2px solid #272727;
  border-radius: 6px;
  padding: 6px;
}
.league-info-edit .label {
  display: inline-block;
  width: 18%;
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
.select-option {
  background: #787878;
  color: #FFF;
  font-weight: bold;
}
.select-arrow {
  position: absolute;
  right: 35%;
  top: 8px;
  font-weight: bold;
  color: #FFF;
}
</style>