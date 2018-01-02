$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/loadContent"
    }).then(function(data) {

        var template = loadTemplate("content_handlebars");
        var stone = Handlebars.compile(template)(data);

        $("#content_tempkate_anchor").append(stone);
    });


    $.ajax({
        url: "http://localhost:8080/loadContent"
    }).then(function(data) {

        var stone = renderTemplate("content_handlebars", data);

        $("#content_tempkate_anchor2").append(stone);
    });
});