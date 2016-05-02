'use strict';

angular.module('angularFullstack2App')
 .directive('displayControl', function ($http,socket,Auth) {
    return {
      templateUrl: 'app/directive/display-control/display-control.html',
      restrict: 'EA',
      scope:{
        data:'=',
        item : '='
      },
      link: function (scope, element, attrs) {

        //get user info
        scope.getCurrentUser = Auth.getCurrentUser;

        console.log("data is :", scope.data);

        //get defined item name from initial array fields
        var itemName       = scope.data.fields[1].name,
            itemInfo       = scope.data.fields[2].name,
            itemCost       = scope.data.fields[3].name,
            itemOptional1  = scope.data.fields[4].name,
            itemOptional2  = scope.data.fields[5].name,
            itemCreated_at = scope.data.fields[scope.data.fields.length-1].name;

        // console.log("itemName is :", itemName);
        
        // Functions interating with api calls and rendering pages

        scope.location      = function (id){
          alert(id);
         };
        scope.callUser      = function (id){
          alert(id);
         };
        scope.makeFav       = function (id){
          alert(id);
          //check if 
         $http.put('/api/goals/'+id,{
             isFav:true
          })
         };    
        scope.togglePrivacy = function (id){
          console.log("food id is : " , id);
          $http.get(scope.data.url+id).success(function(gotData){
            if (gotData.privacy == 'private'){
              $http.put(scope.data.url+id,{
                privacy:'public'
               }).success(function(data){
                 socket.socket.emit('datachange',{data:'privacy changed'});
               });
             }else{
              $http.put(scope.data.url+id,{
                privacy:'private'
               }).success(function(data){
                 socket.socket.emit('dataRemoved',{data:'privacy is private'});
               });
             }
            });
          
         };
        scope.like          = function (id){
          alert(id);
         };
        scope.disLike       = function (id){
          alert(id);
         };
        scope.addtoCart     = function (id){
          $http.get(scope.data.url+id).success(function(gotData){
            console.log("name is :", gotData[itemCreated_at]);
            console.log("gotData :: ",  gotData);
            $http.post('/api/carts/',{
              name:gotData[itemName],
              info:gotData[itemInfo],
              produced_by:gotData.created_by,
              produced_by_id:gotData.created_by_id,
              created_at:gotData[itemCreated_at],
              latitude:gotData.latitude,
              longitude:gotData.longitude,
              location: gotData[itemOptional2] || 'Sydney',
              img:gotData.img,
              cartstatus:"not completed",
              available:gotData.available,
              saved:false,
              carted_by:scope.getCurrentUser().name,
              carted_by_id:scope.getCurrentUser()._id,
              quantity:4,
              carted_at:new Date(),
              cost:gotData[itemCost],
              genre:gotData[itemOptional1]
            }).success(function(postData){
              //send socket data to re calculate cart cost
              socket.socket.emit("carted",{cost:postData.cost,quantity:postData.quantity});
            })
            

          });
         }; 
        scope.showTask      = function (id){
          scope.taskdata = '';
          $http.get('/api/tasks/goals/'+id).success(function(data){
              // console.log("task for this id is :", data);
              scope.taskdata = data;
              socket.syncUpdates('task', scope.taskdata);
          })
          var id = "taskListDiv-"+id
          // console.log("id made is :", id)
          $('.taskListClass').hide()
          $("#"+id).delay(200).fadeToggle("slow")
         };  
        scope.scan          = function (id){
          alert(id);
         };
        scope.mailModal     = function (){
          scope.formdata = {};
          document.getElementById('emailModal').toggle();
           // scope.sendMail(to,from,subject,text);
         };    
        scope.sendMail      = function (){
          setTimeout(function(){
            $http.post("/api/emails/", {
                to:scope.formdata.mailTo,
                from:"nodemailer.me@gmail.com",
                subject:scope.formdata.mailSubject,
                text:scope.formdata.mailText,
                created_at:new Date(),
                created_by:scope.getCurrentUser()._id  
              }).success(function(email){
              console.log(email)
            }); 
              // console.log(scope.formdata.mailTo,"nodemailer.me@gmail.com",scope.formdata.mailSubject,scope.formdata.mailText)
              // alert("I have been clicked"); 
            },200);
         };    
        }//end of Link
     };//end of Return    
});