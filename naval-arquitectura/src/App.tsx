import { Route, Routes } from "react-router-dom";
import {
  PreviewHome
} from "./ts/views";

import MainLogo from "./ts/views/MainLogo/MainLogo";
import Gallery from "./ts/views/Gallery/Gallery";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

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
