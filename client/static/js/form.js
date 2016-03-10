(function ($) {
	$("fieldset").hide();
	$("fieldset.referrer").show();
	$("a.submitReferrer").click(function(){
		$("fieldset.referrer").hide();
		$("fieldset.customer").show();
	});	
	$("a.submitCustomer").click(function(){
		$("fieldset.customer").hide();
		$("fieldset.representative").show();
	});
		$("a.backCustomer").click(function(){
		$("fieldset.customer").hide();
		$("fieldset.referrer").show();
	});
	$("a.submitRepresentative").click(function(){
		$("fieldset.representative").hide();
		$("fieldset.visit").show();
	});
	$("a.backRepresentative").click(function(){
		$("fieldset.representative").hide();
		$("fieldset.customer").show();
	});
	$("a.submitVisit").click(function(){
		$("fieldset.visit").hide();
		$("fieldset.attachments").show();
	});
	$("a.backVisit").click(function(){
		$("fieldset.visit").hide();
		$("fieldset.representative").show();
	});
	$("a.backAttachments").click(function(){
		$("fieldset.attachments").hide();
		$("fieldset.visit").show();
	});

})($);


