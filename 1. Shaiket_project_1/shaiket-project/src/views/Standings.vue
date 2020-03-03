<template>
  <div class="standings">
    <div class="content">
      <button class="edit-btn" v-if="userIsAuthorized" 
                                @click="standingsTopYearEditClick">{{ EditOrClose}}</button>
      <TopYearListForm v-if="userIsAuthorized && topYearEditFormAuth"/>
      <v-card>
        <v-tabs v-model="tab" grow v-if="!yearsListIsPresent">
          <v-tab v-for="(item, i) in items" :key="i">{{ item }}</v-tab>
        </v-tabs>
        <v-tabs v-model="tab" grow v-if="yearsListIsPresent">
          <v-tab class="my_tab" v-for="(item, i) in yearsList" :key="i" @click="yearMenuClick(item.year)">{{ item.year }}</v-tab>
        </v-tabs>

        <!-- Default Post -->
        <v-tabs-items v-model="tab" class="v-tab-items" v-if="!dynamicPost">
          <v-tab-item v-for="(item, i) in items" :key="i" class="v-tab-item">
            <v-card class="v-card">
              <v-card v-if="item == '2020'">
                <div class="post">
                  <h2 class="title">2010 Final Tournament <a style="font-size:10pt;font-weight:normal;margin-left:10px;text-transform:none" href="standings-2010-final.html">Details</a></h2>
                  <div class="entry">
                    <table align="center" style="width:640px; margin: 0 auto;">
                      <tbody><tr>
                        <td>
                          <p class="pictureframe">
                            <img src="../assets/images/2010-finals-champions-310x185.jpg" width="310" height="185" alt="Champions">
                            <span>Champions - EM Automotive Sox</span>
                          </p>
                        </td>
                        <td>
                          <p class="pictureframe">
                            <img src="../assets/images/2010-finals-finalists-310x185.jpg" width="310" height="185" alt="Finalists">
                            <span>Finalists - Active Green+Ross Athletics</span>
                          </p>
                        </td>
                      </tr>
                    </tbody></table>
                  </div>
                </div>
                <div class="post">
                  <h2 class="title">2010 Regular Season Standings <a style="font-size:10pt;font-weight:normal;margin-left:10px;text-transform:none" href="standings-2010-may.html">Details</a></h2>
                  <div class="entry">
                    <table border="0" cellspacing="0" class="dataTable" style="table-layout:fixed; width: 100%;">
                      <tbody>
                        <tr class="headerRow"><td align="right" style="width:2em">&nbsp;</td><td style="width:40%">Team</td><td align="right">P</td><td align="right">W</td><td align="right">L</td><td align="right">T</td><td align="right">D</td><td align="right">+ / -</td><td align="right">GP</td></tr>
                      <tr class="hiliteRow"><td align="right">1</td><td>EM Automotive Sox</td><td align="right">50</td><td align="right">23</td><td align="right">3</td><td align="right">4</td><td align="right">0</td><td align="right">126</td><td align="right">30</td></tr>
                      <tr class="oddRow"><td align="right">2</td><td>Red Hot Dawgs</td><td align="right">42</td><td align="right">18</td><td align="right">6</td><td align="right">6</td><td align="right">0</td><td align="right">90</td><td align="right">30</td></tr>
                      <tr class="evenRow"><td align="right">3</td><td>Aviva Beavers</td><td align="right">42</td><td align="right">19</td><td align="right">7</td><td align="right">4</td><td align="right">0</td><td align="right">121</td><td align="right">30</td></tr>
                      <tr class="oddRow"><td align="right">4</td><td>CDS Moose</td><td align="right">39</td><td align="right">18</td><td align="right">9</td><td align="right">3</td><td align="right">0</td><td align="right">103</td><td align="right">30</td></tr>
                      <tr class="evenRow"><td align="right">5</td><td>Adam's Lighting Bolts</td><td align="right">37</td><td align="right">17</td><td align="right">10</td><td align="right">3</td><td align="right">0</td><td align="right">42</td><td align="right">30</td></tr>
                      <tr class="oddRow"><td align="right">6</td><td>Main's Mansion Rangers</td><td align="right">35</td><td align="right">15</td><td align="right">10</td><td align="right">5</td><td align="right">0</td><td align="right">21</td><td align="right">30</td></tr>
                      <tr class="evenRow"><td align="right">7</td><td>Active Green+Ross Athletics</td><td align="right">29</td><td align="right">14</td><td align="right">15</td><td align="right">1</td><td align="right">0</td><td align="right">33</td><td align="right">30</td></tr>
                      <tr class="oddRow"><td align="right">8</td><td>Seagate</td><td align="right">29</td><td align="right">12</td><td align="right">12</td><td align="right">6</td><td align="right">1</td><td align="right">18</td><td align="right">30</td></tr>
                      <tr class="evenRow"><td align="right">9</td><td>OK Braves</td><td align="right">29</td><td align="right">13</td><td align="right">14</td><td align="right">3</td><td align="right">0</td><td align="right">-37</td><td align="right">30</td></tr>
                      <tr class="oddRow"><td align="right">10</td><td>The Hitmen</td><td align="right">29</td><td align="right">14</td><td align="right">15</td><td align="right">1</td><td align="right">0</td><td align="right">-64</td><td align="right">30</td></tr>
                      <tr class="evenRow"><td align="right">11</td><td>Col Mustard's Classics</td><td align="right">23</td><td align="right">11</td><td align="right">18</td><td align="right">1</td><td align="right">0</td><td align="right">-63</td><td align="right">30</td></tr>
                      <tr class="oddRow"><td align="right">12</td><td>Markham Knights</td><td align="right">23</td><td align="right">9</td><td align="right">16</td><td align="right">5</td><td align="right">0</td><td align="right">-48</td><td align="right">30</td></tr>
                      <tr class="evenRow"><td align="right">13</td><td>Harding Display Pirates</td><td align="right">22</td><td align="right">11</td><td align="right">18</td><td align="right">1</td><td align="right">1</td><td align="right">-46</td><td align="right">30</td></tr>
                      <tr class="oddRow"><td align="right">14</td><td>Wing It</td><td align="right">20</td><td align="right">8</td><td align="right">18</td><td align="right">4</td><td align="right">0</td><td align="right">-35</td><td align="right">30</td></tr>
                      <tr class="evenRow"><td align="right">15</td><td>Houghton Remax</td><td align="right">16</td><td align="right">6</td><td align="right">19</td><td align="right">5</td><td align="right">1</td><td align="right">-117</td><td align="right">30</td></tr>
                      <tr class="oddRow"><td align="right">16</td><td>CDI Computers Heirs</td><td align="right">12</td><td align="right">5</td><td align="right">23</td><td align="right">2</td><td align="right">0</td><td align="right">-144</td><td align="right">30</td></tr>
                    </tbody></table>
                  </div>
                  <div class="entry">
                    <p>Please note that in the event of a tie, final rankings are determined by:</p>
                    <ol>
                      <li>Accumulated points during the regular season.</li>
                      <li>Head to head win/loss record.</li>
                      <li>Best +/- in head-to-head games.</li>
                      <li>Most runs for in head-to-head games.</li>
                      <li>Best +/- in regular season games.</li>
                      <li>Coin toss.</li>
                    </ol>					
                  </div>						
                </div>
                <div class="post">
                  <h2 class="title">2010 Charity Tournament <a style="font-size:10pt;font-weight:normal;margin-left:10px;text-transform:none" href="standings-2010-charity.html">Details</a></h2>
                  <div class="entry">
                    <table align="center" style="width:640px; margin: 0 auto;">
                      <tbody>
                        <tr>
                          <td>
                            <p class="pictureframe">
                              <img src="../assets/images/2010-charity-champions-310x185.jpg" width="310" height="185" alt="Champions">
                              <span>Champions - Red Hot Dawgs</span>
                            </p>
                          </td>
                          <td>
                            <p class="pictureframe">
                              <img src="../assets/images/2009-finals-finalists.jpg" width="310" height="185" alt="Finalists">
                              <span>Finalists - Harding Display Pirates</span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </v-card>
            </v-card>
          </v-tab-item>
        </v-tabs-items>


        <!-- Dynamic Post -->
        <v-tabs-items v-model="tab" class="v-tab-items" v-if="dynamicPost">
          <v-tab-item v-for="(item, i) in dynamicPost" :key="i" class="v-tab-item">
            <v-card class="v-card">
              <v-card v-if="item.postYear == firstPost || item.postYear == selectedPostYear">
                <div class="post">
                  <h2 class="title">{{item.postYear}} {{ item.post1Title }}</h2>
                  <div class="entry">
                    <table align="center" style="width:640px; margin: 0 auto;">
                      <tbody><tr>
                        <td>
                          <p class="pictureframe">
                            <img :src="item.post1ImgURL" width="310" height="185" alt="Champions">
                            <span>{{ item.post1ImgName }}</span>
                          </p>
                        </td>
                        <td>
                          <p class="pictureframe">
                            <img :src="item.post1ImgURL2" width="310" height="185" alt="Finalists">
                            <span>{{ item.post1ImgName2 }}</span>
                          </p>
                        </td>
                      </tr>
                    </tbody></table>
                  </div>
                </div>
                <div class="post">
                <button class="edit-btn" v-if="userIsAuthorized" 
                                @click="dynamicPostRegClick(item.postYear)"
                                style="right: 6px; left: unset;">{{ regEditOrClose }}</button>
                  <StandingPostRegForm v-if="userIsAuthorized && regFormAuth" :sendYear="sendYearToForm"/>
                  <h2 class="title">{{item.postYear}} Regular Season Standings</h2>
                  <div class="entry">
                    <table border="0" cellspacing="0" class="dataTable" style="table-layout:fixed; width: 100%;">
                      <thead>
                        <tr class="headerRow"><td align="right" style="width:2em">&nbsp;</td><td style="width:40%">Team</td><td align="right">P</td><td align="right">W</td><td align="right">L</td><td align="right">T</td><td align="right">D</td><td align="right">+ / -</td><td align="right">GP</td></tr>
                      </thead>
                      <tbody>
                        <tr class="" v-for="(i, j) in regData" :key="j">
                          <td align="right" style="width:2em" v-if="getYearFromTopList === i.year">&nbsp;</td>
                          <td style="width:40%" v-if="getYearFromTopList === i.year">{{i.teamName}}</td>
                          <td align="right" v-if="getYearFromTopList === i.year">{{ i.p }}</td>
                          <td align="right" v-if="getYearFromTopList === i.year">{{ i.w }}</td>
                          <td align="right" v-if="getYearFromTopList === i.year">{{ i.l }}</td>
                          <td align="right" v-if="getYearFromTopList === i.year">{{ i.t }}</td>
                          <td align="right" v-if="getYearFromTopList === i.year">{{ i.d }}</td>
                          <td align="right" v-if="getYearFromTopList === i.year">{{ i.posmin }}</td>
                          <td align="right" v-if="getYearFromTopList === i.year">{{ i.gp }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>					
                </div>
                <div class="post">
                  <h2 class="title">{{item.postYear}} {{ item.post3Title }}</h2>
                  <div class="entry">
                    <table align="center" style="width:640px; margin: 0 auto;">
                      <tbody>
                        <tr>
                          <td>
                            <p class="pictureframe">
                              <img :src="item.post3ImgURL3" width="310" height="185" alt="Champions">
                              <span>{{ item.post3ImgName3 }}</span>
                            </p>
                          </td>
                          <td>
                            <p class="pictureframe">
                              <img :src="item.post3ImgURL4" width="310" height="185" alt="Finalists">
                              <span>{{ item.post3ImgName4 }}</span>
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </v-card>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        <StandingPostContentEdit v-if="userIsAuthorized && topYearEditFormAuth"/>
      </v-card>
		</div>
  </div>
</template>

<script>
import TopYearListForm from '../components/standings/StandingTopYearList'
import StandingPostContentEdit from '../components/standings/StandingPostContentEdit'
import StandingPostRegForm from '../components/standings/StandingPostRegForm'

export default {
  components: {
    TopYearListForm,
    StandingPostContentEdit,
    StandingPostRegForm
  },
  data() {
    return {
      tab: null,
      items: [
        '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009',
        '2008', '2007', '2006', '2005'
      ],
      text: 'My text is here',
      userIsAuthorized: false,
      topYearEditFormAuth: false,
      EditOrClose: 'Edit',
      yearsList: [],
      firstPost: null,
      selectedPostYear: null,
      yearsListIsPresent: false,
      dynamicPost: [],
      regEditOrClose: 'Edit',
      regFormAuth: false,
      sendYearToForm: null,
      regData: [],
      getYearFromTopList: null
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
    standingsTopYearEditClick() {
      if(this.topYearEditFormAuth === false) {
        this.topYearEditFormAuth = true
        this.EditOrClose = 'Close'
      } else if(this.topYearEditFormAuth === true) {
        this.topYearEditFormAuth = false
        this.EditOrClose = 'Edit'
      }
    },
    yearMenuClick(year) {
      console.log(year)
      this.selectedPostYear = year 
      this.getYearFromTopList = year 
    },
    dynamicPostRegClick(year) {
      console.log('wo: ' + year)
      this.sendYearToForm = year;
      if(this.regFormAuth === false) {
        this.regFormAuth = true
        this.regEditOrClose = 'Close'
      } else if(this.regFormAuth === true) {
        this.regFormAuth = false
        this.regEditOrClose = 'Edit'
      }
    },
  },
  created() {
    this.checkUserIsAuthorized();
    firebase.database().ref('standingYearList').on('value', (snapshot)=> {
      this.yearsList = snapshot.val();
      this.firstPost = this.yearsList[(Object.keys(this.yearsList)[0])].year
      if(this.yearsList) {
        this.yearsListIsPresent = true;
      }
    });
    firebase.database().ref('standingYearPost').on('value', (snapshot)=> {
      this.dynamicPost = snapshot.val();
    });
    firebase.database().ref('standingPostRegList').on('value', (snapshot)=> {
      this.regData = snapshot.val();
    });
    this.getYearFromTopList = document.querySelector('.my_tab.v-tab--active').innerHTML
  },
  mounted() {
    this.getYearFromTopList = document.querySelector('.my_tab.v-tab--active').innerHTML
  }
}
</script>

<style scoped>
.standings {
  background-color: #fff; 
  border-radius: 4px;
  /* overflow: hidden; */
  overflow: overlay;
  padding-bottom: 10px;
  min-height: 500px;
}
.standings .content {
  float: right;
  width: 948px;
  padding: 20px 20px 0 0;
  text-align: left;
  position: relative;
}
.standings .post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
  position: relative;
}
.standings .post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  color: #FFFFFF;
  background-color: #272727;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.standings .post .menu {
  background-color: #EBEBEB;
  height: 70px;
}
.standings .post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 10px 20px 15px 20px;
  font-size: 14.4px;
  text-align: left;
}
.standings .entry ul {
  margin-bottom: 14.4px;
  padding: 0;
  padding-left: 40px;
  color: #787878;
}
.standings .admin {
  table-layout: fixed;
  width: 100%;
  border-spacing: 0px 0px;
  border: 1px solid #000000;
  color: #000000;
  text-align: center;
}
.standings .admin td {
  padding: 10px;
  border: 1px solid #000000;
  background-color: #FFFFFF;
}
.standings .admin td span.top {
  font-weight: bold;
}
.standings .v-tabs-items {
  margin-top: 10px;
}
.standings .v-slide-group {
  height: 70px;
}
.standings .v-tab {
  text-align: left;
  color: #222 !important;
  border: 1px solid #D2D4C9;
  padding: 0 20px;
  max-width: 120px !important;
  border-radius: 6px;
}
.standings .v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev {
  display: none;
}
.standings .entry p {
  margin: 0 1px 14px;
  color: #787878;
}
.standings .pictureframe {
  background-color: #AA1111;
  padding: 10px;
  text-align: center;
}
.standings .pictureframe span {
  display: block;
  color: #FFFFFF;
  padding-top: 10px;
  font-weight: bold;
  height: 40px;
}
.standings .headerRow {
  background-color: #333333 !important;
  color: #FFFFFF !important;
}
.standings .dataTable td {
  padding: 3px;
}
.standings .hiliteRow {
  background-color: #AA1111;
  color: #FFFFFF;
}
.standings .zebra tr:nth-child(odd), .oddRow {
  background-color: #FFFFFF;
}
.standings .zebra tr:nth-child(even), .evenRow {
  background-color: #D4D4D4;
}
.standings ol {
  color: #787878 !important;
  padding-left: 40px !important;
}
.standings .v-tab--active {
  background-color: #AA1111;
  color: #FFFFFF !important;
  border-radius: 6px;
}
.standings .v-tab:hover {
  background-color: #AA1111;
  color: #FFFFFF !important;
}
.standings .edit-btn {
  position: absolute;
  top: 6px;
  left: 0;
  z-index: 5;
  color: #ffffff;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 10px;
  border: 2px solid #FFFFFF;
  border-radius: 6px;
  background: green;
}
tr:nth-child(even), .evenRow {
  background-color: #D4D4D4 !important;
}
tr:nth-child(odd), .evenRow {
  background-color: #FFF !important;
}
</style>