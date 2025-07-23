import { useState} from "react";
import TaskList from "./Tasks";
import useFetch from "./useFetch";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const {data: list, isPending, fetchError} = useFetch('http://localhost:8000/taskList');
    //const [taskTitle, setTaskTitle] = useState("");
    //const [alert,setAlert] = useState("");

    // const addTask = () =>{
    //     if(taskTitle.trim()){
    //         setElements([
    //         ...list,
    //         {
    //             title: taskTitle,
    //             desc: 'For a business deal',
    //             user: 'saiprasanth',
    //             id: list.length + 1
    //         }
    //         ]);
    //         setTaskTitle("");
    //         setAlert("");
    //     }
    //     else{
    //         setAlert("*Enter Something to add task");
    //     }
        
    // };

    // const removeTask = (id) =>{
    //     console.log(id);
    //         if(list.length>1){
    //             const updatedList = list.filter(task => task.id!==id);
    //             setElements(updatedList);
    //         }
    //         else{
    //             alert("Enough don't delete all, I didn't written much code to accomodate.........")
    //         }
    // };

    // const handleKeyPress = (e) => {
    //     if (e.key === "Enter") {
    //         addTask();
    //     }
    // };

    return (
        <div className="home container">
            <div className="input-wrapper">
                <div className="add">
                    <input
                        type="text"
                        autoFocus
                        placeholder="Search task"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={() => setSearchTerm("")}><i>X</i></button>
                    <button>Search</button>
                </div>
            </div>
            {/* <div className="input-alert">{alert}</div> */}
            {
                fetchError && 
                <div className="error">
                    <h3>{fetchError}</h3>
                </div>
            }
            {isPending && 
            <div className="loading">
                <h3>Fetching data. Please wait... </h3>
            </div>
            }
            {list && <TaskList list={list.filter((task) => 
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
            )} title="All" />}

            {list && <TaskList list={list.filter((task) => 
            task.user !== "Business" &&
            task.title.toLowerCase().includes(searchTerm.toLowerCase())
            )} title="Saiprasanth" />}

        </div>
      );
}
 
export default Home;