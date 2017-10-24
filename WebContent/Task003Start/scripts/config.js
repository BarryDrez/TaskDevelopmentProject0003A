try{
/*
 * Do not edit this file by hand
 */ 
var Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start_module = angular.module('Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start', ['adf.provider','builder','builder.components','validator.rules'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start', {
        title: 'Task003Start',
        editTitle :'Task003Start Settings',
        description: 'Task003Start Description',
        templateUrl: '/<<CONTEXT_ROOT>>/Task003Start/views/view.xhtml',
        controller: 'Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start_Controller',
        controllerAs: 'Task003Start',
        frameless : 'false',
        previewImage: '/<<CONTEXT_ROOT>>/images/Task003Start/default.png',
        edit: {
          templateUrl: '/<<CONTEXT_ROOT>>/Task003Start/views/settings.xhtml'
        },
        application : "TaskDevelopmentProject0003A",
        gadgetGroup: "TaskDevelopmentProject0003A",
        id: "Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start",
        widgetName : "Task003Start",
        defaults:{ "title": "Task003Start",
  	      "structure": "6-6",
  	      "rows": [{
  	        "columns": [{
  	          "styleClass": "col-md-12",
  	          "widgets": [ {
  	              "type": "Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start",
  	              "title": "",
  	              "config": {
  	            	  "params":{
  	            	         
                                },
  	            	  "title":""
  	              	}
  	            }]
  	        }]
  	      }]
  	  }
              });
  });
   if(angular.module('Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start')){
    	wmBCGadgets.requires.push('Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start');
    	
    	Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start_module.run(function(){
    		try{
	    		var dep=['builder','builder.components','validator.rules'];//define list of dependencies
	        	for(var module in dep){
	        		if(dep.hasOwnProperty(module)){
	        			angular.module(dep[module]);
	        			Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start_module.requires.push(dep[module]);
	        		}
	        	}
    		}catch(exception){
    			console.error("Gadget Exception: "+exception);
    		}
    	});
    	 
    }

}
catch(exception){
	angular.module('wmBCGadgets').run(function(dashboard){
		dashboard.widgets["Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start"]= Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start_module;
	})
	Task003Start_36c65a46_5cb7_4286_a403_0ddc123ec1d4Start_module["error"]=exception;
	throw new GadgetException(exception);
}