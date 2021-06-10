var folder = "img/photography/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                $("#images").append("<img class='photo' src='"+ folder + val +"'>" );
            } 
        });
    }
});