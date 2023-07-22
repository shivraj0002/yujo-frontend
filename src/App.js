import logo from './logo.svg';
import './App.css';
import Auth from './components/UserAuth/Auth';
import { Route, Routes } from 'react-router';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Messages from './components/Messages/Messages';
import ErrorPage from './components/Error/ErrorPage';
import { useState } from 'react';

function App() {
  const [isInValidUrl, setIsInValidUrl] = useState(false);
  return (
    <div className="App">
      {!isInValidUrl ? <Navbar /> : null}
      <Routes>
        <Route exact path="/" element={<>Home</>} />
        <Route exact path="/auth/*" element={<Auth />} />
        <Route exact path="/messages" element={<Messages />} />
        <Route exact path="/notifications" element={<>Notifications</>} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/*" element={<ErrorPage setIsInValidUrl={setIsInValidUrl} />} />
      </Routes>
    </div>
  );
}

export default App;
