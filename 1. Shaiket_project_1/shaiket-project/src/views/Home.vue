<template>
  <!-- <div class="home" v-if="userIsAuthorized"> -->
  <div class="home">
    <div class="sidebar">
      <ul class="sidebar-parent-ul">
        <!-- Important Dates -->
        <li class="sidebar-parent-li">
          <h2 class="sidebar-text-important-dates">{{ sidebarImportantDatesTitle }}</h2>
          <button class="edit-btn" @click="sidebarImpDatesEditClick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="sidebarImpDatesEditClick" 
                                  v-if="userIsAuthorized && sidebarImpDateAuthorization">
                                  X</button>
          <HomeEditImportantDates v-if="userIsAuthorized && sidebarImpDateAuthorization" 
                                  @dateAdded="addDateFromHomeEditImpDates"/>
          <ul class="sidebar-child-ul">
						<li v-for="(imp, i) in sidebarImportantDates" :key="i">
              {{ imp.date }}
              <span>{{ imp.description }}</span>
            </li>
					</ul>
        </li>
        <!-- Champions -->
        <li class="sidebar-parent-li">
					<h2 class="sidebar-text-important-dates">{{ sidebarChampionsTitle }}</h2>
          <button class="edit-btn" @click="sidebarChampionsEditClick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="sidebarChampionsEditClick" 
                                  v-if="userIsAuthorized && sidebarChampionsAuthorization">
                                  X</button>
          <HomeEditChampions v-if="userIsAuthorized && sidebarChampionsAuthorization"/>
					<ul class="sidebar-child-ul">
						<li v-for="(champions, i) in sidebarChampions" :key="i">
              {{ champions.name }}
              <span>{{ champions.description }}</span>
            </li>
					</ul>
				</li>
        <!-- Award WInners -->
        <li class="sidebar-parent-li">
					<h2 class="sidebar-text-important-dates">{{ sidebarAwardWinnersTitle }}</h2>
          <button class="edit-btn" @click="sidebarAwardEditClick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="sidebarAwardEditClick" 
                                  v-if="userIsAuthorized && sidebarAwardWinnerAuthorization">
                                  X</button>
          <HomeEditAwardWinners v-if="userIsAuthorized && sidebarAwardWinnerAuthorization"/>
					<ul class="sidebar-child-ul">
						<li v-for="(award, i) in sidebarAwardWinners" :key="i">
              {{ award.award }}
              <span>{{ award.name }}</span>
            </li>
					</ul>
				</li>
        <!-- Ball Parks -->
        <li class="sidebar-parent-li">
					<h2 class="sidebar-text-important-dates">{{ sidebarBallparksTitle }}</h2>
          <button class="edit-btn" @click="sidebarBallparksEditClick" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="sidebarBallparksEditClick" 
                                  v-if="userIsAuthorized && sidebarBallParksAuthorization">
                                  X</button>
          <HomeEditBallParks v-if="userIsAuthorized && sidebarBallParksAuthorization"/>
					<ul class="sidebar-child-ul">
						<li v-for="(ballparks, i) in sidebarBallparks" :key="i">
              <a target="_blank" href="http://g.co/maps/56h2p">{{ ballparks.name }}</a>
              <span>{{ ballparks.address }}</span>
            </li>
					</ul>
				</li>
      </ul>
    </div>
    <!-- Page content goes here -->
    <div class="content">
      <div class="post">
        <h3 class="title">{{ post1_title }}</h3>
        <button class="edit-btn" @click="post1EditClick" style="top: 10px;" v-if="userIsAuthorized">Edit</button>
        <div class="entry">
          <p>{{ post1_description }}</p>
          <p><a :href="post1_url" target="_blank">{{ post1_url_text }} </a></p>
        </div>
      </div>
      <!-- another post -->
      <div class="post">
				<h3 class="title">{{ post2_title }}</h3>
        <button class="edit-btn" @click="post2EditClick" style="top: 10px;" v-if="userIsAuthorized">Edit</button>
				<div class="entry">
					<p>{{ post2_description }}</p>
					<p class="pictureframe" v-for="(post2, i) in post2_img" :key="i">
						<img :src="post2.img_src" width="290px" height="140px" alt="2019 Final Tournament Finalists">
						<span>{{ post2.img_desc1 }}</span>
						<span>{{ post2.img_desc2 }}</span>
					</p>
          <br style="clear:both;">
				</div>					
				<div class="entry" style="text-align:center;">
					<a :href="post2_url" target="_blank">{{ post2_url_text }}</a>
				</div>			
			</div>
      <!-- Post 3 -->
      <div class="post">
				<h3 class="title">{{ post3_title }}</h3>
        <button class="edit-btn" @click="post3EditClick" style="top: 10px;" v-if="userIsAuthorized">Edit</button>
				<div class="entry">
					<p>{{ post3_description }}</p>
					<p class="pictureframe full-width" v-for="(post3, i) in post3_img" :key="i">
						<img :src="post3.img_src" width="630" height="306px" alt="2019 Regular Season Champions">
						<span>{{ post3.img_desc_1 }}</span>
					</p>						
				</div>					
			</div>
      <!-- Post 4 -->
      <div class="post">
				<h3 class="title">{{ post4_title }}</h3>
        <button class="edit-btn" @click="post4EditClick" style="top: 10px;" v-if="userIsAuthorized">Edit</button>
				<div class="entry">
					<p>{{ post4_description }}</p>
					<p class="pictureframe" v-for="(post4, i) in post4_img" :key="i" style="height: 257px">
						<img :src="post4.img_src" width="290px" height="186px" alt="2019 Final Tournament Finalists">
						<span>{{ post4.img_desc1 }}</span>
						<span>{{ post4.img_desc2 }}</span>
					</p>
          <br style="clear:both;">
          <p><strong>{{ post4_subtitle1 }}</strong></p>
          <p>{{ post4_subtitle1_desc1 }}</p>
          <p>{{ post4_subtitle1_desc2 }}</p>
          <p><strong>{{ post4_subtitle2 }}</strong></p>
          <p>{{ post4_subtitle2_desc }}</p>
				</div>					
				<div class="entry" style="text-align:center;">
					<a :href="post4_url" target="_blank">{{ post4_url_text }}</a>
				</div>			
			</div>
    </div>
  </div>
</template>

<script>
import HomeEditImportantDates from  '../components/HomeEditImportantDates'
import HomeEditChampions from  '../components/HomeEditChampions'
import HomeEditAwardWinners from  '../components/HomeEditAwardWinners'
import HomeEditBallParks from  '../components/HomeEditBallParks'

export default {
  components: {
    HomeEditImportantDates,
    HomeEditChampions,
    HomeEditAwardWinners,
    HomeEditBallParks
  },
  props: {
  },
  data () {
    return {
      users: [],
      userIsAuthorized: false,
      sidebarImpDateAuthorization: false,
      sidebarImportantDatesTitle: 'Important Dates',
      sidebarImportantDates: [
                {date: 'February 10, 2020', description: 'Captain\'s Meeting'},
                {date: 'March 18, 2020', description: 'Captain\'s Meeting (Rosters Due)'},
                {date: 'April TBD, 2020', description: 'Rookie Evaluation 1'},
                {date: 'April TBD, 2020', description: 'Rookie Evaluation 2'},
                {date: 'April TBD, 2020', description: 'Rookie Evaluation - Rain Date'},
                {date: 'April 27, 2020', description: 'Entry Draft'},
                {date: 'May 12, 2020', description: 'Opening Night'},
                {date: 'June 2 - June 7, 2020', description: 'Charity Tournament'},
                {date: 'September 10-13, 2020', description: 'McGregor Playoff Tournament'},
                {date: 'Late 2020', description: 'Awards Banquet'},
                {date: 'Late 2020', description: 'Annual General Meeting'}
              ],
      sidebarChampionsAuthorization: false,
      sidebarChampionsTitle: '2019 Champions',
      sidebarChampions: [
                {name: 'Regular Season Champion', description: 'Derek Houghton Century 21'},
                {name: 'Year End Tournament Champion', description: 'Derek Houghton Century 21'},
                {name: 'Year End Tournament Finalist', description: 'OK Braves'},
                {name: 'Charity Tournament Champion', description: 'The Classics'},
                {name: 'Charity Tournament Finalist', description: 'Red Hot Dawgs'},
              ],
      sidebarAwardWinnerAuthorization: false,
      sidebarAwardWinnersTitle: '2019 Award Winners',
      sidebarAwardWinners: [
                {award: 'The Kirkby Award', name: 'Nick Stewart'},
                {award: 'The Higgins-Sale Award', name: 'Scott Jackson'},
                {award: 'The Steve Bull Award', name: 'Sunil Vaidya'},
              ],
      sidebarBallParksAuthorization: false,
      sidebarBallparksTitle: 'Ballparks',
      sidebarBallparks: [
                {name: 'Centennial Park', address: 'Bullock and McCowan'},
                {name: 'Mintleaf Park', address: 'Fincham and Wootten Way N.'},
              ],
      post1_title: '2020 SEASON REGISTRATION IS OPEN!',
      post1_description: 'There are still spots available to play in the 2020 season',
      post1_url_text: 'Click here to register now',
      post1_url: '/signup',

      post2_title: '2019 JIM MCGREGOR TOURNAMENT',
      post2_description: 'Congratulations to all for another exciting finals tournament!',
      post2_img: [
                {img_src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM3Njd9&w=1000&q=80', img_desc1: 'Derek Houghton Century 21', img_desc2: '2019 Final Tournament Champions'},
                {img_src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM3Njd9&w=1000&q=80', img_desc1: 'OK Braves', img_desc2: '2019 Final Tournament Finalists'},
              ],
      post2_url_text: 'Click here for the tournament schedule and results.',
      post2_url: '/signup',

      post3_title: '2019 REGULAR SEASON CHAMPIONS',
      post3_description: 'Congratulations to Derek Houghton Century 21 for winning the 2019 President\'s Trophy.',
      post3_img: [
                {img_src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM3Njd9&w=1000&q=80', img_desc_1: '2019 Regular Season Champions - Derek Houghton Century 21'},
              ],

      post4_title: '2019 CHARITY TOURNAMENT',
      post4_description: 'Congratulations to all for another exciting charity tournament!',
      post4_img: [
                {img_src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM3Njd9&w=1000&q=80', img_desc1: 'The Classics', img_desc2: '2019 Charity Tournament Champions'},
                {img_src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM3Njd9&w=1000&q=80', img_desc1: 'Red Hot Dawgs', img_desc2: '2019 Charity Tournament Finalists'},
              ],
      post4_subtitle1: 'Charity Clothing Drive',
      post4_subtitle1_desc1: 'We raised 298 donated bags (4590 lbs!) of clothing and 38 misc items for the donations drive.',
      post4_subtitle1_desc2: 'Special thanks again to the Irish Holdings Shamrocks for their insane donation. They\'ve done it again with ease!',
      post4_subtitle2: 'Home Run Derby',
      post4_subtitle2_desc: 'Congratulations to Rob Li of S+H Raiders, the 2019 Home Run Derby Champion!',
      post4_url_text: 'Click here for the tournament results.',
      post4_url: '/signup',
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
    // Important Dates
    sidebarImpDatesEditClick() {
      console.log('sidebarImpDates working' + this.sidebarImpDateAuthorization);
      if(this.sidebarImpDateAuthorization === true) {
        this.sidebarImpDateAuthorization = false;
      } else if(this.sidebarImpDateAuthorization === false) {
        this.sidebarImpDateAuthorization = true;
      }
    },
    addDateFromHomeEditImpDates(date) {
      console.log('added date : ' + date.date + ' ' + date.description);
      this.sidebarImportantDates.push({date: date.date, details: date.description})
    },
    // Champions
    sidebarChampionsEditClick() {
      console.log('sidebarChampions working' + this.sidebarChampionsAuthorization);
      if(this.sidebarChampionsAuthorization === true) {
        this.sidebarChampionsAuthorization = false;
      } else if(this.sidebarChampionsAuthorization === false) {
        this.sidebarChampionsAuthorization = true;
      }
    },
    // Award Winners
    sidebarAwardEditClick() {
      console.log('sidebarAwardWinners working' + this.sidebarAwardWinnerAuthorization);
      if(this.sidebarAwardWinnerAuthorization === true) {
        this.sidebarAwardWinnerAuthorization = false;
      } else if(this.sidebarAwardWinnerAuthorization === false) {
        this.sidebarAwardWinnerAuthorization = true;
      }
    },
    // Ballparks
    sidebarBallparksEditClick() {
      console.log('sidebarBallParks working' + this.sidebarBallParksAuthorization);
      if(this.sidebarBallParksAuthorization === true) {
        this.sidebarBallParksAuthorization = false;
      } else if(this.sidebarBallParksAuthorization === false) {
        this.sidebarBallParksAuthorization = true;
      }
    },
    post1EditClick() {
      console.log('post1EditClick click')
    },
    post2EditClick() {
      console.log('post2EditClick click')
    },
    post3EditClick() {
      console.log('post3EditClick click')
    },
    post4EditClick() {
      console.log('post4EditClick click')
    }
  },
  created() {
    this.checkUserIsAuthorized();
    // sidebar important dates
    firebase.database().ref('homeSidebarImportantDates').on('value', (snapshot)=> {
      this.sidebarImportantDates = snapshot.val();
    });
    // Sidebar Champions
    firebase.database().ref('homeSidebarChampions').on('value', (snapshot)=> {
      this.sidebarChampions = snapshot.val();
    });
    // Sidebar Award Winners
    firebase.database().ref('homeSidebarAwardWinner').on('value', (snapshot)=> {
      this.sidebarAwardWinners = snapshot.val();
    });
    // Sidebar Ball Parks
    firebase.database().ref('homeSidebarBallParks').on('value', (snapshot)=> {
      this.sidebarBallparks = snapshot.val();
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
.home h3 {
  margin: 40px 0 0;
}
.home ul {
  list-style-type: none;
  padding: 0;

}
.home li {
  margin: 0 10px;
}
.home a {
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
.home .sidebar {
  font-size: 80%;
  float: left;
  padding: 20px 0 0 20px;
  /* width: 220px; */
  width: 240px;
  text-align: left;
}
.home .sidebar-parent-li {
  margin: 0;
  position: relative;
}
.home .sidebar h2, .sidebar h3 {
  padding: 10px;
  font-size:17.28px;
  background-color: #272727;
  color: #FFFFFF;
  font-family: Arial, Helvetica, sans-serif;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.home .sidebar-child-ul {
  padding-bottom: 10px;
}
.home .sidebar-child-ul li {
  font-size:11.52px;
  border-bottom: 1px solid #D2D4C9;
  border-left: 1px solid #D2D4C9;
  border-right: 1px solid #D2D4C9;
  padding: 10px;
  margin: 0;
  /* color: #787878; */
  color: #222;
}
.home .sidebar-child-ul li:last-child {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.home .sidebar-child-ul li span {
  display: block;
  padding: 0;
  padding-top: 2px;
  padding-left: 10px;
  font-style: italic;
  font-family: Arial, Helvetica, sans-serif;
  color: #787878;
  /* color: #222; */
}
.home .sidebar-child-ul li a {
  color: #003e9a;
  text-decoration: none;
}
.home .content {
  float: right;
  /* width: 700px; */
  width: 720px;
  padding: 20px 20px 0 0;
}
.home .post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
  text-align: left;
  border-radius: 6px;
  position: relative;
}
.home .post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  background-color: #272727;
  color: #FFFFFF;
  margin: 0;
  font-size:16.848px;
  font-family: Arial, Helvetica, sans-serif;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.home .post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 10px 20px 15px 20px;
  font-size:14.4px;
  /* color: #787878; */
  color: #222;
}
.home .post .entry p {
  margin-bottom: 14.4px;
}
.home .post .entry a {
  color: #003e9a;
  text-decoration: none;
}
.home .pictureframe {
  /* background-color: #AA1111; */
  background-color: #272727;
  padding: 10px;
  text-align: center;
  width: 320px;
  display: inline-block;
  /* float: left; */
  height: 212.92px;
  vertical-align: bottom;
  border-radius: 6px;
}
.home .pictureframe.full-width {
  width: 100%;
  height: 352px;
}
.home .pictureframe img {
  width: 290px; 
}
.home .pictureframe.full-width img {
  width: 630px;
}
.home .pictureframe span {
  display: block;
  color: #FFFFFF;
  padding-top: 8px;
  font-weight: bold;
}
.home .pictureframe:nth-child(odd) {
  margin-left: 10px;
}
.home .edit-btn {
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
  right: -395px; 
  z-index: 10; 
  padding: 0px 4px; 
  background: red;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid #FFFFFF;
  border-radius: 6px;
}
</style>