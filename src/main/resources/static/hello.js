
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8080/greeting"
    }).then(function(data) {
        $('.greeting-id').append(data.id);
        $('.greeting-content').append(data.content);
    });
});

function writeAlert(message) {
    var a = new Alert(this, message, {width: 150,height: 100,title: "Error",titleColor: "blue",bgColor: "white",textColor: "black",icon: "error",modal: true });
    a.show();

}