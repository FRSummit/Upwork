<template>
  <div class="league-info-edit">
    <h3 style="text-align: center; margin-bottom: 10px; background: #dedede; color: #272727;">{{ sendYear }} Form</h3>
    <form @submit.prevent="onSubmit">
      <label class="label">Year</label>
      <input class="input" type="text" v-model="year"/>
      <label class="label">Team Name</label>
      <input class="input" type="text" v-model="teamName" id="" placeholder=""/>
      <label class="label">P</label>
      <input class="input" type="text" v-model="p" id="" placeholder=""/>
      <label class="label">W</label>
      <input class="input" type="text" v-model="w" id="" placeholder=""/>
      <label class="label">L</label>
      <input class="input" type="text" v-model="l" id="" placeholder=""/>
      <label class="label">T</label>
      <input class="input" type="text" v-model="t" id="" placeholder=""/>
      <label class="label">D</label>
      <input class="input" type="text" v-model="d" id="" placeholder=""/>
      <label class="label">+/-</label>
      <input class="input" type="text" v-model="posmin" id="" placeholder=""/>
      <label class="label">GP</label>
      <input class="input" type="text" v-model="gp" id="" placeholder=""/>
      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
    <table style="text-align: center;" v-if="address">
      <thead>
        <tr>
          <th style="width: 30%;">Team Name</th>
          <th style="width: 8%;">P</th>
          <th style="width: 8%;">W</th>
          <th style="width: 8%;">L</th>
          <th style="width: 8%;">T</th>
          <th style="width: 8%;">D</th>
          <th style="width: 8%;">+/-</th>
          <th style="width: 8%;">GP</th>
            <th style="width: 15%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(para, i) in address" :key="i">
            <td style="width: 30%; padding: 2px;">{{ para.teamName }}</td>
            <td style="width: 8%; padding: 2px;">{{ para.p }}</td>
            <td style="width: 8%; padding: 2px;">{{ para.w }}</td>
            <td style="width: 8%; padding: 2px;">{{ para.l }}</td>
            <td style="width: 8%; padding: 2px;">{{ para.t }}</td>
            <td style="width: 8%; padding: 2px;">{{ para.d }}</td>
            <td style="width: 8%; padding: 2px;">{{ para.posmin }}</td>
            <td style="width: 15%; padding: 2px;">{{ para.gp }}</td>
            <a href="#" class="delete-btn" @click="deleteSchedule(i, para.year)">Delete</a>
          </tr>
        </tbody>
    </table>
  </div>
</template>


<script>
export default {
  props: {
    sendYear: String
  },
  data() {
    return {
      year: null,
      teamName: null,
      p: null,
      w: null,
      l: null,
      t: null,
      d: null,
      posmin: null,
      gp: null,
      address: [],
    }
  },
  created() {
    firebase.database().ref('standingPostRegList').on('value', (snapshot)=> {
      this.address = snapshot.val();
    });
    console.log('prop: ' + this.sendYear)
  },
  methods: {
    onSubmit() {
        // console.log(document.querySelector('h3').innerText)
      firebase.database().ref('standingPostRegList').push({
        // year: document.querySelector('h3').innerText.split(' ')[0],
        year: this.year,
        teamName: this.teamName,
        p: this.p,
        w: this.w,
        l: this.l,
        t: this.t,
        d: this.d,
        posmin: this.posmin,
        gp: this.gp,
      })
      .then((data)=>{
        console.log(data)
        this.year = ''
        this.teamName = ''
        this.p = ''
        this.w = ''
        this.l = ''
        this.t = ''
        this.d = ''
        this.posmin = ''
        this.gp = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id, year) {
      firebase.database().ref('standingPostRegList/' + id).remove();
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.league-info-edit {
  background: #a8fda8;
  position: absolute;
  top: -400px;
  left: unset;
  right: 80px;
  z-index: 10;
  width: 60%;
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
  text-align: center;
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
</style>