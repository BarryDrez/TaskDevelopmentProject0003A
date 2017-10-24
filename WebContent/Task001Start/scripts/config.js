try{
/*
 * Do not edit this file by hand
 */ 
var Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_module = angular.module('Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start', ['adf.provider','builder','builder.components','validator.rules'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start', {
        title: 'Task001Start',
        editTitle :'Task001Start Settings',
        description: 'Task001Start Description',
        templateUrl: '/<<CONTEXT_ROOT>>/Task001Start/views/view.xhtml',
        controller: 'Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_Controller',
        controllerAs: 'Task001Start',
        frameless : 'false',
        previewImage: '/<<CONTEXT_ROOT>>/images/Task001Start/default.png',
        edit: {
          templateUrl: '/<<CONTEXT_ROOT>>/Task001Start/views/settings.xhtml'
        },
        application : "TaskDevelopmentProject0003A",
        gadgetGroup: "TaskDevelopmentProject0003A",
        id: "Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start",
        widgetName : "Task001Start",
        defaults:{ "title": "Task001Start",
  	      "structure": "6-6",
  	      "rows": [{
  	        "columns": [{
  	          "styleClass": "col-md-12",
  	          "widgets": [ {
  	              "type": "Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start",
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
   if(angular.module('Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start')){
    	wmBCGadgets.requires.push('Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start');
    	
    	Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_module.run(function(){
    		try{
	    		var dep=['builder','builder.components','validator.rules'];//define list of dependencies
	        	for(var module in dep){
	        		if(dep.hasOwnProperty(module)){
	        			angular.module(dep[module]);
	        			Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_module.requires.push(dep[module]);
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
		dashboard.widgets["Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start"]= Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_module;
	})
	Task001Start_512e62bd_5855_4429_b855_ccee2315c464Start_module["error"]=exception;
	throw new GadgetException(exception);
}