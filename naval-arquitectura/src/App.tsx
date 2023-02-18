import { Route, Routes } from "react-router-dom";
import { Home, Furniture } from "./ts/views";

import { MainLayout } from './ts/components';

const App = () => {

  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mobiliario' element={<Furniture />} />
        <Route path='/producto' element={<Furniture />}/>
      </Routes>
    </MainLayout>
  )
}

export default App;
