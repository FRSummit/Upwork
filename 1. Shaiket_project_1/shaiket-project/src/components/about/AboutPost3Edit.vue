<template>
  <div class="league-info-edit">
    <form @submit.prevent="onSubmit">
      <label class="label">Title</label>
      <input class="input" type="text" v-model="title" id="title" placeholder=""/>
      <label class="label">Paragraph 1</label>
      <textarea class="input" type="text" v-model="paragraph1" id="paragraph1" placeholder=""/>
      <label class="label">Paragraph 2</label>
      <textarea class="input" type="text" v-model="paragraph2" id="paragraph2" placeholder=""/>
      <label class="label">Paragraph 3</label>
      <textarea class="input" type="text" v-model="paragraph3" id="paragraph3" placeholder=""/>
      <label class="label">Paragraph 4</label>
      <textarea class="input" type="text" v-model="paragraph4" id="paragraph4" placeholder=""/>
      <label class="label">Paragraph 5</label>
      <textarea class="input" type="text" v-model="paragraph5" id="paragraph5" placeholder=""/>
      <label class="label">Paragraph 6</label>
      <textarea class="input" type="text" v-model="paragraph6" id="paragraph6" placeholder=""/>
      <label class="label">Paragraph 7</label>
      <textarea class="input" type="text" v-model="paragraph7" id="paragraph7" placeholder=""/>
      <div class="btn-section">
        <button type="submit">Submit</button>
      </div>
    </form>
    <table style="">
      <thead>
        <tr>
          <th style="width: 98%;">Title</th>
            <th style="width: 15%;">Action</th>
          </tr>
        </thead>
        <tbody style="">
          <tr v-for="(para, i) in abouotPost" :key="i">
            <td style="width: 98%; padding: 2px;">{{ para.title }}</td>
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
      paragraph1: null,
      paragraph2: null,
      paragraph3: null,
      paragraph4: null,
      paragraph5: null,
      paragraph6: null,
      paragraph7: null,
      abouotPost: []
    }
  },
  created() {
    firebase.database().ref('aboutPost3').on('value', (snapshot)=> {
      this.abouotPost = snapshot.val();
    });
  },
  methods: {
    onSubmit() {
      firebase.database().ref('aboutPost3').push({
        title: this.title,
        paragraph1: this.paragraph1,
        paragraph2: this.paragraph2,
        paragraph3: this.paragraph3,
        paragraph4: this.paragraph4,
        paragraph5: this.paragraph5,
        paragraph6: this.paragraph6,
        paragraph7: this.paragraph7
      })
      .then((data)=>{
        console.log(data)
        this.title = '',
        this.paragraph1 = '',
        this.paragraph2 = '',
        this.paragraph3 = '',
        this.paragraph4 = '',
        this.paragraph5 = '',
        this.paragraph6 = '',
        this.paragraph7 = ''
      })
      .catch((error)=>console.log(error))
    },
    deleteSchedule(id) {
      firebase.database().ref('aboutPost3/' + id).remove();
      window.location.reload()
    }
  }
}
</script>

<style scoped>
.league-info-edit {
  background: #a8fda8;
  position: absolute;
  top: 40px;
  right: 0px;
  z-index: 10;
  width: 85%;
  border: 2px solid #272727;
  border-radius: 6px;
  padding: 6px;
}
.league-info-edit .label {
  display: inline-block;
  width: 15%;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 0;
  margin: 2px 0;
}
.league-info-edit .input {
  display: inline-block;
  width: 84%;
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