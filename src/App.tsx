import {BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Connection from "./pages/Connection";
import Home from "./pages/Home";
import {UidContext} from './components/UidContext'
import { useState,useEffect} from "react";
import axios from "axios";
import Nav from "./components/Nav";

function App() {
  const [Uid,setUid] = useState('')

  useEffect(()=>{
    const CheckToken = async ()=>{
      await axios({
        method:'get',
        url:`${import.meta.env.VITE_APP_URL_CLIENT}jwtid`,
        withCredentials:true,
      })
      .then((res)=>{
        console.log(res);
        setUid(res.data)
      })
      .catch((err)=>console.log('no token'))
    }
    CheckToken();
  },[Uid])

  return (
    <UidContext.Provider value={Uid}>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Connection/>}/>
          <Route path="/home" element={<Home/>}/>
          
        </Routes>
      </Router>
    </UidContext.Provider>
  )
}

export default App
