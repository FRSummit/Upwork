<template>
  <div class="about">
    <div class="content">
      <!-- Post 1 -->
      <div class="post">
        <h2 class="title">Our League</h2>
        <button class="edit-btn" @click="aboutPost1EditClick" v-if="userIsAuthorized">Edit</button>
        <button class="close-btn" @click="aboutPost1EditClick" 
                                v-if="userIsAuthorized && aboutPost1Auth"
                                style="top: 44px; right: 4px;">
                                X</button>
        <AboutPost1Edit v-if="userIsAuthorized && aboutPost1Auth"/>
        <div class="entry" v-if="!aboutPost1DataAuth">
          <p>The Markham Men's Slo-Pitch League is a semi-competitive, slo-pitch league with 16 teams of 15 players each. Players range in age from 25-60+.</p>
          <p>Established as a 4 team recreational softball league, the Markham Men's Slo-Pitch League (originally Markham Men's Fun League) played their first season in the summer of 1968.</p>
          <p>Since that time we have grown to 16 teams and present The Jim McGregor trophy, named after our founder, to the Playoff Champion every season.</p>
          <p>Our regular season runs from May to September with games on Tuesdays, Thursdays, and Sundays.</p>
          <p>Teams play 30 regular season games at:</p>
          <ul>
            <li><a target="_blank" href="http://g.co/maps/56h2p">Centennial Park</a> <span>(Bullock and McCowan)</span></li>
            <li><a target="_blank" href="http://g.co/maps/74aza">Mintleaf Park</a> <span>(Fincham and Wootten Way N.)</span></li>							
          </ul>
          <p>Teams also participate in a Charity Tournament (early-June) and a Play-off Tournament (mid-September), with 3 guaranteed games per tournament.</p>
        </div>
        <div class="entry" v-if="aboutPost1DataAuth">
          <div v-for="(post, i) in aboutPost1Data" :key="i">
            <p>{{ post.paragraph1 }}</p>
            <p>{{ post.paragraph2 }}</p>
            <p>{{ post.paragraph3 }}</p>
            <p>{{ post.paragraph4 }}</p>
            <p>{{ post.paragraph5 }}</p>
            <ul>
              <li><a target="_blank" :href="post.url1">{{ post.urlText1 }}</a> <span>{{ post.urlComment1 }}</span></li>
              <li><a target="_blank" :href="post.url2">{{ post.urlText2 }}</a> <span>{{ post.urlComment2 }}</span></li>							
            </ul>
            <p>{{ post.paragraph6 }}</p>
          </div>
        </div>
      </div>
      <!-- Post 2 -->
      <!-- <div class="post">
        <h2 class="title">In The Community</h2>
        <button class="edit-btn" @click="aboutPost2EditClick" v-if="userIsAuthorized">Edit</button>
        <button class="close-btn" @click="aboutPost2EditClick" 
                              v-if="userIsAuthorized && aboutPost2Auth"
                              style="top: 44px; right: 4px;">
                              X</button>
        <AboutPost2Edit v-if="userIsAuthorized && aboutPost2Auth"/>
        <div class="entry">
          <p>To date, the Markham Men's Slo-Pitch League has donated in excess of <span style="font-weight:bold">$110,000</span> to local Markham charities.</p>
            <p>In 1982, with the opening of Centennial Community Park, the Markham Men's Slo-Pitch League played their inaugural Inter Mural Community Fun Tournament to raise funds for local charities helping people directly in The Markham Community.</p>
        </div>
        <div class="entry">
        <v-carousel>
        <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"
              reverse-transition="fade-transition" transition="fade-transition"></v-carousel-item>
        </v-carousel>
        </div>
      </div> -->
      <!-- Post 3 -->
      <div class="post">
        <h2 class="title">Celebrating 50 years in 2018</h2>
        <button class="edit-btn" @click="aboutPost3EditClick" v-if="userIsAuthorized">Edit</button>
        <button class="close-btn" @click="aboutPost3EditClick" 
                                v-if="userIsAuthorized && aboutPost3Auth"
                              style="top: -400px; right: 4px;">
                                X</button>
        <AboutPost3Edit v-if="userIsAuthorized && aboutPost3Auth" style="top: -400px"/>
        <div class="entry" v-if="!aboutPost3DataAuth">
          <div style="text-align:center;">
              <img src="../assets/images/MMSP-LOGO-50-YRS.png" width="406" style="padding-bottom: 10px">
          </div>
          <p>A league 50 years in the making...</p>
          <p>In the mid 1960's, a group of Markham residents decided to play fast pitch in a Sunday night league at Morgan Park. This 4 team league consisted of the South Markham (Ace Pools), East Markham (Unknown Present Team), North Sherwood ( The Condo Kings Army) and South Sherwood (S&amp;H Raiders) and lasted only a couple of seasons due to the lack of sufficient pitching. </p>
          <p>In 1968, the league decided to play Slo-Pitch. There were two more teams that decided to join the league. Those teams were the Firemaen (Unknown Present Team) and The Kinsmen (Unknown Present Team) and the league founder, Jim McGregor formed the new name of Markham Men's Fun League. In 1970, four teams from Unionville wanted to join the newly formed Markham Men's Fun League. Sherwood Green (Main's Mansion Rangers) and Sherwood Estates (Seagate) were introduced to the league along with the other two Unionville teams. </p>
          <p>The league eventually expanded to 12 teams prior to 1974 when two of the four Unionville teams that joined separated from the league and formed their own league. In need of an expansion due to the booming population of the "Old Markham" area in the late 70's to early 80's, the Markham Mens Fun League expanded their league with teams expanding every year from 1978 to 1981 to bring the total to 16 teams. </p>
          <p>The league has seen evolved over its 50 year existence. Most notable changes for the league; under President Greg Hoover et. all created and introduced the current league constitution in 1986. This is the same constitution that our league prides itself on and continues to abide by. In 1987, under President Gene Federchuck - the Father/Son rule was introduced, as well as the commit line was approved by vote and was introduced to the league. The Markham Men's Fun League's name was eventually changed to the Markham Men's Slo-Pitch League after a motion was passed to change the name. This took place between the late 1980's to early 1990's. The league has thrived for 50 years. It is the oldest league in Markham. It's a league that hosts generations of families playing within the league. From the father's that first joined the league, sons have followed suit to join the league and this is a trend that the Markham Men's Slo-Pitch League will continue to promote. Every year after the season has come to an end, an annual AGM meeting is hosted by the Executive Council, open to every member of the league to discuss concerns, bring rule changes to the league to a vote, and any other topics that are tabled for discussions. </p>
          <p>Since 1982, the MMSPL has become involved within the community of Markham. Every June, a charity tournament is played and the league donates thousands of dollars to various local causes. To date, the MMSPL has donated over <strong>$110,000.00</strong> to the local charities within the Markham area and will continue add on our accomplishments to help our community for years to come. </p>
          <p>Thank you to all members of this great league for continuing to support us and participating in a memorable benchmark for this league! Here's to 50 years and many more memorable years to come! </p>
        </div>
        <div class="entry" v-if="aboutPost3DataAuth">
          <div v-for="(post, i) in aboutPost3Data" :key="i">
            <!-- <div style="text-align:center;">
                <img src="../assets/images/MMSP-LOGO-50-YRS.png" width="406" style="padding-bottom: 10px">
            </div> -->
            <p>{{ post.title }}</p>
            <p>{{ post.paragraph1 }}</p>
            <p>{{ post.paragraph2 }}</p>
            <p>{{ post.paragraph3 }}</p>
            <p>{{ post.paragraph4 }}</p>
            <p>{{ post.paragraph5 }}</p>
            <p>{{ post.paragraph6 }}</p>
            <p>{{ post.paragraph7 }}</p>
          </div>
        </div>
      </div>		
	  </div>
  </div>
</template>

<script>
import AboutPost1Edit from '../components/about/AboutPost1Edit'
import AboutPost2Edit from '../components/about/AboutPost2Edit'
import AboutPost3Edit from '../components/about/AboutPost3Edit'

export default {
  name: 'About',
  components: {
    AboutPost1Edit,
    AboutPost2Edit,
    AboutPost3Edit
  },
  data() {
    return {
      userIsAuthorized: false,
      items: [
        {
		  src: 'http://mmspl.ca/res/img/2016-charity-presentation-cfd.jpg',
        },
        {
          src: 'http://mmspl.ca/res/img/2013-charity-MHFC.jpg',
        },
        {
          src: 'http://mmspl.ca/res/img/2016-charity-presentation-ola.jpg',
        },
        {
          src: 'http://mmspl.ca/res/img/2013-charity-YBH.jpg',
        },
        {
          src: 'http://mmspl.ca/res/img/2011-charity-presentation-mdba-640x480.jpg',
        },
        {
          src: 'http://mmspl.ca/res/img/2016-charity-presentation-sws.jpg',
        },
      ],
      aboutPost1Auth: false,
      aboutPost2Auth: false,
      aboutPost3Auth: false,
      aboutPost1DataAuth: false,
      aboutPost2DataAuth: false,
      aboutPost3DataAuth: false,
      aboutPost1Data:[],
      aboutPost2Data:[],
      aboutPost3Data:[]
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
    aboutPost1EditClick() {
      if(this.aboutPost1Auth === true) {
        this.aboutPost1Auth = false;
      } else if(this.aboutPost1Auth === false) {
        this.aboutPost1Auth = true;
      }
    },
    aboutPost2EditClick() {
      if(this.aboutPost2Auth === true) {
        this.aboutPost2Auth = false;
      } else if(this.aboutPost2Auth === false) {
        this.aboutPost2Auth = true;
      }
    },
    aboutPost3EditClick() {
      if(this.aboutPost3Auth === true) {
        this.aboutPost3Auth = false;
      } else if(this.aboutPost3Auth === false) {
        this.aboutPost3Auth = true;
      }
    }
  },
  created() {
    this.checkUserIsAuthorized();
    firebase.database().ref('aboutPost1').on('value', (snapshot)=> {
      this.aboutPost1Data = snapshot.val();
      if(this.aboutPost1Data) this.aboutPost1DataAuth = true
    });
    firebase.database().ref('aboutPost3').on('value', (snapshot)=> {
      this.aboutPost3Data = snapshot.val();
      if(this.aboutPost3Data) this.aboutPost3DataAuth = true
    });
  }
}
</script>

<style scoped>
.about {
  background-color: #fff; 
  border-radius: 4px; 
  /* overflow: hidden; */
  overflow: overlay;
  padding-bottom: 10px;
}
.about .content {
  float: right;
  width:948px;
  padding: 20px 20px 0 0;
  color: #787878;
}
.about .post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  position: relative;
}
.about .post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  background-color: #272727;
  color: #FFFFFF;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.about .post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 10px 20px 15px 20px;
  font-size: 14.4px;
  text-align: left;
}
.about .entry p {
  margin-bottom: 14px;
  color: #222;
}
.about .entry a {
  text-decoration: none;
  color: #417FDA;
}
.about .entry a:hover {
  text-decoration: underline;
}
.about .entry ul {
  padding-left: 40px;
  margin-bottom: 14.4px;
}
.about .edit-btn {
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
