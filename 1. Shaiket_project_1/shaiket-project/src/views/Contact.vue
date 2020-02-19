<template>
  <div class="contact">
    <div class="sidebar">
			<ul>
				<li>
          <v-card class="contact-v-card">
            <v-toolbar class="v-toolbar" color="" dark flat>
              <v-spacer />
              <v-toolbar-title style="font-size: 17.28px; font-weight: bold;">Mailing Address</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <div class="contact-input-field">
              <label class="field-label" for="contact_name">
                Markham Men's Slo-Pitch League<br><br>
                6579 Highway 7 <br>
                PO Box 77073 <br>
                Markham, ON <br>
                L3P 0C8 <br>
              </label>
            </div>
          </v-card>
				</li>
			</ul>
		</div>

    <div class="content">
      <div class="post">
        <!-- <h2 class="title">SEND AN EMAIL TO MMSPL</h2> -->
        <div class="entry">
          <v-app id="inspire" class="register-v-app">
            <v-form @submit.prevent="onSubmit" class="v-form">
              <v-content class="v-content">
                <v-container class="v-container" style="padding: 0;">
                  <v-row align="center" justify="center" style="width: 100%; margin: 0;">
                      <!-- Pitching Experience -->
                      <v-card class="contact-v-card" style="width: 80%; margin: 0 auto;">
                        <v-toolbar class="v-toolbar" color="" dark flat>
                          <v-spacer />
                          <v-toolbar-title>SEND AN EMAIL TO MMSPL</v-toolbar-title>
                          <v-spacer />
                        </v-toolbar>
                        <div class="contact-input-field">
                          <label class="field-label" for="contact_name">Your Name</label>
                          <v-text-field class="field-input" v-model="contact_name" id="contact_name" placeholder="F R Summit" name="contact_name" type="text"/>
                        </div>
                        <div class="contact-input-field">
                          <label class="field-label" for="contact_email">Your Email</label>
                          <v-text-field class="field-input" v-model="contact_email" id="contact_email" placeholder="example@email.com" name="contact_email" type="text"/>
                        </div>
                        <div class="contact-input-field">
                          <label class="field-label" for="contact_message">Your Message</label>
                          <v-text-field class="field-input" v-model="contact_message" id="contact_message" placeholder="Type your message" name="contact_message" type="text"/>
                        </div>
                      </v-card>
                  </v-row>
                </v-container>
              </v-content>
              <v-card-actions>
                <v-spacer />
                <v-btn type="submit" class="register-btn" color="primary" style="background-color: #333333 !important; border-color: #333333 !important;">Send Message</v-btn>
                <v-spacer />
              </v-card-actions>
            </v-form>
          </v-app>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style stcope>
.contact {
  background-color: #fff; 
  border-radius: 4px; 
  overflow: hidden;
  padding-bottom: 10px;
}
.contact .sidebar {
  font-size: 80%;
  float: left;
  padding: 20px 0 0 20px;
  width: 240px;
}
.contact .sidebar ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
.contact .sidebar li {
  margin: 0;
  padding: 0;
}
.contact .sidebar h2, 
.contact .sidebar h3 {
  padding: 10px;
  background-color: #333333;
  color: #FFFFFF;
  font-size: 17.28px;
}
.contact .sidebar li ul {
  padding-bottom: 30px;
}
.contact .sidebar li li {
  border-bottom: none;
  border-left: 1px solid #D2D4C9;
  border-right: 1px solid #D2D4C9;
  padding: 10px;
  color: #787878;
  font-size: 11.52px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}
.contact .sidebar li li:last-child {
  border-bottom: 1px solid #D2D4C9;
}
.contact .sidebar .v-toolbar {
  height: auto !important;
}
.contact .sidebar .v-toolbar__content {
  height: auto !important;
  padding: 8px 0;
}
.contact .sidebar  .field-label {
  width: 100%;
  font-size: 11.52px;
  text-align: left;
  padding: 10px;
}
.contact .content {
  float: right;
  width: 720px;
  padding: 20px 20px 0 0;
}
.contact .v-form {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
}
.contact .contact-v-card {
  color: #787878 !important;
  font-size: 11.52px !important;
  text-align: left !important;
  font-family: Arial, Helvetica, sans-serif !important;
}
.contact .v-card-pitching-experience .field-label {
  width: 20%;
}
.contact .v-card-pitching-experience .field-input {
  width: 70%;
}
.contact .field-input {
  display: inline-block;
  width: 68%;
  font-size: 14px;
  padding: 0;
  margin: 0;
}
.contact .field-label {
  display: inline-block;
  width: 30%;
  text-align: left;
  font-size: 14px;
  text-align: right;
  padding-right: 20px;
}
</style>