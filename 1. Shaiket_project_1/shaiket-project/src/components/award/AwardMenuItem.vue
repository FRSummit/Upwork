<template>
  <div class="league-info-edit">
    <h3 style="text-align: center; margin-bottom: 10px; background: #dedede; color: #272727;">Add a year</h3>
    <form @submit.prevent="onSubmit">
      <label class="label">Title</label>
      <input class="input" type="text" v-model="title" id="" placeholder="Title Name"/>
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
          <tr v-for="(para, i) in address" :key="i">
            <td style="width: 22%; padding: 2px;">{{ para.title }}</td>
            <a href="#" class="delete-btn" @click="deleteSchedule(i, para.title)">Delete</a>
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
      address: [],
      deletingPost: []
    }
  },
  created() {
    firebase.database().ref('awardMenuItem').on('value', (snapshot)=> {
      this.address = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('awardMenuItem').push({
        title: this.title,
      })
      .then((data)=>{
        // document.querySelector('.delete-btn').click()
        console.log(data)
        this.title = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id, year) {
      firebase.database().ref('awardMenuItem/' + id).remove();
      firebase.database().ref('awardMenuPost').on('value', (snapshot)=> {
        this.deletingPost = snapshot.val();
      });
      let postYearIdFound = null
      console.log('yy : ' + year)
      if(this.deletingPost) {
        for(let i=0; i<Object.keys(this.deletingPost).length; i++) {
          console.log('aa : ' + this.deletingPost[Object.keys(this.deletingPost)[i]].listItem)
          if(this.deletingPost[Object.keys(this.deletingPost)[i]].listItem == year) {
            console.log('got the year')
            postYearIdFound = Object.keys(this.deletingPost)[i]
          }
        }
      }
      firebase.database().ref('awardMenuPost/' + postYearIdFound).remove();
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
  left: 7%;
  z-index: 10;
  width: 30%;
  border: 2px solid #272727;
  border-radius: 6px;
  padding: 6px;
}
.league-info-edit .label {
  display: inline-block;
  width: 15%;
  vertical-align: top;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  margin: 2px 0;
}
.league-info-edit .input {
  display: inline-block;
  width: 85%;
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