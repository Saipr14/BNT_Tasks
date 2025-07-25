import { Link } from "react-router-dom";

const TaskList = ({list, title}) => {

    return ( 
        <div className="tasks">
            <div className="title">
                <h2>{title}</h2>
            </div>
            <hr />
            {list.map((task) =>(
                <Link className="nav-link ms-4" to={`/taskdesc/${task.id}`} >
                    <div className="list-preview" key={task.id}>

                            <div className="list-items">
                                <h2>{task.title}</h2>
                                <p>User:{task.user}</p>
                            </div>
                        {/* <div className="delete">
                            <button onClick={() =>{
                                removeTask(task.id);
                            } }>Delete</button>
                        </div> */}
                    </div>
                </Link>
            ))}
        </div>
     );
}
 
export default TaskList;