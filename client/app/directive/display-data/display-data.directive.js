'use strict';

angular.module('angularFullstack2App')
    .directive('displayData', function ($timeout,Display,$http,socket,$location,pageCtrlSrv,$filter) {
    return {
      templateUrl: 'app/directive/display-data/display-data.html',
      restrict: 'EA',
      scope:{
        source:'='
      },
      link: function (scope, element, attrs) {
        
        //Define Global variables for this directive
        var DisplayName = 'pinterest_grid';
        //ng-model defined for status 
        scope.data_status  = "";
        scope.status_show  = false;
        // Collect User Geo Location using geo-location element    
        scope.getLatitude  = '';
        scope.getLongitude = '';
        scope.busy         = false;
        scope.after        = '';
        scope.payload      = [];
        scope.loc          = document.querySelector('geo-location');
        
        console.log("scope.source.user :: ",scope.source.user);


        //pagination parameters  
        scope.totalList   = false;
        scope.searchBox   = false;
        scope.totalItems  = '';
        scope.currentPage = 1;
        scope.pageSize    = 8;
        scope.maxSize     = 10; //pagination max size is 10

        //search pagination
        scope.searchItems    = '';

        //search pagination event
        $(document).on('keyup','#input-search',function(){
          scope.searchPag=true;
          scope.searchflip = true;
          $('#searchPag').show();
          $('#searchflip').show();
          var searchField = $('#input-search').val();
            if(searchField == ''){
              scope.searchPag=false;
              scope.searchflip = false;
              $('#searchPag').hide();
              $('#searchflip').hide();
            }      
         });

        scope.suburb = [];
        //Methods
        scope.loaddata  = function (){
          if (scope.busy) return;
          console.log("scope.busy is:: ", scope.busy)
          scope.busy = true;
           console.log("scope.busy is:: ", scope.busy)
           console.log("I am scrolling")
           // scope.calculate(); 
          $http.get(scope.source.url+scope.source.layout).success(function(data) {
            var items = data;
            for (var i = 0; i < items.length; i++) {
              scope.payload.push(items[i]);
            }
            scope.after = "t3_" + scope.payload[scope.payload.length - 1]._id;
            console.log("scope.after ", scope.after)
            scope.busy = false;
             console.log("scope.busy is:: ", scope.busy)
          });
         };

         scope.getDetails =  function(route,id,path){
          // // alert(path);
  
          pageCtrlSrv.getFoodID = id;
          $location.path(route);
         }
        scope.getUser   = function (id){
          var user_name = [];
          // first check if it is a valid id or not
          // console.log("user id is :: ", isNaN(id[0]));
          if (!isNaN(id[0])){
            $http.get('/api/users/user/'+id).success(function(user){
              console.log("user is ::", user);
              if (user !== undefined){
                console.log("user.name is :: ", user.name);
                user_name.push(user.name);
                console.log("user name is :: ", user_name);
              }
            })
          }else{
            user_name = id;
          }
          return user_name;
         } 
        scope.calculate = function () {
          console.log("calculate executed");
          // console.log("element passed on was :: ", element);
          // console.log("attrs passed on was :: ", attrs);
          // console.log("innerHTML passed on was :: ", element[0].children); 
          var test = new Display();
          // console.log("test is ::: ", test) 
            // console.log("test.test() is ::: ", test.test()); 
              $('#pinBoot').pinterest_grid({
                  no_columns: 4,
                  padding_x: 10,
                  padding_y: 15,
                  margin_bottom: 55,
                  single_column_breakpoint: 701
                 });
         };
        scope.filter    = function (){
          $timeout(function() { 
            //wait for 'filtered' to be changed
            /* change pagination with $scope.filtered */
            scope.searchItems= scope.filtered.length;
            scope.totalItems = Math.ceil(scope.filtered.length/scope.pageSize);
           }, 10);
         };
        scope.splitData = function (data){
          var loc;
          if(data.location == "" || data.location == undefined){
            return;
          }else{
            loc = data.location.split(",");
            console.log("location is : ",loc);
            scope.suburb.push(loc[0]);
            data['location'] = loc[0]
            return data;
            // console.log("suburb is  after split", scope.suburb);
          }
         };
        scope.sortField = function (field,searchItem){
          console.log("fields :: ", field);
          console.log("searchItem :: ", searchItem);
          
          $http.get(scope.source.url+'/sorts/'+field,{
            params:{
              search:searchItem
            }
          }).success(function (sortedData){
            console.log(sortedData)
            scope.payload = sortedData;
            //run this code to break down splited data on location array if available
            _.map(scope.payload,scope.splitData);
            scope.calculate();
            }
           )
          // alert(field);
          // socket.syncUpdates(scope.source.model,scope.payload);
          
         };
        //pagination and page control functions
        scope.setTotalItems  = function (){
          scope.totalItems= scope.payload.length;
         };
        scope.showAll        = function (){
          scope.totalItems= scope.payload.length;
          scope.search='';  
          scope.totalList=true;
          scope.searchBox=true;
            $('#searchPag').hide();
            $('#searchflip').hide();
         };
        scope.searchData     = function (){
            scope.currentPage =1;
            scope.pageSize = 8;
            scope.totalList=false;
            scope.searchBox=false;
            $('input:checkbox').removeAttr('checked');
           };

        //check if geo bind data is required or not
        if(scope.source.geo){
          if(scope.getLatitude ==='' && scope.getLongitude ===''){
            scope.loc.addEventListener('geo-response', function(e) {
            //get logged in user latitude and longitude 
            scope.getLatitude  = this.latitude;
            scope.getLongitude = this.longitude;
            // console.log('lat:' + scope.getLatitude,'lng:' + scope.getLongitude);
          
            //get all data from db and check
            $http.get(scope.source.url).success(function(data){
              //check this if data might needs to be retrieved from array inside models in mongodb, so data massaging requires
              if(scope.source.array){

              }else{
                // console.log("food total data is ", data);
                  _.each(data,function(d){
                  // console.log("d.latitude is ::: ", d.latitude)
                  // console.log("d.longitude is ::: ", d.longitude)
                  
                  // execute to get username from id still some work need to be done
                  // d['created_by'] = scope.getUser(d.created_by);
              
                  $http.post('/getDistance',{
                    latitude:scope.getLatitude,
                    longitude:scope.getLongitude,
                    foodLat :d.latitude ,
                    foodLong:d.longitude 
                  }).success(function(data){
                    // console.log("You are within 5 Km radius :: ", data)
                    //check if food is within 5 km then display
                    if(data){
                      scope.payload.push(d);
                       // socket.syncUpdates(scope.source.model,scope.payload);
                      scope.calculate();
                    }
                  })//end of POST success
                })//end of each
                }//end of model array if-else   
               })//end of get Success
             })//end of loc EventListener
          }else{
            scope.status = "NO DATA available around your area";
           }
        }else{
          // if this being applied on user page where user specific data will be displayed only
          if(scope.source.user !== undefined){

            //check if request came from order db and also check whic page to display data 
            //this condition will be used to keep track of order records for some one buying or selling product  
            if (scope.source.model == 'order' && scope.source.order =='sell'){
              $http.get(scope.source.url+'trackorders/',{
                params:{
                  loggedin_user : scope.source.user,
                  ordertype : scope.source.order 
                }
              }).success(function(data){
                console.log("user specific data on order is :: ", data);
                    //user data found
                    if(data.length !==0){
                      scope.payload = data;
                      //run this code to break down splited data on location array if available
                      _.map(scope.payload,scope.splitData);
                      scope.calculate();
                    }else{
                      scope.status_show = true;
                      // console.log("You dont have any item's of your own");
                      scope.data_status = "No orders record found to process";
                  }//end of if-else data found
               socket.syncUpdates(scope.source.model,scope.payload);
             })//end of get Success

            }else{
              $http.get(scope.source.url+'usrdata',{
                params:{
                  loggedin_user:scope.source.user
                }
              }).success(function(data){
                console.log("user specific data in forage is :: ", data);
                //check this if data might needs to be retrieved from array inside models in mongodb, so data massaging requires
                if(scope.source.array){
                  // alert("I am here in forage");
                    //user data found
                    if(data.length !==0){           
                      data.forEach(function(eachItem){
                        // console.log("eachItem in array cluster inside data is :: ", eachItem.items);
                        eachItem.items.forEach(function(item){
                          scope.payload.push(item);
                        })
                        
                      });
                      // scope.payload = data;
                      scope.calculate();
                    }else{
                      scope.status_show = true;
                      // console.log("You dont have any purchase record");
                      scope.data_status = "You dont have any purchase record";
                    }//end of if-else data found
                }else{
                    //user data found
                    if(data.length !==0){
                      scope.payload = data;
                      scope.calculate();
                    }else{
                      scope.status_show = true;
                      // console.log("You dont have any item's of your own");
                      scope.data_status = "You dont have any item's of your own";
                  }//end of if-else data found
                }//end of model array  
               socket.syncUpdates(scope.source.model,scope.payload);
             })//end of get Success
           }//end orders conditions
          }else{
            // console.log("No user, No geo or pagination defined");
              //get all foods data from db and check
              if (scope.source.layout ==='infinite'){
                $http.get(scope.source.url+'pagination').success(function(data){
                  scope.payload = data;
                  //run this code to break down splited data on location array if available
                   _.map(scope.payload,scope.splitData);
                  scope.calculate();
                  socket.syncUpdates(scope.source.model,scope.payload);
               })//end of get Success
              }else{
                $http.get(scope.source.url).success(function(data){
                  // console.log("data is : ", data);
                  // console.log(d.location);
                    scope.payload = data;
                  //run this code to break down splited data on location array if available
                  _.map(scope.payload,scope.splitData);
                   // console.log("suburb is  after split", scope.suburb);
                  // console.log("scope.payload is ", scope.payload.location);
                  scope.calculate();
                  socket.syncUpdates(scope.source.model,scope.payload);
               })//end of get Success
              }
            }//end of scope.source.user if-else      
        }

        //run this directive local calculate function to reinitialize Display class as data changes
        //On Socket notification update page
        socket.socket.on('modelchange',function(data){
          console.log("modelChange data ",  data)
          socket.syncUpdates(scope.source.model,scope.payload);
          scope.status_show  = false;
          scope.calculate();
         }); 
        socket.socket.on('privacyPrivate',function(data){
          console.log("privacyPrivate data ",  data)
          socket.syncUpdates(scope.source.model,scope.payload);
          scope.calculate();
         }); 
        socket.socket.on('orderprocessed',function(data){
          // console.log("orderprocessed data ",  data)
          // socket.syncUpdates(scope.source.model,scope.payload);
          // scope.calculate();
         }); 
        
        //Instantiate Display  
        $.fn[DisplayName] = function (options) {
          // console.log("this here is :: ", this)
          return this.each(function () {
              if (!$.data(this, 'Display_' + DisplayName)) {
                  $.data(this, 'Display_' + DisplayName,
                  new Display(this, options,DisplayName,scope.payload));
              }
          });
          };
        // console.log("$.fn :: ", $.fn[DisplayName]);
        //use pinterest style grid here    
        $('#pinBoot').pinterest_grid({
          no_columns: 4,
          padding_x: 10,
          padding_y: 10,
          margin_bottom: 50,
          single_column_breakpoint: 700
         });

        
        // scope.reddit.nextPage();
        // scope.calculate();
         
        //on directive load function run
        setTimeout(function(){
          scope.setTotalItems();
         },100);       
            
      }
    };
  });