import { Route, Routes } from "react-router-dom";
import { Home, Furniture, FurnitureDetail } from "./ts/views";

import { MainLayout } from './ts/components';

const App = () => {

  return (
    <MainLayout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mobiliario' element={<Furniture />} />
        <Route path='/mobiliario/:id' element={<FurnitureDetail />}/>
      </Routes>
    </MainLayout>
  )
}

export default App;
