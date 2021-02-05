/* eslint-disable */
/* eslint no-unneeded-ternary: "error" */
<template>
<div class="container">
   <!-- <span class="emoji">🚧<h1 class="title">CONTACT US</h1>🚧</span>-->
   <!-- <b-container class="form-container"> -->
    <b-form name="contact" class="form-container" action="" method="POST" netlify-honeypot="bot-field" data-netlify="true">
        <input type="hidden" name="form-name" value="contact"/>
        <!-- <label class="form-label" for="name">Name: </label>
        <b-form-input id="name" class="form-field" name="name" placeholder="Enter your name" :state="false"></b-form-input>
        <label class="form-label" for="email">Email: </label>
        <b-form-input id="email" class="form-field" name="email" placeholder="Enter email" :state="false"></b-form-input>
        <label class="form-label" for="message">Message: </label>
        <b-form-textarea id="message" class="form-field"  placeholder="Message..." rows="5" :state="false"></b-form-textarea> -->
        <b-form-group label="Name: " label-for="name" label-rows-sm="2" label-align-sm="left" valid-feedback="Thank you!" :invalid-feedback="invalidNameFeedback" :state="nameState">
            <b-form-input id="name" v-model="nameField" class="form-field" name="name"  placeholder="Enter your name" :state="nameState" required trim></b-form-input>
        </b-form-group>
        <b-form-group label="Email: " label-for="email" label-rows-sm="2" label-align-sm="left" valid-feedback="Thank you twice" :invalid-feedback="invalidEmailFeedback" :state="emailState"> 
            <b-form-input id="email" v-model="emailAdress" class="form-field" name="email" type="email" placeholder="Enter email" :state="emailState" required trim></b-form-input>
        </b-form-group>
        <b-form-group label="Message: " label-for="message" label-rows-sm="2" label-align-sm="left" valid-feedback="Thank you trice!" :invalid-feedback="invalidMessageFeedback" :state="messageState">
            <b-form-textarea id="message" v-model="msgText" class="form-field"  placeholder="Message..." rows="5" :state="messageState" required trim></b-form-textarea>
        </b-form-group>
        <b-button type="submit" class="form-button"  variant="info">Send Message</b-button>
    </b-form>
   <!-- </b-container> -->
</div>
</template>


<script>
export default {
        data(){
        return{
            nameField: '',
            emailAdress: '',
            msgText: ''
        }
    },
    computed: {
        nameState(){
            if(this.nameField.length === 0){
                return null
            }
            else{
              const isNameValid = this.nameField.length >= 4;
              return  isNameValid
              } 
        },
        invalidNameFeedback(){
            if(this.nameField.length > 0){
                return 'Enter at least 4 characters.'
            }
            return 'Please enter something.'
        },
        // TODO: FIX THE EMAIL VALIDATION
        emailState(){ 
            const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            const isMailValid = this.emailAdress.match(mailFormat)
            return isMailValid
            
        },
        invalidEmailFeedback(){

            if(this.emailAdress.length > 0){
                return 'Please enter your email'
            }
            return 'Please enter a valid email'
        },
        messageState(){
            if(this.msgText.length === 0){
                return null
            }
            else{
              const isMsgValid = this.msgText.length >= 20;
              return  isMsgValid
            } 
        },
        invalidMessageFeedback(){
            if(this.msgText.length > 0){
                return 'Enter at least 20 characters.'
            }
            return 'Please enter a message you want to send.'
        } 
    }
}
</script>

<style scoped>
.form-container{
    width: 50%;
    margin: 0 15px; 
    justify-content: center;
    align-content: center;
    align-items: center;
    position: relative;   
}
.form-button{
    padding: 0.375rem 0.75rem;
    margin-top: 0.5rem;
}
</style>