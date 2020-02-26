<template>
  <div class="league-info-edit">
      <form @submit.prevent="onSubmit">
        <label class="label" style="width: 40%;">Select one : </label>
        <select id="cars" class="input" v-model="itemName" style="width: 50%; height: 30px; margin: 0 0 10px 0;">
          <option v-for="(schedule, i) in sidebarList" :key="i">{{ schedule.itemName }}</option>
        </select>
          <img class="dpost-img" src="../../assets/images/down-arrow.png" alt="" style="width: 20px;">
        <label class="label">Info 1: </label>
        <textarea class="input" type="text" v-model="info1" id="info1"/>
        <label class="label" for="lname">Info 2: </label>
        <textarea class="input" type="text" v-model="info2" id="info2"/>
        <label class="label" for="lname">Info 3: </label>
        <textarea class="input" type="text" v-model="info3" id="info3"/>
        <label class="label" for="lname">Info 4: </label>
        <textarea class="input" type="text" v-model="info4" id="info4"/>
        <label class="label" for="lname">Info 5: </label>
        <textarea class="input" type="text" v-model="info5" id="info5"/>
        <div class="btn-section">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div v-for="(info, key) in leagueInfo" :key="key" style="min-height: 100px">
        <a href="#" class="delete-btn" @click="deleteInfo(key)">Delete</a>
        <p style="font-weight: bold;">TItle: {{ info.itemName }}</p>
        <p style="font-size: 14px;">Info 1: {{ info.info1 }}</p>
        <p style="font-size: 14px;">Info 2: {{ info.info2 }}</p>
        <p style="font-size: 14px;">Info 3: {{ info.info3 }}</p>
        <p style="font-size: 14px;">Info 4: {{ info.info4 }}</p>
        <p style="font-size: 14px;">Info 5: {{ info.info5 }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemName: null,
      info1: null,
      info2: null,
      info3: null,
      info4: null,
      info5: null,
      leagueInfo: [],
      sidebarList: []
    }
  },
  created() {
    firebase.database().ref('adminDynamicPost').on('value', (snapshot)=> {
      this.leagueInfo = snapshot.val();
    });
    firebase.database().ref('adminSidebar1List').on('value', (snapshot)=> {
      this.sidebarList = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('adminDynamicPost').push({
        itemName: this.itemName,
        info1: this.info1,
        info2: this.info2,
        info3: this.info3,
        info4: this.info4,
        info5: this.info5
      })
      .then((data)=>{
        console.log(data)
        this.itemName = '',
        this.info1 = '',
        this.info2 = '',
        this.info3 = '',
        this.info4 = '',
        this.info5 = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteInfo(id) {
      firebase.database().ref('adminDynamicPost/' + id).remove();
    }
  }
}
</script>

<style scoped>
.league-info-edit {
  background: #a8fda8;
  position: absolute;
  top: 0;
  right: -502px;
  z-index: 10;
  width: 120%;
  border: 2px solid #272727;
  border-radius: 6px;
  padding: 6px;
}
.league-info-edit .label {
  display: inline-block;
  width: 13%;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 0;
}
.league-info-edit .input {
  display: inline-block;
  width: 85%;
  border-radius: 6px;
  border: 2px solid #272727;
  height: 50px;
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
.dpost-img {
  width: 20px;
  position: absolute;
  right: 55px;
  top: 11px;
}
</style>