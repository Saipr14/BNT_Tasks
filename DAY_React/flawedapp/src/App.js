//import Content from './Content';
//import Counter from './Counter';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from "./Home";
import TrafficLight from "./TrafficLight";
import Text from "./Text";
import Password from "./Password";
import Telephone from './Telephone';
import Star from './Star';
import TaskDesc from './TaskDesc';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/traffic" element={<TrafficLight />} />
            <Route path="/text" element={<Text />} />
            <Route path="/number" element={<Telephone />} />
            <Route path="/password" element={<Password />} />
            <Route path="/star" element={<Star />} />
            <Route path='/taskdesc/:id' element={<TaskDesc />} />
          </Routes>
          
      </Router>
    </div>
  );
}

export default App;
