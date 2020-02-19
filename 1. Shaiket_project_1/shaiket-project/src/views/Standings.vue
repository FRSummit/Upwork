<template>
  <div class="standings">
    <div class="content">
      <v-card>
        <v-tabs v-model="tab" grow>
          <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab" class="v-tab-items">
          <v-tab-item v-for="item in items" :key="item" class="v-tab-item">
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
                      <tbody><tr class="headerRow"><td align="right" style="width:2em">&nbsp;</td><td style="width:40%">Team</td><td align="right">P</td><td align="right">W</td><td align="right">L</td><td align="right">T</td><td align="right">D</td><td align="right">+ / -</td><td align="right">GP</td></tr>
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
      </v-card>
		</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: [
        '2020', '2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009',
        '2008', '2007', '2006', '2005'
      ],
      text: 'My text is here'
    }
  }
}
</script>

<style scoped>
.standings {
  background-color: #fff; 
  border-radius: 4px; 
  overflow: hidden;
  padding-bottom: 10px;
}
.content {
  float: right;
  width: 948px;
  padding: 20px 20px 0 0;
  text-align: left;
}
.post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
}
.post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  color: #000000;
}
.post .menu {
  background-color: #EBEBEB;
  height: 70px;
}
.post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 10px 20px 15px 20px;
  font-size: 14.4px;
  text-align: left;
}
.entry ul {
  margin-bottom: 14.4px;
  padding: 0;
  padding-left: 40px;
  color: #787878;
}
.admin {
  table-layout: fixed;
  width: 100%;
  border-spacing: 0px 0px;
  border: 1px solid #000000;
  color: #000000;
  text-align: center;
}
.admin td {
  padding: 10px;
  border: 1px solid #000000;
  background-color: #FFFFFF;
}
.admin td span.top {
  font-weight: bold;
}
.v-tabs-items {
  margin-top: 10px;
}
.v-slide-group__content {
  width: 100%;
  padding: 14px 6px !important;
}
.v-slide-group {
  height: 70px;
}
.v-tab {
  text-align: left;
  color: #222 !important;
  border: 1px solid #D2D4C9;
  padding: 0 20px;
  max-width: 120px !important;
}
.v-tab--active {
  color: #FFFFFF !important;
}
.v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev {
  display: none;
}
.entry p {
  margin: 0 1px 14px;
  color: #787878;
}
.pictureframe {
  background-color: #AA1111;
  padding: 10px;
  text-align: center;
}
.pictureframe span {
  display: block;
  color: #FFFFFF;
  padding-top: 10px;
  font-weight: bold;
}
.headerRow {
  background-color: #333333 !important;
  color: #FFFFFF !important;
}
.dataTable td {
  padding: 3px;
}
.hiliteRow {
  background-color: #AA1111;
  color: #FFFFFF;
}
.zebra tr:nth-child(odd), .oddRow {
  background-color: #FFFFFF;
}
.zebra tr:nth-child(even), .evenRow {
  background-color: #D4D4D4;
}
ol {
  color: #787878;
  padding-left: 40px;
}
</style>