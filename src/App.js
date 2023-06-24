import react from 'react';
import Header from './components/header';
import Home from './components/home';
import Newcell from './components/New_cell'
import Hidden from './components/hidden'
import Colormatch from './components/Colormatch'

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Flipandmatch from './components/Flipandmatch';
import Diffcolor from './components/Diffcolor';
const App=()=>{
  return(
    <>
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/cell'} element={<Newcell/>}/>
                <Route path={'/Colormatch'} element={<Colormatch/>}/>
                <Route path={'/hidden'} element={<Hidden/>}/>
                <Route path={'/Flip'} element={<Flipandmatch/>}/>
                <Route path={'/Diffcolor'} element={<Diffcolor/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App