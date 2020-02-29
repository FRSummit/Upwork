<template>
  <div class="schedule-def-post-edit">
    <form @submit.prevent="onSubmit">
      <div>
        <h3>Post 1</h3>
        <label class="label">Title</label>
        <input class="input" type="text" v-model="title1" id="title1" placeholder=""/>
        <label class="label">Description</label>
        <input class="input" type="text" v-model="desc1" id="desc1" placeholder=""/>
        <label class="label">URL title</label>
        <input class="input" type="text" v-model="urlTitle1" id="urlTitle1" placeholder=""/>
        <label class="label">URL</label>
        <input class="input" type="text" v-model="url1" id="url1" placeholder=""/>
      </div>
      <div style="margin-top: 10px;">
        <h3>Post 2</h3>
        <label class="label">Title</label>
        <input class="input" type="text" v-model="title2" id="title2" placeholder=""/>
        <label class="label">Description</label>
        <input class="input" type="text" v-model="desc2" id="desc2" placeholder=""/>
        <label class="label">URL title</label>
        <input class="input" type="text" v-model="urlTitle2" id="urlTitle2" placeholder=""/>
        <label class="label">URL</label>
        <input class="input" type="text" v-model="url2" id="url2" placeholder=""/>
      </div>
      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
    <table style="">
      <thead>
        <tr>
          <th style="width: 35%;">Title 1</th>
          <th style="width: 35%;">Title 2</th>
            <th style="width: 15%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(schedule, i) in defPost" :key="i">
            <td style="width: 35%; padding: 2px;">{{ schedule.title1 }}</td>
            <td style="width: 35%; padding: 2px;">{{ schedule.title2 }}</td>
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
      title1: null,
      desc1: null,
      urlTitle1: null,
      url1: null,
      title2: null,
      desc2: null,
      urlTitle2: null,
      url2: null,
      defPost: []
    }
  },
  created() {
    firebase.database().ref('adminDefaultPost').on('value', (snapshot)=> {
      this.defPost = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('adminDefaultPost').push({
        title1: this.title1,
        desc1: this.desc1,
        urlTitle1: this.urlTitle1,
        url1: this.url1,
        title2: this.title2,
        desc2: this.desc2,
        urlTitle2: this.urlTitle2,
        url2: this.url2
      })
      .then((data)=>{
        console.log(data)
        this.title1 = '',
        this.desc1 = '',
        this.urlTitle1 = '',
        this.url1 = '',
        this.title2 = '',
        this.desc2 = '',
        this.urlTitle2 = '',
        this.url2 = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id) {
      firebase.database().ref('adminDefaultPost/' + id).remove();
    }
  }
}
</script>

<style scoped>
.schedule-def-post-edit {
  background: #a8fda8;
  position: absolute;
  top: 40px;
  right: 20px;
  z-index: 10;
  width: 400px;
  border: 2px solid #272727;
  border-radius: 6px;
  padding: 6px;
}
.schedule-def-post-edit .label {
  display: inline-block;
  width: 25%;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 0;
  margin: 2px 0;
  text-align: left;
}
.schedule-def-post-edit .input {
  display: inline-block;
  width: 70%;
  border-radius: 6px;
  border: 2px solid #272727;
  padding: 4px;
  font-size: 14px;
  margin: 2px 0;
}
.schedule-def-post-edit .btn-section {
  width: 100%;
  text-align: center;
  margin: 10px 0;
}
.schedule-def-post-edit button {
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
</style>