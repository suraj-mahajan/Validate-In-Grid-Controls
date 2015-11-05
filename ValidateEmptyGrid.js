;(function($){

	 var defaults=
	 {
	 	Message:"Some Fields are empty.",
	 	Focus:true,
	 	RequieMessage:"{FIELD} is Required Field"
	 };

	$.fn.SM_Validate=function(options){

			var config=$.extend({},defaults,options);

			var isBlank=false;
			var alerts="";
			$('body').append("<span class='ValClass'></span>");
			$('.ValClass').html('');

			this.find('[validate-type]').each(function(){

					var attr = $(this).attr('validate-type');

					var arr = attr.split(' ');

					for (i = 0; i < arr.length; i++) 
					{
						var CurrentVal=arr[i].trim();

							if (CurrentVal=="empty")
							{
								var _val=$(this).val();
								
								if ($(this).attr('type')=="checkbox")
								{
									if($(this).is(':checked')!=true)
									{
										////// Emplementetion Pending Set Each on name then find count and validate on  clount of 0
									}
								}

								if ( (_val=="") || (_val=="0") || (_val==0) )
								{
									isBlank=true;
									var attrName = $(this).attr('name');

									if (typeof attrName !== typeof undefined && attrName !== false)
									{
										var RequieMessage=config.RequieMessage.replace('{FIELD}',attrName)
										CheckEmpty($(this),RequieMessage);
									}
									else
									{
										CheckEmpty($(this),"");
									}
								}
								else
								{
									RevertValdationStyle($(this));
								}
							}


						 	if (CurrentVal=="email")
						 	{
						 		var email=$(this).val();
						 		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	  							var EmailResult= regex.test(email);
	  							if (EmailResult==false)
	  							{
	  								if (email!="")
	  								{
										 var attrName = $(this).attr('name');
										 if (typeof attrName !== typeof undefined && attrName !== false)
										 {
										 	var RequieMessage=attrName +" ID Is Not Valied";
										 	CheckEmpty($(this),RequieMessage);
										 }
										 else
										 {
										 	CheckEmpty($(this),"");
										 }
									}
								}
								else
								{
									RevertValdationStyle($(this));
								}
						 	}

						 	if (CurrentVal=="url")
						 	{
						 		var url=$(this).val();
								var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
							    var UrlResult =regexp.test(url);
								if (UrlResult==false)
	  							{
									if 	(url!="")
									{
										 var attrName = $(this).attr('name');
										 if (typeof attrName !== typeof undefined && attrName !== false)
										 {
										 	var RequieMessage=attrName+" Is Not Valied";
										 	CheckEmpty($(this),RequieMessage);
										 }
										 else
										 {
										 	CheckEmpty($(this),"");
										 }
									}
								}
								else
								{
									RevertValdationStyle($(this));
								}
						 	}

						 	if (CurrentVal=="mobile")
						 	{
						 		var url=$(this).val();
								var regexp = /[0-9\-\(\)\s]+/
							    var UrlResult =regexp.test(url);
								if (UrlResult==false)
	  							{
									if (url!="")
									{
										 var attrName = $(this).attr('name');
										 if (typeof attrName !== typeof undefined && attrName !== false)
										 {
										 	var RequieMessage=attrName +" Is Not Valied";
										 	CheckEmpty($(this),RequieMessage);
										 }
										 else
										 {
										 	CheckEmpty($(this),"");
										 }
									 }
								}
								else
								{
									RevertValdationStyle($(this));
								}
						 	}
					}

			});
			
			function ErrorMessage(left,top,messsage)
			{
				var Message="<div OnClick='$(\".Error_"+left +"_"+top+"\").remove();' class='Error_"+left +"_"+top+"'><div style='cursor: pointer;text-shadow: 1px 1px black;;background-color:red;box-shadow: 2px 2px 1px #888888;border-radius: 5px;;font-family:arial;padding:5px;font-size:10px;color:white;position:absolute;;left:"+ left +"px;top:"+top+"px;'>"+ messsage +"</div>";
				Message +="<div style='margin-left:-10px;position:absolute;left:"+ left +"px;top:"+parseInt(top+4) +"px;border-top: 7px solid transparent;border-right: 15px solid red;border-bottom: 5px solid transparent;'></div></div></div>";
				return Message;
			}

			function RevertValdationStyle(t)
			{
				//t.css('border','1px solid gray');
			}
			function CheckEmpty(t,ValMessage)
			{
				if (config.Focus==true)
									{
										var textbox = jQuery(t);
										var offset = textbox.offset();
										var left=offset.left + t.width() + 20;
										
										$('.ValClass').append(ErrorMessage(left,offset.top,ValMessage));
									}
									else
									{
										t.css('border','0px');
									}
				alerts +="\n "+ ValMessage;
							
			}
	};

}(jQuery));
