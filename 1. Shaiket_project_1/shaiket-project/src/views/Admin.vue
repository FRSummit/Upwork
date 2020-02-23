<template>
  <!-- <div class="home" v-if="userIsAuthorized"> -->
  <div class="admin">
    <div class="sidebar">
      <ul class="sidebar-parent-ul">
        <li>
			  	<h2>League Rules</h2>
          <button class="edit-btn" @click="sidebarLeagueRuleEditClick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="sidebarLeagueRuleEditClick" 
                                  v-if="userIsAuthorized && sidebarLeagueRuleAuth"
                                  style="right: -396px;">
                                  X</button>
          <SidebarEdit1 v-if="userIsAuthorized && sidebarLeagueRuleAuth"/>
          <ul>
						<li><a href="res/docs/2019-constitution.pdf">2019 League Constitution</a></li>
						<li><a href="res/docs/2019-house-rules.pdf">2019 MMSPL House Rules</a></li>
						<li><a href="#" id="batstrigger">MMSPL Bat Policy</a></li>
						<li><a href="res/docs/2018-spn-rulebook-v2.pdf" target="_blank">SPN Rule Book</a></li>
						<li><a href="http://www.teamusa.org/USA-Softball/Play-ASA/Certified-ASA-Equipment.aspx" target="_blank">Certified ASA Equipment</a></li>
					</ul>
				</li>
        <li>
					<h2>Other Documents</h2>
          <button class="edit-btn" @click="sidebarOtherDocsEditClick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="sidebarOtherDocsEditClick" 
                                  v-if="userIsAuthorized && sidebarOtherDocsAuth"
                                  style="right: -396px;">
                                  X</button>
          <SidebarEdit2 v-if="userIsAuthorized && sidebarOtherDocsAuth"/>
					<ul>
						<li><a href="res/docs/2018-AGM-Minutes.docx">2018 AGM Minutes</a></li>
						<li><a href="res/docs/2017-AGM-Minutes.docx">2017 AGM Minutes</a></li>
						<li><a href="res/docs/2016-AGM-Minutes.docx">2016 AGM Minutes</a></li>
						<li><a href="res/docs/2015-AGM-minutes.docx">2015 AGM Minutes</a></li>
						<li><a href="res/docs/2015-draft-order.pdf">2015 Draft Order</a></li>
						<li><a href="res/docs/2014-AGM-minutes.docx">2014 AGM Minutes</a></li>
						<li><a href="res/docs/2014-draft-order.pdf">2014 Draft Order</a></li>
						<li><a href="res/docs/2013-AGM-Minutes.docx">2013 AGM Minutes</a></li>
						<li><a href="res/docs/2013-March-4-minutes.docx">2013 March 4 Meeting Minutes</a></li>
						<li><a href="res/docs/2013-draft-order.pdf">2013 Draft Order</a></li>
						<li><a href="res/docs/2012-AGM-Minutes.doc">2012 AGM Minutes</a></li>
						<li><a href="res/docs/2012-draft-order.pdf">2012 Draft Order</a></li>
						<li><a href="res/docs/2012-March-15-minutes.docx">2012 March 15 Meeting Minutes</a></li>
						<li><a href="res/docs/2012-February-15-minutes.doc">2012 February 15 Meeting Minutes</a></li>
						<li><a href="res/docs/2011-AGM-Minutes.docx">2011 AGM Minutes</a></li>
						<li><a href="res/docs/2010-AGM-Minutes.docx">2010 AGM Minutes</a></li>
						<li><a href="res/docs/2010-AGM-Presentation.pptx">2010 AGM Presentation</a></li>
						<li><a href="res/docs/2009 MMSPL AGM Minutes.doc">2009 AGM Minutes</a></li>
						<li><a href="res/docs/LCC Draft Recommendations-REVISED DRAFT-Oct 2009.pdf">2009 LLC Recommendation</a></li>
					</ul>
        </li>
      </ul>
    </div>
    <!-- Page content goes here -->
<div class="content">
				<div class="post">
					<h2 class="title">2020 League Executive</h2>
          <button class="edit-btn" @click="post1EditCLick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="post1EditCLick" 
                                  v-if="userIsAuthorized && post1Auth"
                                  style="top: 44px; right: 4px;">
                                  X</button>
          <Post1 v-if="userIsAuthorized && post1Auth" style="top: 40px; right: 0px;"/>
					<div class="entry">
						<table border="0" cellspacing="0" class="admin_table">
							<tbody><tr>
								<td><span class="top">President</span><br>Sean Bansavatar<br><span class="bottom">S+H Raiders</span><br><a href="mailto:president@mmspl.ca?subject=Message to MMSPL President">Email</a></td>
								<td><span class="top">1st Vice-President</span><br>Jay Mclean<br><span class="bottom">Beavers</span><br><a href="mailto:first-vice-president@mmspl.ca?subject=Message to MMSPL 1st Vice President">Email</a></td>
								<td><span class="top">2nd Vice-President</span><br>Matt De Kuyper<br><span class="bottom">Northtown Sox</span><br><a href="mailto:second-vice-president@mmspl.ca?subject=Message to MMSPL 2nd Vice President">Email</a></td>
							</tr>
							<tr>
								<td><span class="top">Treasurer</span><br>Mike Maskery<br><span class="bottom">Irish Holdings Shamrocks</span><br><a href="mailto:treasurer@mmspl.ca?subject=Message to MMSPL Treasurer">Email</a></td>
								<td><span class="top">Secretary</span><br>Jay Stuart<br><span class="bottom">The Condo Kings Army</span><br><a href="mailto:secretary@mmspl.ca?subject=Message to MMSPL Secretary">Email</a></td>
                                <td><span class="top">Equipment Manager</span><br>Brian Lattanville<br><span class="bottom">Pilkey Glass Pirates</span><br><a href="mailto:manager@mmspl.ca?subject=Message to MMSPL Equipment Manager">Email</a></td>
							</tr>
						</tbody></table>					
					</div>
				</div>
				<div class="post">
					<h2 class="title">2020 Executive Council - Team Representatives</h2>
          <button class="edit-btn" @click="post2EditCLick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="post2EditCLick" 
                                  v-if="userIsAuthorized && post2Auth"
                                  style="top: 44px; right: 4px;">
                                  X</button>
          <Post2 v-if="userIsAuthorized && post2Auth" style="top: 40px; right: 0px;"/>
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
				</div>
                
                <div id="batsrule" class="post" style="display:none">
                    <h2 class="title">MMSPL Bat Policy</h2>
                    <div class="entry">
                        <p>Effective this year, if your current bat does not have the following imprints on it, then it will not be accepted into our games this season and going forward.</p>

                        <p>The new bat rule requires all teams to line all bats in dugout intended for use in the game with the "thumbprint" clearly visible. The umpire will look at all bats, giving the go ahead for them to be used. No SPN approved "thumbprint" = illegal. If any bat is found before game, that bat is removed. If an illegal bat is brought into the game, that player is automatically out and his spot in the order becomes an out every time.</p>
                        
                        <p>Looking for a new bat? Ensure it follows up to date SPN guidelines and has either of the following imprints as indicated below or you will not be able to use your bat during any MMSPL league games.</p>
                        <img src="res/img/2018-spn-bat-policy.png" width="658px">
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

export default {
  components: {
    SidebarEdit1,
    SidebarEdit2,
    Post1,
    Post2
  },
  props: {
  },
  data () {
    return {
      users: [],
      userIsAuthorized: false,
      sidebarLeagueRuleAuth: false,
      sidebarOtherDocsAuth: false,
      post1Auth: false,
      post2Auth: false,
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
    sidebarLeagueRuleEditClick() {
      if(this.sidebarLeagueRuleAuth === true) {
        this.sidebarLeagueRuleAuth = false;
      } else if(this.sidebarLeagueRuleAuth === false) {
        this.sidebarLeagueRuleAuth = true;
      }
    },
    sidebarOtherDocsEditClick() {
      if(this.sidebarOtherDocsAuth === true) {
        this.sidebarOtherDocsAuth = false;
      } else if(this.sidebarOtherDocsAuth === false) {
        this.sidebarOtherDocsAuth = true;
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
    }
  },
  created() {
    this.checkUserIsAuthorized()
  }
}
</script>

<style scoped>
.admin {
  background-color: #fff; 
  border-radius: 4px; 
  overflow: hidden;
  padding-bottom: 10px;
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