app.controller('carController',function($scope){

$scope.getCars = function () {
    $.ajax({
        type: "POST",
        url: "http://localhost:63888/Service1.svc/GetCars",
        data: "{}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var parsed = $.parseJSON(data.d);
            $.each(parsed, function (i, jsondata) {
                $("#showdata").append("Name: " + jsondata.name + "<br/>" + "Description: " + jsondata.description);
            });
        },
        error: function (XHR, errStatus, errorThrown) {
            var err = JSON.parse(XHR.responseText);
            errorMessage = err.Message;
            alert(errorMessage);
        }
    });
};

$scope.InsertCar = function () {
    var carData = {"Name": $("#Text1").val(),"Description":$("#Text2").val()};
    $.ajax({
        type: "POST",
        url: "http://localhost:63888/Service1.svc/InsertCars",
        data: carData,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function () {
                alert("Row inserted");
        },
        error: function (XHR, errStatus, errorThrown) {
            alert(errorMessage);
        }
    });
};
});