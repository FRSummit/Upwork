<template>
  <div class="league-info-edit">
    <form @submit.prevent="onSubmit">
      <label class="label">Title</label>
      <input class="input" type="text" v-model="title" id="title" placeholder="Mississauga Men's Senior Slo-Pitch"/>
      <label class="label">Street</label>
      <input class="input" type="text" v-model="street" id="" placeholder="XX HIGHWAY, MILKY WAY"/>
      <label class="label">Post Box</label>
      <input class="input" type="text" v-model="postBox" id="postBox" placeholder="PO BOX XXXX"/>
      <label class="label">State</label>
      <input class="input" type="text" v-model="state" id="state" placeholder="TEXAS"/>
      <label class="label">Capital / Country</label>
      <input class="input" type="text" v-model="capital" id="capital" placeholder="USA"/>
      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
    <table style="">
      <thead>
        <tr>
          <th style="width: 22%;">Street</th>
          <th style="width: 22%;">Post Box</th>
          <th style="width: 22%;">State</th>
          <th style="width: 22%;">Capital</th>
            <th style="width: 12%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(para, i) in address" :key="i">
            <td style="width: 22%; padding: 2px;">{{ para.street }}</td>
            <td style="width: 22%; padding: 2px;">{{ para.postBox }}</td>
            <td style="width: 22%; padding: 2px;">{{ para.state }}</td>
            <td style="width: 22%; padding: 2px;">{{ para.capital }}</td>
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
      title: null,
      street: null,
      postBox: null,
      state: null,
      capital: null,
      address: []
    }
  },
  created() {
    firebase.database().ref('contactMailAddress').on('value', (snapshot)=> {
      this.address = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('contactMailAddress').push({
        title: this.title,
        street: this.street,
        postBox: this.postBox,
        state: this.state,
        capital: this.capital
      })
      .then((data)=>{
        document.querySelector('.delete-btn').click()
        console.log(data)
        this.title = '',
        this.street = '',
        this.postBox = '',
        this.state = '',
        this.capital = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id) {
      console.log(id)
      firebase.database().ref('contactMailAddress/' + id).remove();
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