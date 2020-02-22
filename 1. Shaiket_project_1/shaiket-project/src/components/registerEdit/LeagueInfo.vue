<template>
  <div class="league-info-edit">
      <form @submit.prevent="onSubmit">
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
        <label class="label" for="lname">Info 6: </label>
        <textarea class="input" type="text" v-model="info6" id="info6"/>
        <label class="label" for="lname">Info 7: </label>
        <textarea class="input" type="text" v-model="info7" id="info7"/>
        <div class="btn-section">
          <button type="submit">Submit</button>
        </div>
      </form>
      <div v-for="(info, key) in leagueInfo" :key="key">
        <a href="#" class="delete-btn" @click="deleteInfo(key)">Delete</a>
        <p>Info 1: {{ info.info1 }}</p>
        <p>Info 2: {{ info.info2 }}</p>
        <p>Info 3: {{ info.info3 }}</p>
        <p>Info 4: {{ info.info4 }}</p>
        <p>Info 5: {{ info.info5 }}</p>
        <p>Info 6: {{ info.info6 }}</p>
        <p>Info 7: {{ info.info7 }}</p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info1: null,
      info2: null,
      info3: null,
      info4: null,
      info5: null,
      info6: null,
      info7: null,
      leagueInfo: []
    }
  },
  created() {
    firebase.database().ref('registerLeagueInfo').on('value', (snapshot)=> {
      this.leagueInfo = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('registerLeagueInfo').push({
        info1: this.info1,
        info2: this.info2,
        info3: this.info3,
        info4: this.info4,
        info5: this.info5,
        info6: this.info6,
        info7: this.info7
      })
      .then((data)=>{
        console.log(data)
        this.info1 = '',
        this.info2 = '',
        this.info3 = '',
        this.info4 = '',
        this.info5 = '',
        this.info6 = '',
        this.info7 = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteInfo(id) {
      firebase.database().ref('registerLeagueInfo/' + id).remove();
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
  width: 500px;
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
  height: 80px;
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