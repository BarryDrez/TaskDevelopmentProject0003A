package caf.war.TaskDevelopmentProject0003A.taskclient;

import javax.faces.bean.ManagedBean;
import javax.faces.bean.SessionScoped;
import com.webmethods.caf.faces.annotations.DTManagedBean;
import com.webmethods.caf.faces.annotations.BeanType;
import com.webmethods.caf.faces.data.task.impl.BaseTaskRuleContext;

@ManagedBean(name = "Task001RuleContext")
@SessionScoped
@DTManagedBean(displayName = "Task001 Rule Context", beanType = BeanType.DEFAULT)
public class Task001RuleContext  extends  com.webmethods.caf.faces.data.task.impl.BaseTaskRuleContext {
}