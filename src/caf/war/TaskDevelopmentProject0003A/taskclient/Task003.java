package caf.war.TaskDevelopmentProject0003A.taskclient;

import com.webmethods.caf.faces.data.task.ITaskData;
import com.webmethods.caf.faces.data.ContentProviderException;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import com.webmethods.caf.faces.annotations.ExpireWithPageFlow;
import com.webmethods.caf.faces.annotations.DTManagedBean;
import com.webmethods.caf.faces.annotations.BeanType;

/**
 * Task Client bean for 'Task003' task.
 */
@ManagedBean(name = "Task003")
@SessionScoped
@ExpireWithPageFlow
@DTManagedBean(beanType = BeanType.DEFAULT)
public class Task003 extends com.webmethods.caf.faces.data.task.impl.TaskContentProviderExtended {

	private static final long serialVersionUID = 6726321659003416576L;
	
	/**
	 * Globally unique task type id
	 */
	private static final String TASK_TYPE_ID = "36c65a46-5cb7-4286-a403-0ddc123ec1d4";

	/**
	 * Default constructor
	 */
	public Task003() {
		super();
		setTaskTypeID(TASK_TYPE_ID);
	}
	
	/**
	 * Task Data Object
	 */
	public static class TaskData extends com.webmethods.caf.faces.data.task.impl.TaskData {

		private static final long serialVersionUID = 7646865056564804608L;
		
		
		
		
		public static final String[] INPUTS = new String[] {};
		public static final String[] OUTPUTS = new String[] {};

		public TaskData() {
		}
		
		
		
		
		
	}
	
	/**
	 * Return current task data object
	 * @return current task data
	 */
	public TaskData getTaskData() {
		return (TaskData)getValue(PROPERTY_KEY_TASKDATA);
	}

	/**
	 * Creates new task data object
	 * @return newly created task data object
	 */	
	protected ITaskData newTaskData() throws ContentProviderException {
		return new TaskData();
	}

}