$(function() {
  startShowPage();
});
function startShowPage(){
	
	var photo = $(".bubble");
	TweenMax.to(photo, 15, {css:{ marginTop:"-800px"}, repeat:-1 , yoyo:false, delay:0, ease:Power0.easeOut});

	var photo2 = $(".bubble2");
	TweenMax.to(photo2, 12, {css:{ marginTop:"-900px"},repeat:-1 ,yoyo:false,delay:0, ease:Power0.easeOut});
}
