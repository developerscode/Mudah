//Global Variables Declaration


$(document).ready(function () {

    $("#btnSearch").click(function () {
    var keyword = $('#searchtext').val();
    var region = $('#region_select').val();
    var group = $('#catgroup').val();

        window.open("ListingPage.html?q=" + keyword + "&ca=" + region + "&e=1&sa=&cg=" + group + "&female_subcat=&ps=&pe=&rs=&re=&o=0");

    });
    $("#btnback").click(function () {       

        window.open("Search.html");

    });

});
