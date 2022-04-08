import './App.css';
import { Route, Routes } from "react-router-dom";
import MyLayout from "./MyLayout"
import Pokedex from "./Pokedex"
import AboutAntDesign from './Introduction/AboutAntDesign';
import InstallAndInit from './Introduction/InstallAndInit';
import InputDemo from './BasicComponents/InputDemo';
import SelectionDemo from './BasicComponents/SelectionDemo';
import StatisticsDemo from './ShowData/StatisticsDemo';
import ImageDemo from './ShowData/ImageDemo';
import LinearDemo from './ShowData/LinearDemo'
import MessageDemo from './FeedbackComponents/MessageDemo'
import ResultDemo from './FeedbackComponents/ResultDemo'
// import ShowComponent from './components/ShowComponent'

// Bind router for each page

function App () {
  return (
    <Routes>
      {/* Using router layout to locate all pages */}
      <Route path="/" element={<MyLayout />}>

        <Route index element={<AboutAntDesign />} />
        {/* <Route path="/" element={<AboutAntDesign />} /> */}
        <Route path="/Install" element={<InstallAndInit />} />
        <Route path="/InputDemo" element={<InputDemo />} />
        <Route path="/SelectionDemo" element={<SelectionDemo />} />
        <Route path="/ImageDemo" element={<ImageDemo />} />
        <Route path="/StatisticsDemo" element={<StatisticsDemo />} />
        <Route path="/LinearDemo" element={<LinearDemo />} />
        <Route path="/MessageDemo" element={<MessageDemo />} />
        <Route path="/ResultDemo" element={<ResultDemo />} />
        <Route path="/Pokedex" element={<Pokedex />} />


      </Route>
    </Routes>
  );
}

export default App;