<template>
  <!-- <div class="home" v-if="userIsAuthorized"> -->
  <div class="home">
    <div class="sidebar">
      <ul class="sidebar-parent-ul">
        <li class="sidebar-parent-li">
          <h2 class="sidebar-text-important-dates">Important Dates</h2>
          <ul class="sidebar-child-ul">
						<li>February 10, 2020<span>Captain's Meeting</span></li>
						<li>March 18, 2020<span>Captain's Meeting (Rosters Due)</span></li>
						<li>April TBD, 2020<span>Rookie Evaluation 1</span></li>
						<li>April TBD, 2020<span>Rookie Evaluation 2</span></li>
						<li>April TBD, 2020<span>Rookie Evaluation - Rain Date</span></li>
            <li>April 27, 2020<span>Entry Draft</span></li>
						<li>May 12, 2020<span>Opening Night</span></li>
            <li>June 2 - June 7, 2020<span>Charity Tournament</span></li>
            <li>September 10-13, 2020<span>McGregor Playoff Tournament</span></li>
            <li>Late 2020<span>Awards Banquet</span></li>
						<li>Late 2020<span>Annual General Meeting</span></li>
					</ul>
        </li>
        <!-- another li -->
        <li class="sidebar-parent-li">
					<h2 class="sidebar-text-important-dates">2019 Champions</h2>
					<ul class="sidebar-child-ul">
						<li>Regular Season Champion<span>Derek Houghton Century 21</span></li>
						<li>Year End Tournament Champion<span>Derek Houghton Century 21</span></li>
						<li>Year End Tournament Finalist<span>OK Braves</span></li>
						<li>Charity Tournament Champion<span>The Classics</span></li>
						<li>Charity Tournament Finalist<span>Red Hot Dawgs</span></li>
					</ul>
				</li>
        <!-- another li -->
        <li class="sidebar-parent-li">
					<h2 class="sidebar-text-important-dates">2019 Award Winners</h2>
					<ul class="sidebar-child-ul">
						<li>The Kirkby Award<span>Nick Stewart</span></li>
						<li>The Higgins-Sale Award<span>Scott Jackson</span></li>
						<li>The Steve Bull Award<span>Sunil Vaidya</span></li>
					</ul>
				</li>
        <!-- last li -->
        <li class="sidebar-parent-li">
					<h2 class="sidebar-text-important-dates">Ballparks</h2>
					<ul class="sidebar-child-ul">
						<li><a target="_blank" href="http://g.co/maps/56h2p">Centennial Park</a><span>Bullock and McCowan</span></li>
						<li><a target="_blank" href="http://g.co/maps/74aza">Mintleaf Park</a><span>Fincham and Wootten Way N.</span></li>
					</ul>
				</li>
      </ul>
    </div>
    <!-- Page content goes here -->
    <div class="content">
      <div class="post">
        <h3 class="title">2020 Season Registration is open!</h3>
        <div class="entry">
          <p>There are still spots available to play in the 2020 season</p>
          <p><a href="register.html">Click here to register now </a></p>
        </div>
      </div>
      <!-- another post -->
      <div class="post">
				<h3 class="title">2019 Jim McGregor Tournament</h3>
				<div class="entry">
					<p>Congratulations to all for another exciting finals tournament!</p>
					<p class="pictureframe">
						<img src="../assets/images/2019-finals-champions.jpg" width="290px" alt="2019 Final Tournament Champions">
						<span>Derek Houghton Century 21</span>
						<span>2019 Final Tournament Champions</span>
					</p>
					<p class="pictureframe" style="margin-left:10px">
						<img src="../assets/images/2019-finals-finalists.jpg" width="290px" alt="2019 Final Tournament Finalists">
						<span>OK Braves</span>
						<span>2019 Final Tournament Finalists</span>
					</p>
          <br style="clear:both;">
				</div>					
				<div class="entry" style="text-align:center;">
					<a href="schedule-2019-final.html">Click here for the tournament schedule and results.</a>
				</div>			
			</div>
      <!-- Post 3 -->
      <div class="post">
				<h3 class="title">2019 Regular Season Champions</h3>
				<div class="entry">
					<p>Congratulations to Derek Houghton Century 21 for winning the 2019 President's Trophy.</p>
					<p class="pictureframe full-width">
						<img src="../assets/images/2019-finals-champions.jpg" width="630" alt="2019 Regular Season Champions">
						<span>2019 Regular Season Champions - Derek Houghton Century 21</span>
					</p>						
				</div>					
			</div>
      <!-- Post 4 -->
      <div class="post">
				<h3 class="title">2019 Charity Tournament</h3>
				<div class="entry">
					<p>Congratulations to all for another exciting charity tournament!</p>
					<p class="pictureframe" style="height: 257.7px;">
						<img src="../assets/images/2019-charity-champions.jpg" width="290px" alt="2019 Charity Tournament Champions">
						<span>The Classics</span>
						<span>2019 Charity Tournament Champions</span>
					</p>
					<p class="pictureframe" style="margin-left:10px; height: 257.7px;">
						<img src="../assets/images/2019-charity-finalists.jpg" width="290px" alt="2019 Charity Tournament Finalists">
						<span>Red Hot Dawgs</span>
						<span>2019 Charity Tournament Finalists</span>
					</p>
          <br style="clear:both;">
          <p><strong>Charity Clothing Drive</strong></p>
          <p>We raised 298 donated bags (4590 lbs!) of clothing and 38 misc items for the donations drive.</p>
          <p>Special thanks again to the Irish Holdings Shamrocks for their insane donation.  They've done it again with ease! </p>
          <p><strong>Home Run Derby</strong></p>
          <p>Congratulations to Rob Li of S+H Raiders, the 2019 Home Run Derby Champion!</p>
				</div>					
				<div class="entry" style="text-align:center;">
					<a href="schedule-2019-charity.html">Click here for the tournament results.</a>
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
    this.checkUserIsAuthorized();
    firebase.database().ref('users').on('value', (snapshot)=> {
      this.users = snapshot.val();
      console.log('snapshot : ');
      console.log(snapshot.val());
      console.log('Users : ');
      console.log(this.users);
    });
  }
}
</script>

<style scoped>
.home {
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  padding-bottom: 10px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 0 10px;
}
a {
  color: #42b983;
}
.home .v-card {
  background: #c2d0de;
}
.home .table-head {
  background: #b1cde8;
}
.home .table-body {
  background: #e3f0fd;
}
.sidebar {
  font-size: 80%;
  float: left;
  padding: 20px 0 0 20px;
  /* width: 220px; */
  width: 240px;
  text-align: left;
}
.sidebar-parent-ul {
}
.sidebar-parent-li {
  margin: 0;
}
.sidebar h2, .sidebar h3 {
  padding: 10px;
  font-size:17.28px;
  background-color: #333333;
  color: #FFFFFF;
  font-family: Arial, Helvetica, sans-serif;
}
.sidebar-child-ul {
  padding-bottom: 10px;
}
.sidebar-child-ul li {
  font-size:11.52px;
  border-bottom: 1px solid #D2D4C9;
  border-left: 1px solid #D2D4C9;
  border-right: 1px solid #D2D4C9;
  padding: 10px;
  margin: 0;
  color: #787878;
}
.sidebar-child-ul li span {
  display: block;
  padding: 0;
  padding-top: 2px;
  padding-left: 10px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  color: #787878;
}
.sidebar-child-ul li a {
  color: #417FDA;
  text-decoration: none;
}
.content {
  float: right;
  /* width: 700px; */
  width: 720px;
  padding: 20px 20px 0 0;
}
.post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
  text-align: left;
}
.post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  color: #000000;
  margin: 0;
  font-size:16.848px;
  font-family: Arial, Helvetica, sans-serif;
}
.post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 10px 20px 15px 20px;
  font-size:14.4px;
  color: #787878;
}
.post .entry p {
  margin-bottom: 14.4px;
}
.post .entry a {
  color: #417FDA;
  text-decoration: none;
}
.pictureframe {
  background-color: #AA1111;
  padding: 10px;
  text-align: center;
  width: 320px;
  display: inline-block;
  /* float: left; */
  height: 212.92px;
  vertical-align: bottom;
}
.pictureframe.full-width {
  width: 100%;
  height: 352px;
}
.pictureframe img {
  width: 290px; 
}
.pictureframe.full-width img {
  width: 630px;
}
.pictureframe span {
  display: block;
  color: #FFFFFF;
  padding-top: 8px;
  font-weight: bold;
}
</style>