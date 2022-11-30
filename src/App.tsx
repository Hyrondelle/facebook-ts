import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Connection from "./pages/connection";
import Home from "./pages/Home";
function App() {
  

  return (
    <Router>
      <nav>
        <Link to="/home">Home</Link>
        
        
      </nav>
      <Routes>
        <Route path="/" element={<Connection/>}/>
        <Route path="/home" element={<Home/>}/>
        
      </Routes>
    </Router>
  )
}

export default App
