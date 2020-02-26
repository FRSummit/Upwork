<template>
  <div class="league-info-edit">
    <form @submit.prevent="onSubmit">
      <label class="label">List Item</label>
      <input class="input" type="text" v-model="itemName" id="itemName" placeholder="2019 League Constitution"/>
      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
    <table style="">
      <thead>
        <tr>
          <th style="width: 35%;">Name</th>
            <th style="width: 15%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(l, i) in list" :key="i">
            <td style="width: 35%; padding: 2px;">{{ l.itemName }}</td>
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
      itemName: null,
      list: [],
    }
  },
  created() {
    firebase.database().ref('adminSidebar1List').on('value', (snapshot)=> {
      this.list = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('adminSidebar1List').push({
        itemName: this.itemName
      })
      .then((data)=>{
        console.log(data)
        this.itemName = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id) {
      firebase.database().ref('adminSidebar1List/' + id).remove();
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
  width: 400px;
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