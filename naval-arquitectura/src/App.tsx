import { Route, Routes } from "react-router-dom";
import Home from "./ts/views/home/Home";

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/mobiliario' element={<Home/>} />
      <Route path='/producto' element={<Home/>}/>
    </Routes>
  )
}

export default App;
