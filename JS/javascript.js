$( document ).ready(function() {
    $("#showd").click(function(){
        $("#decisiv").show();
        $("#cisco").hide();
        $("#pegasus").hide();
        $("#tata").hide();
    });

    $("#showc").click(function(){
        $("#cisco").show();
        $("#decisiv").hide();
        $("#pegasus").hide();
        $("#tata").hide();
    });

    $("#showp").click(function(){
        $("#pegasus").show();
        $("#cisco").hide();
        $("#decisiv").hide();
        $("#tata").hide();
    });

    $("#showt").click(function(){
        $("#tata").show();
        $("#cisco").hide();
        $("#pegasus").hide();
        $("#decisiv").hide();
    });

});