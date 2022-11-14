import {BrowserRouter as Router, Routes,Route,Link} from "react-dom"
function App() {
  

  return (
    <Router>
      <nav>
        <Link to="fb-ts/">Home</Link>
        
        
      </nav>
      <Routes>
        <Route path="fb-ts/" element={<Home isAuth={isAuth}/>}/>
        <Route path="fb-ts/" element={<Login setIsAuth={setIsAuth}/>}/>
        <Route path="fb-ts/" element={<CreatePost isAuth={isAuth}/>}/>
      </Routes>
    </Router>
  )
}

export default App
