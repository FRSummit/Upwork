<template>
  <div class="league-info-edit">
    <h3 style="text-align: center; margin-bottom: 10px; background: #dedede; color: #272727;">Add a year</h3>
    <form @submit.prevent="onSubmit">
      <label class="label">Year</label>
      <input class="input" type="text" v-model="year" id="" placeholder="2020"/>
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
          <tr v-for="(para, i) in address" :key="i">
            <td style="width: 22%; padding: 2px;">{{ para.year }}</td>
            <a href="#" class="delete-btn" @click="deleteSchedule(i, para.year)">Delete</a>
          </tr>
        </tbody>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      year: null,
      address: [],
      deletingPost: []
    }
  },
  created() {
    firebase.database().ref('standingYearList').on('value', (snapshot)=> {
      this.address = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('standingYearList').push({
        year: this.year,
      })
      .then((data)=>{
        // document.querySelector('.delete-btn').click()
        console.log(data)
        this.year = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id, year) {
      firebase.database().ref('standingYearList/' + id).remove();
      firebase.database().ref('standingYearPost').on('value', (snapshot)=> {
        this.deletingPost = snapshot.val();
      });
      let postYearIdFound = null
      if(this.deletingPost) {
        for(let i=0; i<Object.keys(this.deletingPost).length; i++) {
          console.log(this.deletingPost[Object.keys(this.deletingPost)[i]].postYear)
          if(this.deletingPost[Object.keys(this.deletingPost)[i]].postYear == year) {
            console.log('got the year')
            postYearIdFound = Object.keys(this.deletingPost)[i]
          }
        }
      }
      firebase.database().ref('standingYearPost/' + postYearIdFound).remove();
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.league-info-edit {
  background: #a8fda8;
  position: absolute;
  top: 0;
  left: 8%;
  z-index: 10;
  width: 25%;
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
</style>