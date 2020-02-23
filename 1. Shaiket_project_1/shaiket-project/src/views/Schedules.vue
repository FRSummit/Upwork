<template>
  <!-- <div class="home" v-if="userIsAuthorized"> -->
  <div class="schedules">
    <div class="sidebar">
      <ul class="sidebar-parent-ul">
        <li class="sidebar-parent-li">
          <h2 class="sidebar-text-important-dates">By Team</h2>
          <button class="edit-btn" @click="sidebarSchedule" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="sidebarSchedule" 
                                  v-if="userIsAuthorized && sidebarScheduleAuthorization">
                                  X</button>
          <ScheduleSidebarList v-if="userIsAuthorized && sidebarScheduleAuthorization"/>
          <ul class="sidebar-child-ul">
            <li @click="scheduleClick(i)" v-for="(schedule, i) in schedules" :key="i">
              <a>{{schedule.itemName}}</a>
            </li>
					</ul>
        </li>
      </ul>
    </div>
    <!-- Page content goes here -->
    <div class="content" style="position: relative;" v-for="(post, i) in scheduleDefPost" :key="i">
      <button class="edit-btn" @click="sidebarScheduleDefPostEditClick" v-if="userIsAuthorized">Edit</button>
      <button class="close-btn" @click="sidebarScheduleDefPostEditClick" 
                                  v-if="userIsAuthorized && sidebarScheduleDefPostAuth"
                                  style="top: 44px; right: 24px;">
                                  X</button>
      <ScheduleEditDefaultPost v-if="sidebarScheduleDefPostAuth && sidebarScheduleDefPostAuth"/>
			<!-- <div class="post" v-if="defaultPostAuthentication">
				<h2 class="title">2019 Regular Season</h2>
				<div class="entry">
					<p>Click on your team's name in the left column to view your complete schedule for 2018</p>
					Download Master Schedule: <a href="res/docs/master-schedule.csv">as .csv (for Excel)</a> | <a href="res/docs/master-schedule.ics">as .ics (for Calendar)</a>
				</div>
			</div> -->
			<div class="post" v-if="defaultPostAuthentication">
				<h2 class="title">{{ post.title1 }}</h2>
				<div class="entry">
					<p>{{ post.desc1 }}</p>
          <a :href="post.url1" target="_blank">{{ post.urlTitle1 }}</a>
				</div>
			</div>
			<div class="post" v-if="defaultPostAuthentication">
				<h2 class="title">{{ post.title2 }}</h2>
				<div class="entry">
					<p>{{ post.desc2 }}</p>
          <a :href="post.url2" target="_blank">{{ post.urlTitle2 }}</a>
				</div>
			</div>
			<!-- <div class="post" v-if="defaultPostAuthentication">
				<h2 class="title">2019 Charity Tournament</h2>
				<div class="entry">
					<p>The Charity Tournament is scheduled for May 28 - June 2, 2019.</p>
          <a href="schedule-2019-charity.html">Full schedule and results.</a>
				</div>
			</div>				
			<div class="post" v-if="defaultPostAuthentication">
	  		<h2 class="title">2019 Year-End Tournament</h2>
				<div class="entry">
					<p>The Year-End Tournament is scheduled for September 12 - 15, 2019.</p>
					<a href="schedule-2019-final.html">Full schedule and results.</a>
				</div>
			</div> -->
      <v-card v-if="sidebarScheduleGetSelected">
        <div class="post">
          <h2 class="title">2020 Registration List</h2>
          <button class="close-btn" @click="addNewReg" 
                                    style="right: 6px; background-color: green; padding: 4px 8px;">
                                    Add New</button>
          <div class="entry" style="padding: 12px; background: #FDFDFD;">
            <v-simple-table dark>
              <template v-slot:default>
                <thead>
                  <tr>
                    <!-- <th class="text-left">Name</th> -->
                    <th class="text-left">Date</th>
                    <th class="text-left">Time</th>
                    <th class="text-left">Park</th>
                    <th class="text-left">Home</th>
                    <th class="text-left">Visitor</th>
                    <th class="text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(list, i) in regResultList" :key="i">
                    <!-- <td v-if="getSidebarItemName === list.itemName">{{ list.itemName }}</td> -->
                    <td v-if="getSidebarItemName === list.itemName">{{ list.date }}</td>
                    <td v-if="getSidebarItemName === list.itemName">{{ list.time }}</td>
                    <td v-if="getSidebarItemName === list.itemName">{{ list.park }}</td>
                    <td v-if="getSidebarItemName === list.itemName">{{ list.home }}</td>
                    <td v-if="getSidebarItemName === list.itemName">{{ list.visitor }}</td>
                    <td v-if="getSidebarItemName === list.itemName">
                      <a href="#" class="delete-btn" @click="deleteRegistration(i)">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </div>
        <div class="league-info-edit-sbar" v-if="regFormAuth">
          <button class="close-btn" @click="closeRegForm" 
                                    style="right: 2px; top: 2px; background-color: red; padding: 4px 8px;">
                                    X</button>
          <form @submit.prevent="onSubmitRegForm">
            <label class="label">Item Selection</label>
            <select id="cars" class="input" v-model="itemName">
              <option v-for="(schedule, i) in schedules" :key="i">{{ schedule.itemName }}</option>
            </select>
            <div style="padding: 10px 6px;">
              <label class="label">Title</label>
              <input class="input" type="text" v-model="title" id="title" placeholder="ACE POOLS MOOSE 2019 SCHEDULE"/>
              <label class="label">Date</label>
              <input class="input" type="text" v-model="date" id="date" placeholder="Tue May 14"/>
              <label class="label">Time</label>
              <input class="input" type="text" v-model="time" id="time" placeholder="9:30 PM"/>
              <label class="label">Park</label>
              <input class="input" type="text" v-model="park" id="park" placeholder="Centennial North"/>
              <label class="label">Home</label>
              <input class="input" type="text" v-model="home" id="infhomeo1" placeholder="Markham Knights"/>
              <label class="label">Visitor</label>
              <input class="input" type="text" v-model="visitor" id="visitor" placeholder="Ace Pools Moose"/>
            </div>
            <div class="btn-section">
              <button type="submit">Submit</button>
            </div>
          </form>
          <table>
            <thead>
              <tr style="font-size: 14px;">
                <th style="width: 35%;">List Name</th>
                <th style="width: 35%;">Title</th>
                <th style="width: 35%;">Date</th>
                  <th style="width: 15%;">Action</th>
                </tr>
              </thead>
              <tbody style="">
                <tr v-for="(schedule, i) in regResultList" :key="i" style="font-size: 12px;">
                  <td style="width: 35%; padding: 2px;">{{ schedule.itemName }}</td>
                  <td style="width: 35%; padding: 2px;">{{ schedule.title }}</td>
                  <td style="width: 35%; padding: 2px;">{{ schedule.date }}</td>
                  <a href="#" class="delete-btn" @click="deleteSchedule(i)">Delete</a>
                </tr>
              </tbody>
          </table>
        </div>
      </v-card>
		</div>
  </div>
</template>

<script>
import ScheduleSidebarList from '../components/schedule/ScheduleSidebarList'
import ScheduleEditDefaultPost from '../components/schedule/ScheduleEditDefaultPost'

export default {
  props: {
  },
  components: {
    ScheduleSidebarList,
    ScheduleEditDefaultPost
  },
  data () {
    return {
      users: [],
      userIsAuthorized: false,
      sidebarScheduleAuthorization: false,
      defaultPostAuthentication: true,
      sidebarScheduleGetSelected: false,
      regFormAuth: false,
      schedules: [],
      regResultList: [],
      itemName: null,
      title: null,
      date: null,
      time: null,
      park: null,
      home: null,
      visitor: null,
      regIds: [],
      getSidebarItemName: null,
      sidebarScheduleDefPostAuth: false,
      scheduleDefPost: []
    }
  },
  methods: {
    checkUserIsAuthorized() {
      const userAuth = localStorage.getItem("upwork_project_shaiket_login_pass");
      if(userAuth) {
        const authValue = JSON.parse(userAuth).login_auth_value;
        console.log(authValue);
        if(authValue == 'authorized') {
          this.userIsAuthorized = true; 
        }
      }
    },
    sidebarSchedule() {
      if(this.sidebarScheduleAuthorization === true) {
        this.sidebarScheduleAuthorization = false;
      } else if(this.sidebarScheduleAuthorization === false) {
        this.sidebarScheduleAuthorization = true;
      }
    },
    sidebarScheduleDefPostEditClick() {
      if(this.sidebarScheduleDefPostAuth === true) {
        this.sidebarScheduleDefPostAuth = false;
      } else if(this.sidebarScheduleDefPostAuth === false) {
        this.sidebarScheduleDefPostAuth = true;
      }
    },
    scheduleClick(id) {
      // console.log(id)
      if(this.defaultPostAuthentication === true && this.sidebarScheduleGetSelected === false) {
        this.defaultPostAuthentication = false;
        this.sidebarScheduleGetSelected = true;
      }/* else if(this.defaultPostAuthentication === false && this.sidebarScheduleGetSelected === true) {
        this.defaultPostAuthentication = true;
        this.sidebarScheduleGetSelected = false;
      }*/
      firebase.database().ref('scheduleSidebarList/' + id).on('value', (snapshot)=> {
        // this.schedules = snapshot.val();
        // console.log('Sidebar : ')
        // console.log(snapshot.val())
        // console.log(snapshot.val().itemName)
        this.getSidebarItemName = snapshot.val().itemName
      });
      firebase.database().ref('scheduleSidebarRegList').on('value', (snapshot)=> {
        this.regResultList = snapshot.val();
        /*console.log(this.regResultList['-M0kjxfV5O-Ifw-02QR_'])
        this.regIds = [Object.keys(snapshot.val())]
        for(let i=0; i<=[Object.keys(snapshot.val())].length; i++) {
          console.log(this.regResultList[Object.keys(snapshot.val())[i]])
        }*/
      });
    },
    closeRegForm() {
      if(this.regFormAuth === true) {
        this.regFormAuth = false;
      }
    },
    addNewReg() {
      if(this.regFormAuth === false) {
        this.regFormAuth = true;
      }
    },
    onSubmitRegForm() {
      firebase.database().ref('scheduleSidebarRegList').push({
        itemName: this.itemName,
        title: this.title,
        date: this.date,
        time: this.time,
        park: this.park,
        home: this.home,
        visitor: this.visitor
      })
      .then((data)=>{
        this.itemName = '',
        this.title = '',
        this.date = '',
        this.time = '',
        this.park = '',
        this.home = '',
        this.visitor = ''
        this.regFormAuth = false;
      })
      .catch((error)=>console.log(error))
    },
    deleteRegistration(id) {
      firebase.database().ref('scheduleSidebarRegList/' + id).remove();
    },
    deleteSchedule(id) {
      firebase.database().ref('scheduleSidebarRegList/' + id).remove();
    }
  },
  created() {
    this.checkUserIsAuthorized();
    firebase.database().ref('scheduleSidebarList').on('value', (snapshot)=> {
      this.schedules = snapshot.val();
    });
    firebase.database().ref('scheduleDefaultPost').on('value', (snapshot)=> {
      this.scheduleDefPost = snapshot.val();
    });
  }
}
</script>

<style scoped>
.schedules {
  background-color: #fff; 
  border-radius: 4px; 
  overflow: hidden;
  padding-bottom: 10px;
}
.schedules .sidebar {
  font-size: 80%;
  float: left;
  padding: 20px 0 0 20px;
  width: 240px;
  text-align: left;
}
.schedules .sidebar li {
  margin: 0;
  position: relative;
}
.schedules .sidebar h2,
.schedules .sidebar h3 {
  padding: 10px;
  font-size:17.28px;
  /* background-color: #333333; */
  background-color: #272727;
  color: #FFFFFF;
  font-family: Arial, Helvetica, sans-serif;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.schedules .sidebar li ul {
  padding-bottom: 10px;
}
.schedules .sidebar li ul li {
  font-size:11.52px;
  border-bottom: 1px solid #D2D4C9;
  border-left: 1px solid #D2D4C9;
  border-right: 1px solid #D2D4C9;
  padding: 10px;
  margin: 0;
  color: #787878;
}
.schedules .sidebar li ul li span {
  display: block;
  padding: 0;
  padding-top: 2px;
  padding-left: 10px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  color: #787878;
}
.schedules .sidebar li ul li a {
  color: #417FDA;
  text-decoration: none;
  cursor: pointer;
}
.schedules .sidebar li ul li a:hover {
  text-decoration: underline;
}
.schedules .content {
  float: right;
  width: 720px;
  padding: 20px 20px 0 0;
  min-height: 700px;
}
.schedules .post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
}
.schedules .post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  /* color: #000000; */
  background-color: #272727;
  color: #FFFFFF;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.schedules .post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 10px 20px 15px 20px;
  font-size: 14.4px;
  text-align: left;
  color: #222;
}
.schedules .entry p {
  margin-bottom: 14px;
}
.schedules .entry a {
  text-decoration: none;
  color: #417FDA;
}
.schedules .entry a:hover {
  text-decoration: underline;
}
.schedules .sidebar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.schedules .edit-btn {
  position: absolute;
  top: 6px;
  right: 6px;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 10px;
  border: 2px solid #FFFFFF;
  border-radius: 6px;
  background: green;
}
.close-btn {
  position: absolute;
  top: 6px;
  right: -396px; 
  z-index: 12; 
  padding: 0px 4px; 
  background: red;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid #FFFFFF;
  border-radius: 6px;
} 
.league-info-edit-sbar {
  background: #a8fda8;
  position: absolute;
  top: 60px;
  right: 0;
  z-index: 10;
  width: 600px;
  border: 2px solid #272727;
  border-radius: 6px;
  padding: 6px;
}
.league-info-edit-sbar .label {
  display: inline-block;
  width: 20%;
  vertical-align: top;
  font-size: 16px;
  font-weight: bold;
  padding: 4px 0;
  margin: 2px 0;
}
.league-info-edit-sbar .input {
  display: inline-block;
  width: 70%;
  border-radius: 6px;
  border: 2px solid #272727;
  padding: 4px;
  font-size: 14px;
  margin: 2px 0;
}
.league-info-edit-sbar .btn-section {
  width: 100%;
  text-align: center;
  margin: 10px 0;
}
.league-info-edit-sbar button {
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