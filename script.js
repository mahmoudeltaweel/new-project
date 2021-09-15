$("#iconside").click(function(){
    let widthsidebar= $(".leftside").outerwidth(true)

    if ($(".sidemenu").css("left")=="0px") {
        $(".sidemenu") .animate("left:-`${widthsidebr}`,1000);
        $("#iconside").removeClass("fa-list").addClass("rightside");
        ${ "ul li " }.animate({paddingtop:"30px"},1500)
    }
    else{
        $(".sidemenu").animate({left:`0px`},1000);
        $("#iconside").removeClass("rightside").addClass("fa-list");
        ${ "ul li " }.animate({paddingtop:"30px"},1500)

        
    }


})