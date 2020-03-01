<template>
  <div class="league-info-edit">
    <h3 style="text-align: center; margin-bottom: 10px; background: #dedede; color: #272727;">Form</h3>
    <form @submit.prevent="onSubmit">
      <div class="name-field" style="position: relative;">
        <label class="label" style="width: 25%;">Title</label>
        <select class="input select-option" v-model="listItem" style="width: 75%;">
        <option v-for="(i, j) in itemList" :key="j">{{ i.title }} </option>
        </select>
        
      <img src="../../assets/images/drop-down.png" style="width: 12px;position: absolute; right: 2%; top: 11px;">
        <!-- <span class="select-arrow">V</span> -->
      </div>
      <label class="label">Year</label>
      <input class="input" type="text" v-model="year" id="" placeholder=""/>
      <label class="label">Champion</label>
      <input class="input" type="text" v-model="champion" id="" placeholder=""/>
      <div class="btn-section">
        <button type="submit">ADD</button>
      </div>
    </form>
    <table style="">
      <thead>
        <tr>
          <th style="width: 20%;">Title</th>
          <th style="width: 20%;">Year</th>
          <th style="width: 50%;">Champion</th>
            <th style="width: 12%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(para, i) in awards" :key="i">
            <td style="width: 20%; padding: 2px;">{{ para.listItem }}</td>
            <td style="width: 20%; padding: 2px;">{{ para.year }}</td>
            <td style="width: 50%; padding: 2px;">{{ para.champion }}</td>
            <a href="#" class="delete-btn" @click="deleteSchedule(i)">Delete</a>
          </tr>
        </tbody>
    </table>
  </div>
</template>


<script>
export default {
  props: {
  },
  data() {
    return {
      itemList: [],
      listItem: null,
      year: null,
      champion: null,
      awards: [],
    }
  },
  created() {
    firebase.database().ref('awardMenuItem').on('value', (snapshot)=> {
      this.itemList = snapshot.val();
    });
    firebase.database().ref('awardChampionList').on('value', (snapshot)=> {
      this.awards = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('awardChampionList').push({
        listItem: this.listItem,
        year: this.year,
        champion: this.champion
      })
      .then((data)=>{
        console.log(data)
        this.listItem = '',
        this.year = '',
        this.champion = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id, year) {
      firebase.database().ref('awardChampionList/' + id).remove();
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.league-info-edit {
  background: #a8fda8;
  position: absolute;
  top: 30px;
  left: unset;
  right: 0px;
  z-index: 10;
  width: 60%;
  border: 2px solid #272727;
  border-radius: 6px;
  padding: 6px;
}
.league-info-edit .label {
  display: inline-block;
  width: 25%;
  vertical-align: top;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  margin: 2px 0;
  text-align: center;
}
.league-info-edit .input {
  display: inline-block;
  width: 75%;
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