import { Route, Routes } from "react-router-dom";
import {
  Home,
  Furniture,
  FurnitureDetail,
  PageInWork,
  PreviewHome
} from "./ts/views";

import { MainLayout } from './ts/components';

const App = () => {

  return (
    <PreviewHome />
  )
  // return (
  //   <MainLayout>
  //     <Routes>
  //       <Route path='/' element={<Home />}/>
  //       <Route path='/mobiliario' element={<Furniture />} />
  //       <Route path='/mobiliario/:id' element={<FurnitureDetail />}/>
  //       <Route path='/arquitectura' element={<PageInWork />}/>
  //       <Route path='/contacto' element={<PageInWork />}/>
  //       <Route path='/sobre-nosotros' element={<PageInWork />}/>
  //       <Route path='*' element={<PageInWork legend={'No se encontró está página.'}/>}/>
  //     </Routes>
  //   </MainLayout>
  // )
}

export default App;
