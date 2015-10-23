;(function($){

	 var defaults=
	 {
	 	Message:"Some Fields are empty.",
	 	Focus:true,
	 	ShowMessage:true
	 };


	$.fn.SM_Validate=function(options){

			var config=$.extend({},defaults,options);

			var isBlank=false;
			this.find('[data-validate="true"]').each(function(){
					var _val=$(this).val();
					if ( (_val=="") || (_val=="0") || (_val==0) )
					{
						isBlank=true;
						if (config.Focus==true)
						{
							$(this).css('border','1px solid red');
						}
					}
			});

			if (config.ShowMessage==true)
			{
				alert(config.Message);
			}
			if (config.ShowMessage==true)
			{
				return false;
			}
			else
			{
				return true;
			}

	};

}(jQuery));