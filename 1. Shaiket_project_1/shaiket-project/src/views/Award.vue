<template>
  <div class="award">
    <div class="content">
      
  <v-card>
    <v-tabs v-model="tab" grow>
      <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab" class="v-tab-items">
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
        'Honorary Members', 'McGregor Trophy', 'Kirkby Trophy', 'MacDonald Cup', 'President\'s Trophy', 'Higgins / Sale Award', 'Steve Bull'
      ],
      text: 'My text is here'
    }
  }
}
</script>

<style scoped>
.award {
  background-color: #fff; 
  border-radius: 4px; 
  overflow: hidden;
  padding-bottom: 10px;
}
.award .content {
  float: right;
  width: 948px;
  padding: 20px 20px 0 0;
  text-align: left;
}
.award .post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
}
.award .post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  color: #000000;
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
}
.award .entry ul {
  margin-bottom: 14.4px;
  padding: 0;
  padding-left: 40px;
  color: #787878;
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
}
.award .v-tab--active {
  color: #FFFFFF !important;
}
.award .v-tabs-bar.v-slide-group--is-overflowing.v-tabs-bar--is-mobile:not(.v-tabs-bar--show-arrows):not(.v-slide-group--has-affixes) .v-slide-group__prev {
  display: none;
}
.award .v-tab--active {
  background-color: #AA1111;
  color: #FFFFFF !important;
}
.award .v-tab:hover {
  background-color: #AA1111;
  color: #FFFFFF !important;
}
</style>