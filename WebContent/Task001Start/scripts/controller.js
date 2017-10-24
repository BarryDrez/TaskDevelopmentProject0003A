'use strict';
/**
* Task001Start
* 
* This function provides an AngularJS Controller for the gadget. It should contain the business logic to control the flow of the data in the gadget. 
* Refer to https://docs.angularjs.org/guide/controller
*/
     var Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_Controller = BaseController.extend({
       /**  Object to define the REST URLs to connect to
       */
       URLS:{ 
              REST_URL_GET:{url: 'http://localhost:8585/rest',method:'GET', isArray:true},
              PROCESS_TYPES_GET:{url: '/rest/rs/monitor/process/model',method:'GET', isArray:true}
       },
       
       /** Constructor function to handle the initialization of the controller. 
       */
       init : function($scope, restClient,eventBus,log,config, $builder) {
       try{
              /*
              * Initialize the BaseController with the $scope, eventBus and restClient object 
              */
              this._super($scope,eventBus,restClient);
              this.$scope.config = config;
              this.$scope.restClient = restClient;
              this.$scope.eventBus = eventBus;
              this.$scope.URLS = this.URLS;
              this.$scope.form = $builder.forms['default'];
              this.$scope.$builder=$builder;
              this.$scope.registerAndShowComponents();
              
              
              /* Initialize scope functions here, if required.
              */
              //this.$scope.restInvocation();

              this.$scope.instance = "Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_Controller";
              
              }
              catch(exception){
                               console.error("Gadget Exception in init block of Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_Controller: "+exception);
                                }
              
       },
       
       defineListeners:function(){
              this._super();

       },
       destroy : function(event) {
       },
       _handleEvents:function(eventType,payload,context){
              
       },
       defineScope : function() {
       try{
              var _this=this;
              this.$scope.registerAndShowComponents=function(){
            	  
            	  
       		      var taskTypeID = "512e62bd-5855-4429-b855-ccee2315c464";
       		      _this.$scope.taskTypeId=taskTypeID;
       		      _this.restClient.url("/rest/bc/taskTypes/businessDataFields/"+taskTypeID)
    			 .remote(false)
    	         .scope(_this.$scope)
    			 .method("GET")
    			 .success(function(response, $scope, status, headers, config){
    				console.log("");
    				if( response &&  response.taskBusinessDataField&& Object.prototype.toString.call( response.taskBusinessDataField ) === '[object Array]' ) {
    					angular.forEach(response.taskBusinessDataField, function(value, key) {
    						_this.$scope.$builder.registerComponent(taskTypeID+"___"+value.fieldName+"___"+value.displayFieldName, {
    		                    group: 'Business Data Controls',
    		                    label: value.displayFieldName,
    		                    description: 'From html template',
    		                    placeholder: 'placeholder',
    		                    required: false,
    		                    templateUrl: '/aa_cbt_app/gadgets/FormBuilder/templates/businessDataElementTemplate.html',
    		                    popoverTemplateUrl: '/aa_cbt_app/gadgets/FormBuilder/templates/businessDataPropsTemplate.html'
    		                  });
    					});
    				}else if( response &&  response.taskBusinessDataField){
    						var value = response.taskBusinessDataField;
    				}
    				
    				
				var restMetaData = [];
				              angular.forEach(restMetaData, function(value, key) {
				                  value.id=value.component;
				            	  _this.$scope.$builder.addFormObject('default',value);
				              });
    				
    			 }).error(function(response,$scope,status, headers, config){
    			    console.log("Error Showing BD");
    			 }).invoke();   
              }
              
              this.$scope.saveFormData=function(){
            	  //console.log(_this.$scope.formData);
            	  var formData = {};
            	  var taskData={};
            	  formData.taskTypeID=_this.$scope.taskTypeId;
            	  angular.forEach(_this.$scope.formData, function(elem, key) {
            		  //taskData[elem.label]=elem.value;
            		  var key = elem.id.split("___")[2];
            		  taskData[key]=elem.value; 
            		  
				  });
            	  formData["taskData"]=taskData;
            		  
            		  
            	  _this.restClient.url("/rest/pub/opentask")
   				 .remote(false)
   		         .scope(_this.$scope)
   				 .method("POST")
   				 .requestData(formData)
   				 .success(function(response){
   					_this.$scope.eventBus.fireEvent(NotificationConstants.SUCCESS,"Created Task "+response.taskID);
   				 }).error(function(response,$scope,status, headers, config){
   					_this.$scope.eventBus.fireEvent(NotificationConstants.ERROR,"Error Creating Task "+response);
   				 }).invoke();
              }
              
              
            
            }
              catch(exception){
                               console.error("Gadget Exception in defineScope block of Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_Controller: "+exception);
                                }  
       },
});
/*
* Injecting the Controller with the required services. Objects will be injected into the init function in their respective order
*/
Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_Controller.$inject = [ '$scope', 'RestServiceProvider','EventBus','$log','config','$builder'];

