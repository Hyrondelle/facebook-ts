import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Home from "./components/Home";
function App() {
  

  return (
    <Router>
      <nav>
        <Link to="fb-ts/">Home</Link>
        
        
      </nav>
      <Routes>
        <Route path="fb-ts/" element={<Home/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
