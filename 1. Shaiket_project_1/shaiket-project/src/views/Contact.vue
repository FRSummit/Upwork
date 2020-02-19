<template>
  <div class="contact">
    <div class="sidebar">
			<ul>
				<li>
					<h2>Mailing Address</h2>
					<ul>						
						<li>Markham Men's Slo-Pitch League<br><br>
                6579 Highway 7 <br>
                PO Box 77073 <br>
                Markham, ON <br>
                L3P 0C8 <br>
            </li>
					</ul>
				</li>
			</ul>
		</div>

    <div class="content">
      <div class="post">
        <!-- <h2 class="title">SEND AN EMAIL TO MMSPL</h2> -->
        <div class="entry">
          <v-app id="inspire" class="register-v-app">
            <v-form @submit.prevent="onSubmit">
              <v-content class="v-content">
                <v-container class="v-container">
                  <v-row align="center" justify="center">
                    <v-col>
                      <!-- Pitching Experience -->
                      <v-card class="contact-v-card" style="width: 80%; margin: 10px auto; 0">
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
                    </v-col>
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
.sidebar {
  font-size: 80%;
  float: left;
  padding: 20px 0 0 20px;
  width: 240px;
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
  font-size: 17.28px;
}
.sidebar li ul {
    padding-bottom: 30px;
}
.sidebar li li {
  border-bottom: none;
  border-left: 1px solid #D2D4C9;
  border-right: 1px solid #D2D4C9;
  padding: 10px;
  color: #787878;
  font-size: 11.52px;
  text-align: left;
  font-family: Arial, Helvetica, sans-serif;
}
.sidebar li li:last-child {
  border-bottom: 1px solid #D2D4C9;
}
.content {
  float: right;
  width: 720px;
  padding: 20px 20px 0 0;
}
.contact-v-card {
  color: #787878 !important;
  font-size: 11.52px !important;
  text-align: left !important;
  font-family: Arial, Helvetica, sans-serif !important;
}
.v-card-pitching-experience .field-label {
  width: 20%;
}
.v-card-pitching-experience .field-input {
  width: 70%;
}
</style>