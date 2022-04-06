import './App.css';
import { Route, Routes } from "react-router-dom";
import MyLayout from "./MyLayout"
import HomePage from "./HomePage"
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

function App () {
  return (
    <Routes>
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
        <Route path="/Pokedex" element={<HomePage />} />


      </Route>
    </Routes>
  );
}

export default App;