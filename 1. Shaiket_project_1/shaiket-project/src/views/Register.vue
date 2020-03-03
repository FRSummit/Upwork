<template>
  <div class="register">
    <div class="sidebar">
			<ul>
				<li>
					<h3>League Information</h3>
          <button class="edit-btn" @click="sidebarLeagueInfo" v-if="userIsAuthorized">Edit</button>
          <button class="close-btn" @click="sidebarLeagueInfo" 
                                  v-if="userIsAuthorized && sidebarLeagueInfoAuthorization">
                                  X</button>
          <LeagueInfo v-if="userIsAuthorized && sidebarLeagueInfoAuthorization"/>
					<ul v-for="(info, ins) in leagueInfo" :key="ins">
            <li>{{ info.info1 }}</li>
            <li>{{ info.info2 }}</li>
            <li>{{ info.info3 }}</li>
            <li>{{ info.info4 }}</li>
            <li>{{ info.info5 }}</li>
            <li>{{ info.info6 }}</li>
            <li>{{ info.info7 }}</li>
						<!-- <li>The Markham Men's Slo-Pitch League is a semi-competitive, slo-pitch league.  We have 16 teams with 15 players each.  We play 30 regular season games between mid-May to early-September.  Included in league fees are a Charity Tournament (early-June) and a Play-off Tournament (mid-September) in which each team is guaranteed 3 games.  Players range in age from 25-60+.</li>
						<li>Our key objective is to ensure that each of the 16 teams is competitive.  We attempt to do this by running a 'draft' at the start of each season.  New players are 'rated' in various ways (self-rating and practice) and then individually drafted to a team depending on need. We do not accept team or group registrations.</li>
						<li>Players must be at least 25 years of age during the calendar year and reside within the City of Markham, or be a principle owner of a business that pays business taxes to the City of Markham.  PLEASE NOTE: players from outside of these boundaries can play should the league require additional players after March 1st.</li>                            
						<li>FEES for new players for the 2020 season are $240.  Arrange an E-transfer to League president, or Cheques should be made out to MMSPL (Markham Men's Slo-Pitch League), post-dated to March 19th, 2019 and mailed to: </li>
						<li style="bpadding-left:50px">
						  Markham Men's Slo-Pitch League <br>
              6579 Highway 7 <br>
              PO Box 77073 <br>
              Markham, ON <br>
              L3P 0C8 <br>
						</li>
						<li>New players are recruited on the basis of date of payment and attendance at the new player recruitment practices; for example, if the league requires 20 players, the first 20 to pay and attend at least one recruitment practice will be guaranteed placement on a team.</li>
						<li>If all roster spots are filled, you may join the waiting / call-up list, and are then eligible to play in games when a team requires extra players.</li>						 -->
					</ul>
				</li>
			</ul>
		</div>
    <div class="content">
      <div class="swip-tab">
        <v-tabs v-model="tab" grow class="v-tabs">
          <v-tab v-for="item in items" :key="item" class="v-tab">{{ item }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
          <v-tab-item v-for="(item, idx) in items" :key="idx">
            <v-card>
              <v-card v-if="item == 'Registration Form'">
                <div class="post">
                  <h2 class="title">Registration Form</h2>
                  <div class="entry">
                    <v-app id="inspire" class="register-v-app">
                      <v-form @submit.prevent="onSubmit">
                        <v-content class="v-content">
                          <v-container class="v-container">
                            <v-row align="center" justify="center">
                              <v-col>
                                  <!-- Personal Info -->
                                <v-card class="elevation-12 v-card-personal-info" style="width: 100%; margin: 0 auto;">
                                  <v-toolbar class="v-toolbar" color="" dark flat>
                                    <v-spacer />
                                    <v-toolbar-title>Personal Info</v-toolbar-title>
                                    <v-spacer />
                                  </v-toolbar>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="fullName">Full Name</label>
                                    <v-text-field class="field-input" v-model="fullName" id="fullName" placeholder="First and Last Name" name="fullName" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="streetAddress">Street Address</label>
                                    <v-text-field class="field-input" v-model="streetAddress" id="streetAddress" placeholder="Street Address" name="streetAddress" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="unit">Unit</label>
                                    <v-text-field class="field-input" v-model="unit" id="unit" placeholder="Unit" name="unit" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="city">City</label>
                                    <v-text-field class="field-input" v-model="city" id="city" placeholder="City" name="city" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="postalCode">Postal Code</label>
                                    <v-text-field class="field-input" v-model="postalCode" id="postalCode" placeholder="Postal Code" name="postalCode" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="homeNumber">Home Number</label>
                                    <v-text-field class="field-input" v-model="homeNumber" id="homeNumber" placeholder="Home Number" name="homeNumber" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="phone">Phone (Work)</label>
                                    <v-text-field class="field-input" v-model="phone" id="phone" placeholder="Work/Mobile Number" name="phone" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="email">E-mail</label>
                                    <v-text-field class="field-input" v-model="email" id="email" placeholder="E-mail" name="email" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="alterateEMail">Alterate E-Mail</label>
                                    <v-text-field class="field-input" v-model="alterateEMail" id="alterateEMail" placeholder="Alterate E-Mail" name="alterateEMail" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="dob">Date of Birth</label>
                                    <v-text-field class="field-input" v-model="dob" id="dob" placeholder="MM-DD-YYYY" name="dob" type="text"/>
                                  </div>
                                  <div class="personal-input-field">
                                    <label class="field-label" for="heardAboutLeague" style="width: 40%;">I heard about this league</label>
                                    <v-col class="field-input" style="padding: 0px; width: 58%">
                                      <!-- <v-select :items="itemsHearAboutLeague" placeholder="How I heard about this league" dense  v-model="heardAboutLeague" id="heardAboutLeague" name="heardAboutLeague" type="text"></v-select> -->
                        
      <select class="field-input" v-model="heardAboutLeague" 
              style="width: 100%; border-bottom: 1px solid #787878; margin: 10px 0;">
        <option v-for="(i, j) in itemsHearAboutLeague" :key="j">{{ i.hearBy }} </option>
      </select>
      <img src="../assets/images/drop-down.png" style="width: 12px;position: absolute; right: 16px; top: 16px;">
                                    
                                    </v-col>
                                  </div>
                                </v-card>
                                  <!-- Playing Experience -->
                                <v-card class="elevation-12 v-card-playing-experience" style="width: 100%; margin: 10px auto; 0">
                                  <v-toolbar class="v-toolbar" color="" dark flat>
                                    <v-spacer />
                                    <v-toolbar-title>Playing Experience</v-toolbar-title>
                                    <v-spacer />
                                  </v-toolbar>
                                  <div class="playing-experience-input-field" style="text-align: left; margin-left: 5%;">
                                    <label class="" style="color: #272727;">The highest level of ball I have played is:</label>
                                  </div>
                                  <div class="playing-experience-input-field">
                                    <label class="field-label" for="SPN_SPO_NSA_Category">SPN/SPO/NSA Category</label>
                                    <v-col class="field-input" style="padding: 0px;">
                                      <!-- <v-select :items="itemsSPN_SPO_NSA_Category" placeholder="SPN/SPO/NSA Category" dense  v-model="SPN_SPO_NSA_Category" id="SPN_SPO_NSA_Category" name="SPN_SPO_NSA_Category" type="text"></v-select> -->
                                    
                                             
      <select class="field-input" v-model="SPN_SPO_NSA_Category" 
              style="width: 100%; border-bottom: 1px solid #787878; margin: 10px 0;">
        <option v-for="(i, j) in itemsSPN_SPO_NSA_Category" :key="j">{{ i.category }} </option>
      </select>
      <img src="../assets/images/drop-down.png" style="width: 12px;position: absolute; right: 16px; top: 16px;">
                                    
                                    </v-col>
                                  </div>
                                  <div class="playing-experience-input-field">
                                    <label class="field-label" for="preferredPosition">Preferred Position</label>
                                    <v-col class="field-input" style="padding: 0px;">
                                      <!-- <v-select :items="itemsPreferredPosition" placeholder="Preferred Position" dense  v-model="preferredPosition" id="preferredPosition" name="preferredPosition" type="text"></v-select> -->
                                                                 
      <select class="field-input" v-model="preferredPosition" 
              style="width: 100%; border-bottom: 1px solid #787878; margin: 10px 0;">
        <option v-for="(i, j) in itemsPreferredPosition" :key="j">{{ i.position }} </option>
      </select>
      <img src="../assets/images/drop-down.png" style="width: 12px;position: absolute; right: 16px; top: 16px;">
                                    
                                    </v-col>
                                  </div>
                                  <div class="playing-experience-input-field">
                                    <label class="field-label" for="yearsOfExperience">Years of Experience</label>
                                    <v-col class="field-input" style="padding: 0px;">
                                      <!-- <v-select :items="itemsYearsOfExperience" placeholder="Years of Experience" dense  v-model="yearsOfExperience" id="yearsOfExperience" name="yearsOfExperience" type="text"></v-select> -->
                                                                                  
      <select class="field-input" v-model="yearsOfExperience" 
              style="width: 100%; border-bottom: 1px solid #787878; margin: 10px 0;">
        <option v-for="(i, j) in itemsYearsOfExperience" :key="j">{{ i.exp }} </option>
      </select>
      <img src="../assets/images/drop-down.png" style="width: 12px;position: absolute; right: 16px; top: 16px;">
                                    
                                    </v-col>
                                  </div>
                                  <div class="playing-experience-input-field">
                                    <label class="field-label" for="commentsOnPlayingExperience">Comments on Experience</label>
                                    <v-text-field class="field-input" v-model="commentsOnPlayingExperience" id="commentsOnPlayingExperience" placeholder="Comments on Playing Experience" name="commentsOnPlayingExperience" type="text"/>
                                  </div>
                                </v-card>
                                <!-- Pitching Experience -->
                                <v-card class="v-card-pitching-experience" style="width: 100%; margin: 10px auto; 0">
                                  <v-toolbar class="v-toolbar" color="" dark flat>
                                    <v-spacer />
                                    <v-toolbar-title>Pitching Experience</v-toolbar-title>
                                    <v-spacer />
                                  </v-toolbar>
                                  <div class="pitch-experience-input-field">
                                    <label class="field-label" for="ableToPitch">I am able to Pitch</label>
                                    <v-col class="field-input" style="padding: 0px;">
                                      <!-- <v-select :items="itemsAbleToPitch" placeholder="Select Pitch ability" dense  v-model="ableToPitch" id="ableToPitch" name="ableToPitch" type="text"></v-select> -->
                                                                                             
      <select class="field-input" v-model="ableToPitch" 
              style="width: 100%; border-bottom: 1px solid #787878; margin: 10px 0;">
        <option v-for="(i, j) in itemsAbleToPitch" :key="j">{{ i.ability }} </option>
      </select>
      <img src="../assets/images/drop-down.png" style="width: 12px;position: absolute; right: 16px; top: 16px;">
                                    </v-col>
                                  </div>
                                  <div class="pitch-experience-input-field">
                                    <label class="field-label" for="yearsPitched">Years Pitched</label>
                                    <v-col class="field-input" style="padding: 0px;">
                                      <!-- <v-select :items="itemsYearsPitched" placeholder="Years Pitched" dense  v-model="yearsPitched" id="yearsPitched" name="yearsPitched" type="text"></v-select> -->
                                    
                                                                                            
      <select class="field-input" v-model="yearsPitched" 
              style="width: 100%; border-bottom: 1px solid #787878; margin: 10px 0;">
        <option v-for="(i, j) in itemsYearsPitched" :key="j">{{ i.yrsPit }} </option>
      </select>
      <img src="../assets/images/drop-down.png" style="width: 12px;position: absolute; right: 16px; top: 16px;">
                                    </v-col>
                                  </div>
                                  <div class="pitch-experience-input-field">
                                    <label class="field-label" for="commentOnPitchingExperience">Comments on Experience</label>
                                    <v-text-field class="field-input" v-model="commentOnPitchingExperience" id="commentOnPitchingExperience" placeholder="Comment on Pitching Experience" name="commentOnPitchingExperience" type="text"/>
                                  </div>
                                </v-card>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-content>
                        <v-card-actions>
                          <v-spacer />
                          <v-btn type="submit" class="register-btn" color="primary" style="background-color: #333333 !important; border-color: #333333 !important;">Register</v-btn>
                          <v-btn @click="reset" class="reset-btn" color="primary" style="background-color: #333333 !important; border-color: #333333 !important;">Reset</v-btn>
                          <v-spacer />
                        </v-card-actions>
                      </v-form>
                    </v-app>
                  </div>
                </div>
              </v-card>
              <v-card v-if="item == '2020 Registration List'">
                <div class="post">
                  <h2 class="title">2020 Registration List</h2>
                  <div class="entry" style="padding: 12px; background: #FDFDFD;">
                    <v-simple-table dark>
                      <template v-slot:default>
                        <thead>
                          <tr>
                            <th class="text-left">Player</th>
                            <th class="text-left">Phone (Work)</th>
                            <th class="text-left">Experience</th>
                            <th v-if="userIsAuthorized" class="text-left">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, key) in regList" :key="key">
                            <td>{{ item.fullName }}</td>
                            <td>{{ item.phone }}</td>
                            <td>{{ item.yearsOfExperience }}</td>
                            <td v-if="userIsAuthorized">
                              <a href="#" class="delete-btn" @click="deletePlayer(key)" style="color: red; text-decoration: unset;">Delete</a>
                            </td>
                          </tr>
                        </tbody>
                      </template>
                    </v-simple-table>
                  </div>
                </div>
              </v-card>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </div>
		</div>
    
    <video autoplay muted loop id="myVideo">
      <source src="https://www.youtube.com/watch?v=CZp6HjD8_sE" type="video/mp4">
      Your browser does not support HTML5 video.
    </video>
  </div>
</template>

<script>
import LeagueInfo from '../components/registerEdit/LeagueInfo'

export default {
  components: {
    LeagueInfo,
  },
  data() {
    return {
      // personal Info
      userIsAuthorized: false,
      sidebarLeagueInfoAuthorization: false,
      fullName: '',
      streetAddress: '',
      unit: '',
      city: '',
      postalCode: '',
      homeNumber: '',
      phone: '',
      email: '',
      alterateEMail: '',
      dob: '',
      heardAboutLeague: '',
      // Playing Experience
      SPN_SPO_NSA_Category: '',
      preferredPosition: '',
      yearsOfExperience: '',
      commentsOnPlayingExperience: '',
      // Pitching Experience
      ableToPitch: '',
      yearsPitched: '',
      commentOnPitchingExperience: '',
      // Selection Items
      itemsHearAboutLeague: [{hearBy: 'Internet search'}, {hearBy: 'Family League Member'}, {hearBy: 'Friend'}, {hearBy: 'Facebook'}, {hearBy: 'Ads Within Community'}, {hearBy: 'Online Ad'}],
      itemsSPN_SPO_NSA_Category: [{category: 'Not Sure'}, {category: 'A'}, {category: 'B'}, {category: 'C'}, {category: 'D'}, {category: 'E / Rec'}],
      itemsPreferredPosition: [{position: 'No Preference'}, {position: 'Infield'}, {position: 'Outfield'}],
      itemsYearsOfExperience: [{exp: '0-3'}, {exp: '4-6'}, {exp: '7-9'}, {exp: '10 +'}],
      itemsAbleToPitch: [{ability: 'No'}, {ability: 'On an occasional basis'}, {ability: 'As my primary position'}],
      itemsYearsPitched: [{yrsPit: '0-3'}, {yrsPit: '4-6'}, {yrsPit: '7-9'}, {yrsPit: '10 +'}],
      tab: null,
      items: [
        'Registration Form', '2020 Registration List',
      ],
      text: 'This is the text',
      regPlayers: [
        {
          name: 'Player 1',
          note: 'Faltu',
        },
        {
          name: 'Player 2',
          note: 'Bolod',
        },
        {
          name: 'Player 3',
          note: 'haram khor',
        }
      ],
      leagueInfo: [],
      regList: []
    }
  },
  created() {
    this.checkUserIsAuthorized()
    firebase.database().ref('registerLeagueInfo').on('value', (snapshot)=> {
      this.leagueInfo = snapshot.val();
    });
    firebase.database().ref('registerLeagueRegistrationList').on('value', (snapshot)=> {
      this.regList = snapshot.val();
    });
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
    deletePlayer(id) {
      firebase.database().ref('registerLeagueRegistrationList/' + id).remove();
    },
    onSubmit() {
      const register = {
        // Personal Info
        fullName: this.fullName,
        streetAddress: this.streetAddress,
        unit: this.unit,
        city: this.city,
        postalCode: this.postalCode,
        homeNumber: this.homeNumber,
        phone: this.phone,
        email: this.email,
        alterateEMail: this.alterateEMail,
        dob: this.dob,
        heardAboutLeague: this.heardAboutLeague,
        // Playing Experience
        SPN_SPO_NSA_Category: this.SPN_SPO_NSA_Category,
        preferredPosition: this.preferredPosition,
        yearsOfExperience: this.yearsOfExperience,
        commentsOnPlayingExperience: this.commentsOnPlayingExperience,
        // Pitching Experience
        ableToPitch: this.ableToPitch,
        yearsPitched: this.yearsPitched,
        commentOnPitchingExperience: this.commentOnPitchingExperience,
      }
      firebase.database().ref('registerLeagueRegistrationList').push({
        fullName: this.fullName,
        streetAddress: this.streetAddress,
        unit: this.unit,
        city: this.city,
        postalCode: this.postalCode,
        homeNumber: this.homeNumber,
        phone: this.phone,
        email: this.email,
        alterateEMail: this.alterateEMail,
        dob: this.dob,
        heardAboutLeague: this.heardAboutLeague,
        // Playing Experience
        SPN_SPO_NSA_Category: this.SPN_SPO_NSA_Category,
        preferredPosition: this.preferredPosition,
        yearsOfExperience: this.yearsOfExperience,
        commentsOnPlayingExperience: this.commentsOnPlayingExperience,
        // Pitching Experience
        ableToPitch: this.ableToPitch,
        yearsPitched: this.yearsPitched,
        commentOnPitchingExperience: this.commentOnPitchingExperience
      })
      .then((data)=>{
        console.log(data)
        this.fullName = '',
        this.streetAddress = '',
        this.unit = '',
        this.city = '',
        this.postalCode = '',
        this.homeNumber = '',
        this.phone = '',
        this.email = '',
        this.alterateEMail = '',
        this.dob = '',
        this.heardAboutLeague = '',
        // Playing Experience
        this.SPN_SPO_NSA_Category = '',
        this.preferredPosition = '',
        this.yearsOfExperience = '',
        this.commentsOnPlayingExperience = '',
        // Pitching Experience
        this.ableToPitch = '',
        this.yearsPitched = '',
        this.commentOnPitchingExperience = ''
      })
      .catch((error)=>console.log(error))
      console.log(register);
      console.log(JSON.stringify(register));
    },
    reset() {
      console.log('reset');
      // Personal Info
      this.fullName = '',
      this.streetAddress = '',
      this.unit = '',
      this.city = '',
      this.postalCode = '',
      this.homeNumber = '',
      this.phone = '',
      this.email = '',
      this.alterateEMail = '',
      this.dob = '',
      this.heardAboutLeague = '',
      // Playing Experience
      this.SPN_SPO_NSA_Category = '',
      this.preferredPosition = '',
      this.yearsOfExperience = '',
      this.commentsOnPlayingExperience = '',
      // Pitching Experience
      this.ableToPitch = '',
      this.yearsPitched = '',
      this.commentOnPitchingExperience = ''
    },
    sidebarLeagueInfo() {
      if(this.sidebarLeagueInfoAuthorization === true) {
        this.sidebarLeagueInfoAuthorization = false;
      } else if(this.sidebarLeagueInfoAuthorization === false) {
        this.sidebarLeagueInfoAuthorization = true;
      }
    }
  }
}
</script>

<style stcope>
.register {
  background-color: #fff; 
  border-radius: 4px; 
  /* overflow: hidden; */
  overflow: overlay;
  padding-bottom: 10px;
}
.register .sidebar {
  width: 440px;
  font-size: 90%;
  padding: 20px 0 0 20px;
  text-align: left;
  float: left;
}
.register .sidebar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.register .sidebar li {
  margin: 0;
  padding: 0;
  position: relative;
}
.register .sidebar h2,
.register .sidebar h3 {
  padding: 10px;
  /* background-color: #333333; */
  background-color: #272727;
  color: #FFFFFF;
  font-size:15.1632px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.register .sidebar li ul {
  padding-bottom: 30px;
}
.register .sidebar li li {
  border-bottom:none;
  border-left: 1px solid #D2D4C9;
  border-right: 1px solid #D2D4C9;
  padding: 10px !important;
  /* color: #787878; */
  color: #222;
  font-size: 12.96px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}
.register .sidebar li li:last-child {
  border-bottom: 1px solid #D2D4C9;
}
.register .content {
  float: right;
  width: 520px;
  padding: 20px 20px 0 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #787878;
}
.register form {
  margin: 0;
  padding: 0;
}
.register .post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
}
.register .post .menu {
  background-color: #EBEBEB;
}
.register .menu {
  height: 50px;
  margin: 0 auto;
  padding: 0;
}
.register .menu ul {
  margin: 0;
  padding: 0;
  padding-left: 10px;
  list-style: none;
}
.register .menu li {
  float: left;
  height: 50px;
}
.register .post .menu a:hover,
.register .post .menu li.current a {
  color: #FFFFFF;
  font-size:14.4px;
}
.register .menu a:hover, .menu li.current a {
  background-color: #AA1111;
}
.register .post .menu a {
  color: #000000;
  font-weight: bold;
  border: 1px solid #D2D4C9;
  font-size:14.4px;
}
.register .menu a {
  display: block;
  margin-top: 10px;
  margin-right: 5px;
  padding: 7px 18px;
  text-decoration: none;
}
.register .post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  background-color: #222;
  /* color: #000000; */
  color: #FFFFFF;
  text-align: left;
  font-size:21.6px;
}
.register .post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 0;
}
.register .v-container {
  padding: 0 10px;
}
.register .v-toolbar {
  height: auto !important;
}
.register .v-toolbar__content {
  height: auto !important;
}
.register .v-toolbar__title {
  font-size: 14px;
}
.register .register-btn, 
.register .reset-btn {
  width: 30%;
}
.register .personal-input-field, 
.register .playing-experience-input-field, 
.register .pitch-experience-input-field {
  position: relative;
  color: #787878;
}
.register .field-label {
  display: inline-block;
  width: 30%;
  text-align: left;
  font-size: 14px;
  text-align: right;
  padding-right: 20px;
  color: #272727;
}
.register .v-card-playing-experience .field-label,
.register .v-card-pitching-experience .field-label {
  width: 40%;
}
.register .field-input {
  display: inline-block;
  width: 68%;
  font-size: 14px;
  padding: 0;
  margin: 0;
}
.register .v-card-playing-experience .field-input,
.register .v-card-pitching-experience .field-input {
  width: 58%;
}
.register .v-input__slot {
  margin: 0;
}
.register .v-card__actions > .v-btn.v-btn {
    padding: 0 8px;
    background-color: #1976d2 !important;
    border-color: #1976d2 !important;
    font-weight: bold;
    font-family: Roboto, sans-serif;
}
.register .v-data-table th, 
.register .v-data-table td {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14.4px !important;
  color: #FFFFFF !important;
  font-weight: normal;
  padding: 10px 0 !important;
  height: auto !important;
}
.register .v-tab.v-tab {
  color: #222 !important;
}
.register .v-tab.v-tab:hover {
  color: #FFFFFF !important;
}
.register .v-tab.v-tab.v-tab--active {
  color: #FFFFFF !important;
}
.register .v-slide-group__content {
  border: 2px solid #787878;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.register .edit-btn {
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
  top: 2px;
  right: -500px; 
  z-index: 12; 
  padding: 0px 4px; 
  background: red;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  border: 2px solid #FFFFFF;
  border-radius: 6px;
} 
</style>