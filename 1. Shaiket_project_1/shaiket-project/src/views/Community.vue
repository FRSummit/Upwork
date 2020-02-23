<template>
  <div class="community">
    <div class="content">
      <div class="post">
        <!-- <h2 class="title">SEND AN EMAIL TO MMSPL</h2> -->
        <div class="entry">
          <v-app id="inspire" class="register-v-app">
            <v-content class="v-content">
              <v-container class="v-container">
                <v-card class="contact-v-card" style="width: 100%; margin-bottom: 10px;">
                  <v-toolbar class="v-toolbar" color="" dark flat>
                    <v-toolbar-title>MMSPL COMMUNITY</v-toolbar-title>
                    <v-spacer />
                  </v-toolbar>
                  <button class="edit-btn" @click="communityPost1EditClick" v-if="userIsAuthorized">Edit</button>
                  <button class="close-btn" @click="communityPost1EditClick" 
                                          v-if="userIsAuthorized && communityPost1Auth"
                                          style="top: 44px; right: 4px;">
                                          X</button>
                  <CommunityPost1Edit v-if="userIsAuthorized && communityPost1Auth"/>
                  <div class="entry">
                    <p style="text-align:center; font-weight:bold;">WE ARE LOOKING TO MAKE NETWORKING EASIER WITHIN THE MMSPL!</p>
                    <p style="text-align:center; font-weight:bold;">THE MMSPL IS NOW OFFERING LEAGUE MEMBERS TO PROMOTE THEIR BUSINESSES/SERVICES!!</p>
                    <p style="text-align:center; font-weight:bold;">GREAT WAY FOR EXTRA INCOME</p>
                    <p>FOR A SMALL LEAGUE DONATION OF $100, YOU CAN PROMOTE YOUR SERVICES OR YOUR BUSINESS/EMPLOYER FOR THE ENTIRE YEAR TO THE MEMBERS OF THE LEAGUE.</p>
                    <p>Please create a small PDF flyer to advertise your services that you can offer members of the league with perhaps a small incentive for reaching out to you for your business. This is how WORD OF MOUTH gets passed around and you can grow your business through the MMSPL.</p>
                    <p>Please reach out to Sean Bansavatar (Raiders) at <a href="mailto:seanabansavatar@hotmail.com?Subject=MMSPL Community">seanabansavatar@hotmail.com</a> or 416-970-1284 if you are interested to promote your business/services that can help everyone around the league.</p>
                  </div>
                </v-card>
                <v-card class="contact-v-card" style="width: 100%; margin-bottom: 10px;">
                  <v-toolbar class="v-toolbar" color="" dark flat>
                    <v-toolbar-title>Sibra Kitchens</v-toolbar-title>
                    <v-spacer />
                  </v-toolbar>
                  <button class="edit-btn" @click="communityPost2EditClick" v-if="userIsAuthorized">Edit</button>
                  <button class="close-btn" @click="communityPost2EditClick" 
                                          v-if="userIsAuthorized && communityPost2Auth"
                                          style="top: 44px; right: 4px;">
                                          X</button>
                  <CommunityPost2Edit v-if="userIsAuthorized && communityPost2Auth"/>
                  <div class="entry">
                    <div style="float:right;">
                      <a href="../assets/docs/sibra.pdf" target="_blank">
                        <img style="padding-left: 20px;" src="../assets/images/sibra.png" width="200px"/>
                      </a>
                    </div>
                    <p><strong>AS SEEN ON TV - Offering Home Improvements to your kitchen and household!</strong></p>
                    <p>Contact: Derek Krauss (Irish Holdings Shamrocks) at <a href="mailto:derek@sibrakitchens.com?Subject=MMSPL Community">derek@sibrakitchens.com</a></p>
                    <p>Website: <a target="_blank" href="http://www.sibrakitchens.com">www.sibrakitchens.com</a></p>
                    <br style="clear:both">
                  </div>
                </v-card>
                <v-card class="contact-v-card" style="width: 100%; margin-bottom: 10px;">
                  <v-toolbar class="v-toolbar" color="" dark flat>
                    <v-toolbar-title>Healthy Home Makeover Co Zzz Sleep</v-toolbar-title>
                    <v-spacer />
                  </v-toolbar>
                  <button class="edit-btn" @click="communityPost3EditClick" v-if="userIsAuthorized">Edit</button>
                  <button class="close-btn" @click="communityPost3EditClick" 
                                          v-if="userIsAuthorized && communityPost3Auth"
                                          style="top: 44px; right: 4px;">
                                          X</button>
                  <CommunityPost3Edit v-if="userIsAuthorized && communityPost3Auth"/>
                  <div class="entry">
                    <div style="float:right;">
                      <a href="../assets/images/healthy-home.pdf" target="_blank">
                        <img style="padding-left: 20px;" src="../assets/images/healthy-home.png" width="200px"/>
                      </a>             
                      <a href="../assets/images/cozzzsleep.pdf" target="_blank">
                        <img style="padding-left: 20px;" src="../assets/images/cozzzsleep.png" width="200px"/>
                      </a>
                    </div>
                      <p><strong>On Air AM 640 Every other Saturdays at noon!</strong></p>
                      <p>Contact: Brian Latinville (Pilkey Glass Pirates) at 647-212-4837</p>
                      <p>Website: <a target="_blank" href="http://www.healthyhomemakeovers.ca">www.healthyhomemakeovers.ca</a></p>
                      <br style="clear:both">
                  </div>
                </v-card>
              </v-container>
            </v-content>
          </v-app>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CommunityPost1Edit from '../components/community/CommunityPost1Edit'
import CommunityPost2Edit from '../components/community/CommunityPost2Edit'
import CommunityPost3Edit from '../components/community/CommunityPost3Edit'

export default {
  components: {
    CommunityPost1Edit,
    CommunityPost2Edit,
    CommunityPost3Edit,
  },
  data() {
    return {
      userIsAuthorized: false,
      communityPost1Auth: false,
      communityPost2Auth: false,
      communityPost3Auth: false,
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
    communityPost1EditClick() {
      if(this.communityPost1Auth === true) {
        this.communityPost1Auth = false;
      } else if(this.communityPost1Auth === false) {
        this.communityPost1Auth = true;
      }
    },
    communityPost2EditClick() {
      if(this.communityPost2Auth === true) {
        this.communityPost2Auth = false;
      } else if(this.communityPost2Auth === false) {
        this.communityPost2Auth = true;
      }
    },
    communityPost3EditClick() {
      if(this.communityPost3Auth === true) {
        this.communityPost3Auth = false;
      } else if(this.communityPost3Auth === false) {
        this.communityPost3Auth = true;
      }
    },
  },
  created() {
    this.checkUserIsAuthorized();
  }
}
</script>

<style stcope>
.community {
  background-color: #fff; 
  border-radius: 4px; 
  overflow: hidden;
  padding-bottom: 10px;
}
.community .content {
  float: right;
  width: 100%;
  padding: 20px 20px;
}
.community .v-container {
  margin: 0;
  max-width: 100%;
  padding: 0;
}
.community .entry {
  padding: 10px !important;
}
.community .entry p {
  font-size: 14.4px
}
.community .contact-v-card {
  /* color: #787878 !important; */
  color: #222 !important;
  font-size: 11.52px !important;
  text-align: left !important;
  font-family: Arial, Helvetica, sans-serif !important;
}
.community .v-card-pitching-experience .field-label {
  width: 20%;
}
.community .v-card-pitching-experience .field-input {
  width: 70%;
}
.community header {
  height: auto !important;
}
.community header .v-toolbar__content {
  height: auto !important;
  padding: 8px 16px;
}
.community .edit-btn {
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