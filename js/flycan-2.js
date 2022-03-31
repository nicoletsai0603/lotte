
$(function(){
	
//==當按到右上角的按鈕時 就會做 OPENOPEN 開啟選單的動作 ============================

	$("#btn").on("click", OPENOPEN ); //當使用者按右上角的按鈕
	
	function OPENOPEN(){
		$("#nav").slideToggle(300); //JQ 的功能： 可以拉上拉下開啟DIV
	}
	

//==當使用者把瀏覽器畫面拉大的時候 就會做 CLEARSTYLE 清除 JQ CSS 的動作 =============	
	
	$(window).on("resize",CLEARSTYLE); //當使用者拉瀏覽器畫面的大小時
	
	function CLEARSTYLE(){
		if($(window).innerWidth()>736){ //條件：如果瀏覽器畫面的寬度大於736px的時候
			$("#nav").attr("style",""); //就把 JQ 產生的 style CSS 清除乾淨
		}
	}
	
});


//JQ 的功能指令主要是直接用程式產生 CSS 寫入到 HTML 內部的 style 之內
//然而 JQ 產生的 HTML 內部 style CSS 容易跟我們寫的外部 CSS 產生衝突
//使用 attr("style","") 就可以把 JQ 產生的 style CSS 清除乾淨
