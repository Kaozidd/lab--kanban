// SELECTING ALL FORM ELEMENTS

var form = document.forms.registrationForm
var username = document.forms['registrationForm']['username']
var password = document.forms['registrationForm']['userpassword']
var passConfirm = document.forms['registrationForm']['confirmpassword']
var taxId = document.forms['registrationForm']['taxid']
var type = document.forms['registrationForm']['account']
var terms = document.forms['registrationForm']['termsofservice']

// SELECTING ALL ERROR DISPLAY MESSAGES

var username_error = document.getElementById('validation--username')
var password_error = document.getElementById('validation--user-password')
var passConfirm_error = document.getElementById('validation--confirm-password')
var taxId_error = document.getElementById('validation--tax-id')
var type_error = document.getElementById('validation--account')
var terms_error = document.getElementById('validation--terms-of-service')
var form_error = document.getElementById('validation--entire-form')

// SETTING ALL EVENT LISTENERS

// username.addEventListener('blur', nameVerify, true)
// password.addEventListener('blur', passwordVerify, true)
// passConfirm.addEventListener('blur', passConfirmVerify, true)
// taxId.addEventListener('blur', taxIdVerify, true)
// type.addEventListener('blur', typeVerify, true)
// terms.addEventListener('blur', termsVerify, true)

// VALIDATION FUNCTION

form.addEventListener('submit', function(evt){
	evt.preventDefault()
	form_error.textContent = ""
	// VALIDATE USERNAME
	if (username.value == ""){
		username_error.textContent = "Username cannot be blank"
	} else {
		username_error.textContent = "Success"		
	}
	// VALIDATE PASSWORD
	if (password.value.length<8){
		password_error.textContent = "Password must have a minimum of 8 characters"
	} else {
		password_error.textContent = "Success"		
	}
	// VALIDATE CONFIRMATION PASSWORD
	if (passConfirm.value != password.value){
		passConfirm_error.textContent = "Passwords must match"
	} else if (passConfirm.value == ""){
		passConfirm_error.textContent = "Please confirm your password"
	} 
	else {
		passConfirm_error.textContent = "Success"		
	}
	// VALIDATE TAXID
	if (taxId.value == ""){
		taxId_error.textContent = "Must provide Tax ID Number"
	} else if (parseInt(taxId.value).toString().length !== 10){
		taxId_error.textContent = "Tax ID number is only numbers and is 10 digits"
	} else {
		taxId_error.textContent = "Success"
	}
	// VALIDATE TYPE
	if (type.selectedIndex === 0){
		type_error.textContent = "Must select account type"
	} else {
		type_error.textContent = "Success"
	}
	if (terms.checked == false){
		terms_error.textContent = "Must approve terms of service"
	} else {
		terms_error.textContent = "Success"
	}
	if (
		username.value !== ""
		&& password.value.length >= 8
		&& passConfirm.value === password.value
		&& parseInt(taxId.value).toString().length === 10
		&& (type.selectedIndex !== 0)
		&& terms.checked === true){
		form_error.textContent = "Form Complete"
	}
})