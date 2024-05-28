
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Import pages
import { Home, Profile, Register } from './pages';


function App() { //componente react

  return (
    //router
    <BrowserRouter>
      <Routes>
        <Route
          index element={<Home />}
        />
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
      </Routes>
    </BrowserRouter>

  )
}


export default App
