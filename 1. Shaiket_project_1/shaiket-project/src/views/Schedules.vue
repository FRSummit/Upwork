<template>
  <!-- <div class="home" v-if="userIsAuthorized"> -->
  <div class="schedules">
    <div class="sidebar">
      <ul class="sidebar-parent-ul">
        <li class="sidebar-parent-li">
          <h2 class="sidebar-text-important-dates">By Team</h2>
          <ul class="sidebar-child-ul">
            <li><a href="schedule-acepoolsmoose.html">Ace Pools Moose</a></li>
            <li><a href="schedule-derekhoughtoncentury21.html">Derek Houghton Century 21</a></li>
            <li><a href="schedule-duchessbeavers.html">Duchess Beavers</a></li>
            <li><a href="schedule-irishholdingsshamrocks.html">Irish Holdings Shamrocks</a></li>
            <li><a href="schedule-markhamknights.html">Markham Knights</a></li>
            <li><a href="schedule-northtownsox.html">Northtown Sox</a></li>
            <li><a href="schedule-okbraves.html">OK Braves</a></li>
            <li><a href="schedule-pilkeyglasspirates.html">Pilkey Glass Pirates</a></li>
            <li><a href="schedule-primeflooringbrewjays.html">Prime Flooring Brew Jays</a></li>
            <li><a href="schedule-rangers.html">Rangers</a></li>
            <li><a href="schedule-redhotdawgs.html">Red Hot Dawgs</a></li>
            <li><a href="schedule-shraiders.html">S+H Raiders</a></li>
            <li><a href="schedule-seagatejets.html">Seagate Jets</a></li>
            <li><a href="schedule-theclassics.html">The Classics</a></li>
            <li><a href="schedule-thecondokingsarmy.html">The Condo Kings Army</a></li>
            <li><a href="schedule-thespotnads.html">The SpoT Nads</a></li>
					</ul>
        </li>
      </ul>
    </div>
    <!-- Page content goes here -->
    <div class="content">
			<div class="post">
				<h2 class="title">2019 Regular Season</h2>
				<div class="entry">
					<p>Click on your team's name in the left column to view your complete schedule for 2018</p>
					Download Master Schedule: <a href="res/docs/master-schedule.csv">as .csv (for Excel)</a> | <a href="res/docs/master-schedule.ics">as .ics (for Calendar)</a>
				</div>
			</div>
			<div class="post">
				<h2 class="title">2019 Charity Tournament</h2>
				<div class="entry">
					<p>The Charity Tournament is scheduled for May 28 - June 2, 2019.</p>
          <a href="schedule-2019-charity.html">Full schedule and results.</a>
				</div>
			</div>				
			<div class="post">
	  		<h2 class="title">2019 Year-End Tournament</h2>
				<div class="entry">
					<p>The Year-End Tournament is scheduled for September 12 - 15, 2019.</p>
					<a href="schedule-2019-final.html">Full schedule and results.</a>
				</div>
			</div>						
		</div>
  </div>
</template>

<script>
export default {
  props: {
  },
  data () {
    return {
      users: [],
      userIsAuthorized: false,
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
    }
  },
  created() {
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
}
.schedules .sidebar h2,
.schedules .sidebar h3 {
  padding: 10px;
  font-size:17.28px;
  background-color: #333333;
  color: #FFFFFF;
  font-family: Arial, Helvetica, sans-serif;
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
}
.schedules .sidebar li ul li a:hover {
  text-decoration: underline;
}
.schedules .content {
  float: right;
  width: 720px;
  padding: 20px 20px 0 0;
}
.schedules .post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
}
.schedules .post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  color: #000000;
}
.schedules .post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 10px 20px 15px 20px;
  font-size: 14.4px;
  text-align: left;
  color: #787878;
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
</style>