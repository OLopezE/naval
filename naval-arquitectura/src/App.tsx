import { Route, Routes } from "react-router-dom";
import Home from "./ts/views/home/Home";

import { MainLayout } from './ts/components';

const App = () => {

  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/mobiliario' element={<Home/>} />
        <Route path='/producto' element={<Home/>}/>
      </Routes>
    </MainLayout>
  )
}

export default App;
