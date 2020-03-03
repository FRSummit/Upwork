<template>
  <div class="award">
    <div class="content">
      
    <button class="edit-btn" v-if="userIsAuthorized" 
                            @click="awardTopYearEditClick">{{ EditOrClose}}</button>
    <AwardMenuItem v-if="userIsAuthorized && AwardTopMenuAuth"/>
    <v-card>
      <AwardMenuItemPost v-if="userIsAuthorized && AwardTopMenuAuth"/>
      <v-tabs v-model="tab" grow v-if="!topListItemIsPresent">
        <v-tab v-for="(item, i) in items" :key="i">{{ item }}</v-tab>
      </v-tabs>
      <v-tabs v-model="tab" grow v-if="topListItemIsPresent">
        <v-tab v-for="(item, i) in topListNames" :key="i" @click="menuItemClick(item.title)">{{ item.title }}</v-tab>
      </v-tabs>

<!-- Default -->
      <v-tabs-items v-model="tab" class="v-tab-items" v-if="!topListItemIsPresent">
        <h1>Default</h1>
        <v-tab-item v-for="item in items" :key="item" class="v-tab-item">
          <v-card class="v-card">
            <v-card v-if="item == 'Honorary Members'">
              <div class="post">
                <h2 class="title">MMSPL Honorary Members</h2>
                <div class="entry">
                  <p>In order to permanently recognize individuals who, through personal involvement with the league, have contributed to its growth, organization or enjoyment by its members, the league offers a status of honourary membership.</p>
                  <p>This membership entitles the individual to participate in all social activities of the league that would otherwise be restricted to league members.</p>
                  <p>In order to maintain this status an individual must:</p>
                  <ul>
                    <li>No longer be an active player in the MMSPL</li>
                    <li>Must be nominated for the position at the Annual General Meeting</li>
                    <li>Must be accepted by a majority vote at the Annual General Meeting</li>
                  </ul>
                  <p>The Honourary Members are:</p>
                  <table border="0" cellspacing="0" class="admin">
                    <tbody>
                      <tr>
                        <td><span class="top">Jim McGregor</span></td>
                        <td><span class="top">Ernie Swift</span></td>
                        <td><span class="top">Don Feggi</span></td>
                        <td><span class="top">Chris Ruddle</span></td>
                      </tr>
                      <tr>
                        <td><span class="top">Greg Hoover</span></td>
                        <td><span class="top">Cameron Strath</span></td>
                        <td><span class="top">Phil Morra</span></td>
                        <td><span class="top">Jim Sale</span></td>
                      </tr>
                      <tr>
                        <td><span class="top">John Egli</span></td>
                        <td><span class="top">Brian Kirlin</span></td>
                        <td><span class="top">Steve Bull</span></td>
                        <td><span class="top"></span></td>
                      </tr>
                    </tbody>
                  </table>			
                </div>
              </div>
            </v-card>
          </v-card>
        </v-tab-item>
      </v-tabs-items>

<!-- Dynamic -->
      <v-tabs-items v-model="tab" class="v-tab-items" v-if="topListItemIsPresent">
        <h1>Dynamic</h1>
        <v-tab-item v-for="(item, i) in dynamicPosts" :key="i" class="v-tab-item">
          <v-card class="v-card">
            <v-card v-if="item.listItem == firstPost || item.listItem == selectedPostByClick">
              <div class="post">
                <h2 class="title">{{ item.title }}</h2>
                <div class="entry" style="display: inline-block; width: 60%; vertical-align: top;">
                  <p>{{ item.description1 }}</p>
                  <p>{{ item.description2 }}</p>
                  <p>{{ item.description3 }}</p>
                  <p>{{ item.description4 }}</p>
                  <div class="trophy-list" style="position: relative;">
                    <button class="edit-btn" v-if="userIsAuthorized" 
                                        @click="dynamicPostRegClick()"
                                        style="top: 2px; right: 6px; left: unset;">{{ trophyEditOrClose }}</button>
                    <TrophyAddForm v-if="userIsAuthorized && regFormAuth"/>
                    <table border="0" cellspacing="0" class="dataTable" style="table-layout:fixed; width: 100%;">
                      <thead style="background-color: #333333; color: #FFF;">
                        <tr class="headerRow">
                          <td style="width: 20%; padding: 4px 6px;">Year</td>
                          <td style="padding: 4px 6px;">Champion</td>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(i, j) in awards" :key="j">
                          <td style="width: 20%;padding: 2px 6px;" v-if="item.listItem === i.listItem">{{ i.year }}</td>
                          <td style="padding: 2px 6px;" v-if="item.listItem === i.listItem">{{ i.champion }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="award-img-sec" style="display: inline-block; width: 38%; font-size: 12px; color: #FFF">
                  <div style="margin: 10px; background: #272727; padding: 8px; text-align: center;">
                    <img :src="item.imgURL" alt="" style="width: 100%;">
                    <p style=" font-size: 14px; padding: 4px; font-weight: bold;">{{ item.imgDescription }}</p>
                    <hr style="width: 80%; margin: 0 auto;"/>
                    <p style="padding: 4px;">{{ item.specialWords }}</p>
                    <p style="padding: 2px;">{{ item.address1 }}</p>
                    <p style="padding: 2px;">{{ item.address2 }}</p>
                    <p style="padding: 2px;">{{ item.address3 }}</p>
                    <p style="padding: 2px;">TEL {{ item.phone1 }}</p>
                    <p style="padding: 2px;">TEL {{ item.phone2 }}</p>
                  </div>
                </div>
              </div>
            </v-card>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>

		</div>
  </div>
</template>

<script>
import AwardMenuItem from '../components/award/AwardMenuItem'
import AwardMenuItemPost from '../components/award/AwardMenuPost'
import TrophyAddForm from '../components/award/TrophyAddForm'

export default {
  components: {
    AwardMenuItem,
    AwardMenuItemPost,
    TrophyAddForm
  },
  data() {
    return {
      tab: null,
      items: [
        'Honorary Members', 'McGregor Trophy', 'Kirkby Trophy', 'MacDonald Cup', 'President\'s Trophy', 'Higgins / Sale Award', 'Steve Bull'
      ],
      text: 'My text is here',
      EditOrClose: 'Edit',
      AwardTopMenuAuth: false,
      topListItemIsPresent: false,
      topListNames: [],
      dynamicPosts:[],
      firstPost: null,
      selectedPostByClick: null,
      trophyEditOrClose: 'Edit',
      regFormAuth: false,
      dynamicForm: false,
      awards: [],
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
    awardTopYearEditClick() {
      if(this.AwardTopMenuAuth === false) {
        this.AwardTopMenuAuth = true
        this.EditOrClose = 'Close'
      } else if(this.AwardTopMenuAuth === true) {
        this.AwardTopMenuAuth = false
        this.EditOrClose = 'Edit'
      }
    },
    menuItemClick(name) {
      this.selectedPostByClick = name 
    },
    dynamicPostRegClick() {
      if(this.regFormAuth === false) {
        this.regFormAuth = true
        this.trophyEditOrClose = 'Close'
      } else if(this.regFormAuth === true) {
        this.regFormAuth = false
        this.trophyEditOrClose = 'Edit'
      }
    }
  },
  created() {
    this.checkUserIsAuthorized();
    firebase.database().ref('awardMenuItem').on('value', (snapshot)=> {
      this.topListNames = snapshot.val();
      console.log(this.topListNames[(Object.keys(this.topListNames)[0])].title)
      this.firstPost = this.topListNames[(Object.keys(this.topListNames)[0])].title
      if(this.topListNames) {
        this.topListItemIsPresent = true;
      }
    });
    firebase.database().ref('awardMenuPost').on('value', (snapshot)=> {
      this.dynamicPosts = snapshot.val();
    });
    firebase.database().ref('awardChampionList').on('value', (snapshot)=> {
      this.awards = snapshot.val();
    });
  }
}
</script>

<style scoped>
.award {
  background-color: #fff; 
  border-radius: 4px; 
  /* overflow: hidden; */
  overflow: overlay;
  padding-bottom: 10px;
  min-height: 800px;
}
.award .content {
  float: right;
  width: 948px;
  padding: 20px 20px 0 0;
  text-align: left;
  position: relative;
}
.award .post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
}
.award .post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  background-color: #272727;
  color: #FFFFFF;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.award .post .menu {
  background-color: #EBEBEB;
  height: 70px;
}
.award .post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 10px 20px 15px 20px;
  font-size: 14.4px;
  text-align: left;
}
.award .entry p {
  margin-bottom: 14px;
  color: #787878;
  color: #222;
}
.award .entry ul {
  margin-bottom: 14.4px;
  padding: 0;
  padding-left: 40px;
  color: #222;
}
.award .admin {
  table-layout: fixed;
  width: 100%;
  border-spacing: 0px 0px;
  border: 1px solid #000000;
  color: #000000;
  text-align: center;
}
.award .admin td {
  padding: 10px;
  border: 1px solid #000000;
  background-color: #FFFFFF;
}
.award .admin td span.top {
  font-weight: bold;
}
.award .v-tabs-items {
  margin-top: 10px;
}
.award .v-slide-group {
  height: 70px;
}
.award .v-tab {
  text-align: left;
  color: #222 !important;
  border: 1px solid #D2D4C9;
  padding: 0 20px;
  max-width: 120px !important;
  border-radius: 6px;
}
.award .v-tab--active {
  color: #FFFFFF !important;
  border-radius: 6px;
  /* background-color: #AA1111; */
  background-color: #272727;
}
.award .v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev {
  display: none;
}
.award .v-tabs-slider {
  background-color: #272727;
}
.award .v-tab:hover {
  /* background-color: #AA1111; */
  background-color: #272727;
  color: #FFFFFF !important;
}
.award .v-tabs-bar {
  height: 60px;
  padding-bottom: 2px;
  border: 2px solid #222;
}
.award .edit-btn {
  position: absolute;
  top: 0;
  left: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 10px;
  border: 2px solid #FFFFFF;
  border-radius: 6px;
  background: green;
  z-index: 5;
}
tbody tr:nth-child(odd), .oddRow {
  background-color: #FFFFFF;
}
tbody tr:nth-child(even), .evenRow {
  background-color: #D4D4D4;
}
</style>