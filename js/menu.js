
$(function(){

	$("#btn").on("click", OPENOPEN );
	
	function OPENOPEN(){
		$("#nav").slideToggle(300);
	}
	
	$("#nav li:nth-child(1) a").on("click", CLO );
	
	function CLO(){
		$("#nav").attr("style","");
	}
	
	$(window).on("resize",CLEARSTYLE);
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){
			$("#nav").attr("style","");
		}
	}
	
});

