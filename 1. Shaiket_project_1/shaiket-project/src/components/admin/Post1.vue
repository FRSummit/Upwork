<template>
  <div class="league-info-edit">
    <form @submit.prevent="onSubmit">
      <label class="label">Data 1</label>
      <input class="input" type="text" v-model="dt1" id="dt1" placeholder=""/>
      <input class="input" type="text" v-model="dt2" id="dt1" placeholder=""/>
      <input class="input" type="text" v-model="dt3" id="dt1" placeholder=""/>
      <label class="label">Data 2</label>
      <input class="input" type="text" v-model="dt4" id="dt2" placeholder=""/>
      <input class="input" type="text" v-model="dt5" id="dt2" placeholder=""/>
      <input class="input" type="text" v-model="dt6" id="dt2" placeholder=""/>
      <label class="label">Data 3</label>
      <input class="input" type="text" v-model="dt7" id="dt3" placeholder=""/>
      <input class="input" type="text" v-model="dt8" id="dt3" placeholder=""/>
      <input class="input" type="text" v-model="dt9" id="dt3" placeholder=""/>
      <label class="label">Data 4</label>
      <input class="input" type="text" v-model="dt10" id="dt4" placeholder=""/>
      <input class="input" type="text" v-model="dt11" id="dt4" placeholder=""/>
      <input class="input" type="text" v-model="dt12" id="dt4" placeholder=""/>
      <label class="label">Data 5</label>
      <input class="input" type="text" v-model="dt13" id="dt5" placeholder=""/>
      <input class="input" type="text" v-model="dt14" id="dt5" placeholder=""/>
      <input class="input" type="text" v-model="dt15" id="dt5" placeholder=""/>
      <label class="label">Data 6</label>
      <input class="input" type="text" v-model="dt16" id="dt6" placeholder=""/>
      <input class="input" type="text" v-model="dt17" id="dt6" placeholder=""/>
      <input class="input" type="text" v-model="dt18" id="dt6" placeholder=""/>
      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
    <table style="">
      <thead>
        <tr>
          <th style="width: 35%;">Name</th>
          <th style="width: 35%;"></th>
          <th style="width: 35%;"></th>
            <th style="width: 15%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(i,j) in post" :key="j">
            <td style="width: 35%; padding: 2px;">{{ i.dt1 }}</td>
            <td style="width: 35%; padding: 2px;">{{ i.dt2 }}</td>
            <td style="width: 35%; padding: 2px;">{{ i.dt3 }}</td>
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
      dt1: '',
      dt2: '',
      dt3: '',
      dt4: '',
      dt5: '',
      dt6: '',
      dt7: '',
      dt8: '',
      dt9: '',
      dt10: '',
      dt11: '',
      dt12: '',
      dt13: '',
      dt14: '',
      dt15: '',
      dt16: '',
      dt17: '',
      dt18: '',
      post: []
    }
  },
  created() {
    firebase.database().ref('adminDefPost1').on('value', (snapshot)=> {
      this.post = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('adminDefPost1').push({
        dt1: this.dt1,
        dt2: this.dt2,
        dt3: this.dt3,
        dt4: this.dt4,
        dt5: this.dt5,
        dt6: this.dt6,
        dt7: this.dt7,
        dt8: this.dt8,
        dt9: this.dt9,
        dt10: this.dt10,
        dt11: this.dt11,
        dt12: this.dt12,
        dt13: this.dt13,
        dt14: this.dt14,
        dt15: this.dt15,
        dt16: this.dt16,
        dt17: this.dt17,
        dt18: this.dt18,
      })
      .then((data)=>{
        console.log(data)
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id) {
      firebase.database().ref('adminDefPost1/' + id).remove();
    }
  }
}
</script>

<style scoped>
.league-info-edit {
  background: #a8fda8;
  position: absolute;
  top: 0;
  right: -402px;
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
  font-size: 16px;
  font-weight: bold;
  padding: 4px 0;
  margin: 2px 0;
}
.league-info-edit .input {
  display: inline-block;
  width: 25%;
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
</style>