<template>
  <!-- <div class="home" v-if="userIsAuthorized"> -->
  <div class="admin">
    <div class="sidebar">
      <ul class="sidebar-parent-ul">
        <li>
			  	<h2>League Rules</h2>
          <button class="edit-btn" @click="adminSidebar1EditClick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="adminSidebar1EditClick" 
                                  v-if="userIsAuthorized && sidebar1AdminAuth"
                                  style="right: -396px;">
                                  X</button>
          <SidebarEdit1 v-if="userIsAuthorized && sidebar1AdminAuth"/>
          <ul>
						<li v-for="(l, i) in sidebarList1" :key="i" @click="adminSidebar1Click(i)" style="cursor: pointer;">
              <a>{{ l.itemName }}</a>
            </li>
					</ul>
				</li>
      </ul>
    </div>
    <!-- Page content goes here -->
      <div class="content">
				<div class="post" v-if="defaultPost">
					<h2 class="title">2020 League Executive</h2>
          <button class="edit-btn" @click="post1EditCLick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="post1EditCLick" 
                                  v-if="userIsAuthorized && post1Auth"
                                  style="top: 44px; right: 4px;">
                                  X</button>
          <Post1 v-if="userIsAuthorized && post1Auth" style="top: 40px; right: 0px;"/>
					<div class="entry">
						<table border="0" cellspacing="0" class="admin_table">
							<tbody>
                <tr>
								<td>
                  <span class="top">President</span>
                  <br>Sean Bansavatar<br>
                  <span class="bottom">S+H Raiders</span>
                </td>
								<td>
                  <span class="top">1st Vice-President</span>
                  <br>Jay Mclean<br><span class="bottom">Beavers</span>
                </td>
								<td>
                  <span class="top">2nd Vice-President</span>
                  <br>Matt De Kuyper<br>
                  <span class="bottom">Northtown Sox</span>
                </td>
							</tr>
                <tr>
								<td>
                  <span class="top">President</span>
                  <br>Sean Bansavatar<br>
                  <span class="bottom">S+H Raiders</span>
                </td>
								<td>
                  <span class="top">1st Vice-President</span>
                  <br>Jay Mclean<br><span class="bottom">Beavers</span>
                </td>
								<td>
                  <span class="top">2nd Vice-President</span>
                  <br>Matt De Kuyper<br>
                  <span class="bottom">Northtown Sox</span>
                </td>
							</tr>
						</tbody></table>					
					</div>
				</div>
				<!-- <div class="post" v-if="defaultPost">
					<h2 class="title">2020 Executive Council - Team Representatives</h2>
					<div class="entry">
						<table border="0" cellspacing="0" class="admin_table">
							<tbody><tr>
								<td><span class="top">RJ Clements</span><br>Ace Pools Moose</td>
								<td><span class="top">Kirby Kuindersma</span><br>Duchess Beavers</td>
								<td><span class="top">Andrew Ming</span><br>Derek Houghton Century 21</td>
								<td><span class="top">Mike Maskery</span><br>Irish Holdings Shamrocks</td>
							</tr>
							<tr>
								<td><span class="top">Victor Chau</span><br>Markham Knights</td>
								<td><span class="top">Dwayne Vincent</span><br>Northtown Sox</td>
                                <td><span class="top">Rudy Pitton</span><br>OK Braves</td>
								<td><span class="top">Brian Lattanville</span><br>Pilkey Glass Pirates</td>
							</tr>
							<tr>
								<td><span class="top">Adam Sloan</span><br>Prime Flooring Brew Jays</td>
								<td><span class="top">Dave Barss</span><br>Rangers</td>
								<td><span class="top">Lonny Kirlin</span><br>Red Hot Dawgs</td>
								<td><span class="top">Warren Fisher</span><br>S+H Raiders</td>
							</tr>
							<tr>
								<td><span class="top">Craig Chamberlain</span><br>Seagate Jets</td>
								<td><span class="top">Ron Goldenberg</span><br>The Classics</td>
								<td><span class="top">Frank Filntissis</span><br>The Condo Kings Army</td>
								<td><span class="top">Patrick Belgar</span><br>The SpoT Nads</td>
							</tr>
						</tbody></table>						
					</div>
				</div>  -->
				<div class="post" v-if="dynamicPost">
          <h2 class="title" v-if="!dynamicPostData">This is a default title</h2>
          <!-- <button class="edit-btn" @click="dynamicPost1EditCLick" 
                                    v-if="userIsAuthorized && !dynamicPostData">Edit</button>
          <div v-for="(info, key) in dynamicPostData" :key="key">
            <h2 class="title">{{ info.itemName }}</h2> -->
            <button class="edit-btn" @click="dynamicPost1EditCLick" v-if="userIsAuthorized">Edit</button>
            <button class="close-btn" @click="dynamicPost1EditCLick" 
                                    v-if="userIsAuthorized && dynamicPostAuth"
                                    style="top: 44px; right: 4px;">
                                    X</button>
            <DynamicPost v-if="userIsAuthorized && dynamicPostAuth" style="top: 40px; right: 0px;"/>
            <div class="entry" v-for="(info, key) in dynamicPostData" :key="key">
              <h2 v-if="getSelectedListItem == info.itemName" class="title">{{ info.itemName }}</h2>
              <p v-if="getSelectedListItem == info.itemName">{{ info.info1 }}</p>					
              <p v-if="getSelectedListItem == info.itemName">{{ info.info2 }}</p>					
              <p v-if="getSelectedListItem == info.itemName">{{ info.info3 }}</p>					
              <p v-if="getSelectedListItem == info.itemName">{{ info.info4 }}</p>					
              <p v-if="getSelectedListItem == info.itemName">{{ info.info5 }}</p>					
              <p v-if="getSelectedListItem == info.itemName">{{ info.info6 }}</p>					
              <p v-if="getSelectedListItem == info.itemName">{{ info.info7 }}</p>					
            </div>
          </div>
				</div> 
			</div>
  </div>
</template>

<script>
import SidebarEdit1 from '../components/admin/SidebarEdit1'
import SidebarEdit2 from '../components/admin/SidebarEdit2'
import Post1 from '../components/admin/Post1'
import Post2 from '../components/admin/Post2'
import DynamicPost from '../components/admin/DynamicPost'

export default {
  components: {
    SidebarEdit1,
    SidebarEdit2,
    Post1,
    Post2,
    DynamicPost
  },
  props: {
  },
  data () {
    return {
      users: [],
      userIsAuthorized: false,
      sidebar1AdminAuth: false,
      sidebar2AdminAuth: false,
      post1Auth: false,
      post2Auth: false,
      dynamicPostAuth: false,
      sidebarList1: [],
      defaultPost: true,
      dynamicPost: false,
      dynamicPostData: [],
      getSelectedListItem: null,
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
    adminSidebar1EditClick() {
      if(this.sidebar1AdminAuth === true) {
        this.sidebar1AdminAuth = false;
      } else if(this.sidebar1AdminAuth === false) {
        this.sidebar1AdminAuth = true;
      }
    },
    adminSidebar2EditClick() {
      if(this.sidebar2AdminAuth === true) {
        this.sidebar2AdminAuth = false;
      } else if(this.sidebar2AdminAuth === false) {
        this.sidebar2AdminAuth = true;
      }
    },
    post1EditCLick() {
      if(this.post1Auth === true) {
        this.post1Auth = false;
      } else if(this.post1Auth === false) {
        this.post1Auth = true;
      }
    },
    post2EditCLick() {
      if(this.post2Auth === true) {
        this.post2Auth = false;
      } else if(this.post2Auth === false) {
        this.post2Auth = true;
      }
    },
    dynamicPost1EditCLick() {
      if(this.dynamicPostAuth === true) {
        this.dynamicPostAuth = false;
      } else if(this.dynamicPostAuth === false) {
        this.dynamicPostAuth = true;
      }
    },
    adminSidebar1Click(id) {
      console.log(id)
      firebase.database().ref('adminSidebar1List/' + id).on('value', (snapshot)=> {
        const sidebarListSelectedName = snapshot.val();
        this.getSelectedListItem = sidebarListSelectedName.itemName
      });
      if(this.defaultPost === true && this.dynamicPost === false) {
        this.defaultPost = false;
        this.dynamicPost = true;
      }
    }
  },
  created() {
    this.checkUserIsAuthorized()
    firebase.database().ref('adminSidebar1List').on('value', (snapshot)=> {
      this.sidebarList1 = snapshot.val();
    });
    firebase.database().ref('adminDynamicPost').on('value', (snapshot)=> {
      this.dynamicPostData = snapshot.val();
    });
  }
}
</script>

<style scoped>
.admin {
  background-color: #fff; 
  border-radius: 4px; 
  overflow: hidden;
  padding-bottom: 10px;
  min-height: 800px;
}
.admin .sidebar {
  font-size: 80%;
  float: left;
  padding: 20px 0 0 20px;
  width: 240px;
  text-align: left;
}
.admin .sidebar li {
  margin: 0;
  position: relative;
}
.admin .sidebar h2, .sidebar h3 {
  padding: 10px;
  font-size:17.28px;
  /* background-color: #333333; */
  background-color: #272727;
  color: #FFFFFF;
  font-family: Arial, Helvetica, sans-serif;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.admin .sidebar li ul {
  padding-bottom: 30px;
}
.admin .sidebar li ul li {
  font-size:11.52px;
  border-bottom: 1px solid #D2D4C9;
  border-left: 1px solid #D2D4C9;
  border-right: 1px solid #D2D4C9;
  padding: 10px;
  margin: 0;
  color: #787878;
}
.admin .sidebar li ul li span {
  display: block;
  padding: 0;
  padding-top: 2px;
  padding-left: 10px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  color: #787878;
}
.admin .sidebar li ul li a {
  color: #417FDA;
  text-decoration: none;
}
.admin .sidebar li ul li a:hover {
  text-decoration: underline;
}
.admin .content {
  float: right;
  width: 720px;
  padding: 20px 20px 0 0;
}
.admin .post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  position: relative;
}
.admin .post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  color: #FFFFFF;
  background-color: #272727;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.admin .post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 10px 20px 15px 20px;
  font-size: 14.4px;
  text-align: left;
}
.admin .entry p {
  margin-bottom: 14px;
}
.admin .entry a {
  text-decoration: none;
  color: #417FDA;
}
.admin .entry a:hover {
  text-decoration: underline;
}
.admin .admin_table {
  table-layout: fixed;
  width: 100%;
  border-spacing: 0px 0px;
  border: 1px solid #000000;
  color: #000000;
  text-align: center;
}
.admin .admin_table td {
  padding: 10px;
  border: 1px solid #000000;
  background-color: #FFFFFF;
}
.admin .admin_table td span.top {
  font-weight: bold;
}
.admin .sidebar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.admin .edit-btn {
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
</style>