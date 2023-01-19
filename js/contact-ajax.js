
function checkForm(contactform)

{		


	//name
	
	if(contactform.name.value=="")
	{
		alert ('Please Enter Your Name!');
		contactform.name.focus();
		return false;
	}
	
	//companyname
	
	if(contactform.companyname.value=="")
	{
		alert ('Please Enter Your Company Name!');
		contactform.companyname.focus();
		return false;
	}
	
	//email
	if(contactform.email.value=="")
	{
		alert ('Please Enter Your Email Address!');
		contactform.email.focus();
		return false;
	}
	//tel
	if(contactform.tel.value=="")
	{
		alert ('Please Enter your phonr no.!');
		contactform.tel.focus();
		return false;
	}
	//brief
	if(contactform.brief.value=="")
	{
		alert ('Please Enter Your Brief Description!');
		contactform.brief.focus();
		return false;
	}
	
	return true;
}


