import { useState } from "react";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from "./components/shared/firebase";
// Import pages
import { Home, Loginp, Profile, Registerp } from './pages';

function App() { // componente react
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    // router
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path='/profile'
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route path='/login' element={<Loginp />} />
        <Route path='/register' element={<Registerp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
