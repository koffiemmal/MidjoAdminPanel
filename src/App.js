import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/layouts/Header.jsx';
import Userlist from './components/pages/Userlist.jsx';
import StationList from './components/pages/StationList.jsx';
import AddStationList from './components/pages/AddStationList.jsx';
import EditionStation from './components/pages/EditionStation.jsx';
import Connexion from './components/pages/Connexion.jsx';
import Inscription from "./components/pages/Inscriptions.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Connexion/>} />
        <Route path='/inscription' element={<Inscription/>} />
        <Route path="/acceuil" element={<Header />}>
          <Route index element={<Userlist />} />
          <Route path="/acceuil/station"  element={<StationList/>}/>
          <Route   path='/acceuil/addStation' element={<AddStationList/>} />
          <Route path='/acceuil/edit/:id' element={<EditionStation/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
