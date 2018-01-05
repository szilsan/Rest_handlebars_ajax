var pingServer = function() {
    window.alert("akarmi");
    $.ajax({
        url: "http://localhost:8080/ping"
    }).then(function (data) {
        window.alert(data);
    });
}