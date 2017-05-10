app.controller('fullController',function($scope){
$scope.student={
    fname : "",
    lname : "",
    subject : [
{"name":"Tamil","marks":"99"},
{"name":"English","marks":"98"},
{"name":"Maths","marks":"97"},
{"name":"Physics","marks":"96"},
{"name":"Chemistry","marks":"95"},
{"name":"Computer Science","marks":"99"}
    ],
    fullname : function(){
        return $scope.student.fname+" "+$scope.student.lname;
    }
}
});