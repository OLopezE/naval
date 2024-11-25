import { Route, Routes } from "react-router-dom";
import {
  PreviewHome
} from "./ts/views";

import MainLogo from "./ts/views/MainLogo/MainLogo";
import Gallery from "./ts/views/Gallery/Gallery";

const App = () => {

  return (
    <Routes>
        <Route path='/' element={<MainLogo />}/>
        <Route path="/home" element={<PreviewHome />} />
        <Route path="/catalogue" element={<Gallery />} />
    </Routes>
  )
}

export default App;
