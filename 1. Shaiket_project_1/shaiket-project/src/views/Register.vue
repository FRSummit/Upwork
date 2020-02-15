<template>
  <div class="register">
    <div class="sidebar">
				<ul>
					<li>
						<h3>League Information</h3>
						<ul>
						<li>The Markham Men's Slo-Pitch League is a semi-competitive, slo-pitch league.  We have 16 teams with 15 players each.  We play 30 regular season games between mid-May to early-September.  Included in league fees are a Charity Tournament (early-June) and a Play-off Tournament (mid-September) in which each team is guaranteed 3 games.  Players range in age from 25-60+.</li>
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
						<li>If all roster spots are filled, you may join the waiting / call-up list, and are then eligible to play in games when a team requires extra players.</li>						
						</ul>
					</li>
				</ul>
			</div>
      <div class="content">
				<div class="post">
					<div class="menu">
						<ul>
							<li class="current"><a href="register.html">Registration Form</a></li>
							<li><a href="register-list.html">2020 Registration List</a></li>
						</ul>
					</div>			
				</div>
				<div class="post">
					<h2 class="title">Registration Form</h2>
					<div class="entry">
						<form>
              <v-content class="v-content">
                <v-container class="v-container">
                  <v-row align="center" justify="center">
                    <v-col>
                      <!-- Personal Info -->
                      <v-card class="elevation-12" style="width: 100%; margin: 0 auto;">
                        <v-toolbar class="v-toolbar" color="primary" dark flat>
                          <v-spacer />
                          <v-toolbar-title>Personal Info</v-toolbar-title>
                          <v-spacer />
                        </v-toolbar>
                        <v-card-text>
                          <v-form @submit.prevent="onSubmit">
                            <div class="name-field">
                              <label class="field-label" for="fullName">Full Name</label>
                              <v-text-field class="field-input" v-model="fullName" id="fullName" placeholder="First and Last Name" name="fullName" type="text"/>
                            </div>
                            <div class="email-field">
                              <label class="field-label" for="streetAddress">Street Address</label>
                              <v-text-field class="field-input" v-model="streetAddress" id="streetAddress" placeholder="Street Address" name="streetAddress" type="text"/>
                            </div>
                            <div class="address-field">
                              <label class="field-label" for="address">Unit</label>
                              <v-text-field class="field-input" v-model="address" id="address" placeholder="Banani, Dhaka" name="address" type="text"/>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">City</label>
                              <v-text-field class="field-input" v-model="phone" id="phone" placeholder="+88 016XX XXXXXX" name="phone" type="text"/>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">Postal Code</label>
                              <v-text-field class="field-input" v-model="phone" id="phone" placeholder="+88 016XX XXXXXX" name="phone" type="text"/>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">Home Number</label>
                              <v-text-field class="field-input" v-model="phone" id="phone" placeholder="+88 016XX XXXXXX" name="phone" type="text"/>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">Phone (Work)</label>
                              <v-text-field class="field-input" v-model="phone" id="phone" placeholder="+88 016XX XXXXXX" name="phone" type="text"/>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">E-mail</label>
                              <v-text-field class="field-input" v-model="phone" id="phone" placeholder="+88 016XX XXXXXX" name="phone" type="text"/>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">Alterate E-Mail</label>
                              <v-text-field class="field-input" v-model="phone" id="phone" placeholder="+88 016XX XXXXXX" name="phone" type="text"/>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">Date of Birth</label>
                              <v-text-field class="field-input" v-model="phone" id="phone" placeholder="MM-DD-YYYY" name="phone" type="text"/>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">Role</label>
                              <v-col class="field-input" style="padding: 0px;">
                                <v-select :items="items" placeholder="Role" dense  v-model="role" id="role" name="role" type="text"></v-select>
                              </v-col>
                            </div>
                            <v-card-actions>
                            <v-spacer />
                            <v-btn type="submit" class="create-btn" color="primary">Create</v-btn>
                            <v-spacer />
                            </v-card-actions>
                          </v-form>
                        </v-card-text>
                      </v-card>
                      <!-- Playing Experience -->
                      <v-card class="elevation-12" style="width: 100%; margin: 10px auto; 0">
                        <v-toolbar class="v-toolbar" color="primary" dark flat>
                          <v-spacer />
                          <v-toolbar-title>Playing Experience</v-toolbar-title>
                          <v-spacer />
                        </v-toolbar>
                        <v-card-text>
                          <v-form @submit.prevent="onSubmit">
                            <label class="field-label" for="phone" style="width: 100%; text-align: left;">The highest level of ball I have played is:</label>
                            <div class="phone-field">
                              <label class="field-label" for="phone">SPN/SPO/NSA Category</label>
                              <v-col class="field-input" style="padding: 0px;">
                                <v-select :items="items" placeholder="Role" dense  v-model="role" id="role" name="role" type="text"></v-select>
                              </v-col>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">Preferred Position</label>
                              <v-col class="field-input" style="padding: 0px;">
                                <v-select :items="items" placeholder="Role" dense  v-model="role" id="role" name="role" type="text"></v-select>
                              </v-col>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">Years of Experience</label>
                              <v-col class="field-input" style="padding: 0px;">
                                <v-select :items="items" placeholder="Role" dense  v-model="role" id="role" name="role" type="text"></v-select>
                              </v-col>
                            </div>
                            <div class="password-field">
                              <label class="field-label" for="password">Comments on Experience</label>
                              <v-text-field class="field-input" v-model="password" id="password" placeholder="Password" name="password" type="password"/>
                            </div>
                            <v-card-actions>
                            <v-spacer />
                            <v-btn type="submit" class="create-btn" color="primary">Create</v-btn>
                            <v-spacer />
                            </v-card-actions>
                          </v-form>
                        </v-card-text>
                      </v-card>
                      <!-- Pitching Experience -->
                      <v-card class="elevation-12" style="width: 100%; margin: 10px auto; 0">
                        <v-toolbar class="v-toolbar" color="primary" dark flat>
                          <v-spacer />
                          <v-toolbar-title>Pitching Experience</v-toolbar-title>
                          <v-spacer />
                        </v-toolbar>
                        <v-card-text>
                          <v-form @submit.prevent="onSubmit">
                            <div class="name-field">
                              <label class="field-label" for="name">Name</label>
                              <v-text-field class="field-input" v-model="name" id="name" placeholder="Name" name="name" type="text"/>
                            </div>
                            <div class="email-field">
                              <label class="field-label" for="email">Email</label>
                              <v-text-field class="field-input" v-model="email" id="email" placeholder="email@gmail.com" name="email" type="text"/>
                            </div>
                            <div class="address-field">
                              <label class="field-label" for="address">Address</label>
                              <v-text-field class="field-input" v-model="address" id="address" placeholder="Banani, Dhaka" name="address" type="text"/>
                            </div>
                            <div class="phone-field">
                              <label class="field-label" for="phone">Phone</label>
                              <v-text-field class="field-input" v-model="phone" id="phone" placeholder="+88 016XX XXXXXX" name="phone" type="text"/>
                            </div>
                            
      <v-col class="d-flex" cols="12" sm="6">
        <v-select :myItems="myItems" label="Standard"></v-select>
      </v-col>
      <label for="">Select</label>
      <select id="cars" :items="items">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <!-- <option value="opel">Opel</option>
        <option value="audi">Audi</option> -->
      </select>
                            <div class="password-field">
                              <label class="field-label" for="password">Password</label>
                              <v-text-field class="field-input" v-model="password" id="password" placeholder="Password" name="password" type="password"/>
                            </div>
                            <v-card-actions>
                            <v-spacer />
                            <v-btn type="submit" class="create-btn" color="primary">Create</v-btn>
                            <v-spacer />
                            </v-card-actions>
                          </v-form>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-content>
						</form> 
					</div>
				</div>
			</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      address: '',
      phone: '',
      role: '',
      password: '',
      // items: ['Admin', 'User'],
      myItems: ['Foo', 'Bar', 'Fizz', 'Buzz']
    }
  }
}
</script>

<style stcope>
.register {
  background-color: #fff; 
  border-radius: 4px; 
  overflow: hidden;
  padding-bottom: 10px;
}
.sidebar {
  width: 440px;
  font-size: 90%;
  padding: 20px 0 0 20px;
  text-align: left;
  float: left;
}
.sidebar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.sidebar li {
  margin: 0;
  padding: 0;
}
.sidebar h2, .sidebar h3 {
  padding: 10px;
  background-color: #333333;
  color: #FFFFFF;
  font-size:15.1632px;
}
.sidebar li ul {
  padding-bottom: 30px;
}
.sidebar li li {
  /* border-bottom: 1px solid #D2D4C9; */
  border-bottom:none;
  border-left: 1px solid #D2D4C9;
  border-right: 1px solid #D2D4C9;
  padding: 10px;
  color: #787878;
  font-size: 12.96px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}
.content {
  float: right;
  width: 520px;
  padding: 20px 20px 0 0;
  font-family: Arial, Helvetica, sans-serif;
  color: #787878;
}
.post {
  margin-bottom: 8px;
  background-color: #EBEBEB;
  border: 1px solid #D2D4C9;
}
.post .menu {
  background-color: #EBEBEB;
}
.menu {
  height: 50px;
  margin: 0 auto;
  padding: 0;
}
.menu ul {
  margin: 0;
  padding: 0;
  padding-left: 10px;
  list-style: none;
}
.menu li {
  float: left;
  height: 50px;
}
.post .menu a:hover,
.post .menu li.current a {
  color: #FFFFFF;
  font-size:14.4px;
}
.menu a:hover, .menu li.current a {
  background-color: #AA1111;
}
.post .menu a {
  color: #000000;
  font-weight: bold;
  border: 1px solid #D2D4C9;
  font-size:14.4px;
}
.menu a {
  display: block;
  margin-top: 10px;
  margin-right: 5px;
  padding: 7px 18px;
  text-decoration: none;
}
.post .title {
  text-transform: uppercase;
  padding: 15px 20px 15px 20px;
  color: #000000;
  text-align: left;
  font-size:21.6px;
}
.post .entry {
  border-top: 1px solid #D2D4C9;
  padding: 0;
}
form {
  margin: 0;
  padding: 0;
}
.v-container {
  padding: 0 10px;
}
.v-toolbar {
  height: auto !important;
}
.v-toolbar__content {
  height: auto !important;
}
.v-toolbar__title {
  font-size: 14px;
}
.create-btn {
  width: 30%;
}
.name-field, .email-field, .address-field, .phone-field, .password-field {
  position: relative;
}
.field-label {
  display: inline-block;
  width: 30%;
  text-align: left;
  font-size: 14px;
  text-align: right;
  padding-right: 20px;
}
.field-input {
  display: inline-block;
  width: 68%;
  font-size: 14px;
}
.v-card__actions > .v-btn.v-btn {
    padding: 0 8px;
    background-color: #1976d2 !important;
    border-color: #1976d2 !important;
    font-weight: bold;
    font-family: Roboto, sans-serif;
}
</style>