import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import Signup from "./pages/Signup"

function App() {
  
  return (
    <>
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/Sign-up" element={<Signup />} />
    </Routes>
    </>
  )
}

export default App
