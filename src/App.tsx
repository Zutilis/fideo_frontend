import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Nearby from './pages/Nearby/Nearby';
import Profile from './pages/Profile/Profile';
import Favorites from './pages/Favorites/Favorites';
import Appointments from './pages/Appointments/Appointments';
import AppointmentsHistory from './pages/AppointmentsHistory/AppointmentsHistory';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path="/profile" element={<Layout><Profile/></Layout>} />
        <Route path="/nearby" element={<Nearby/>} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/appointments" element={<Appointments/>} />
        <Route path="/appointments/history" element={<AppointmentsHistory/>} />
      </Routes>
    </Router>
  );
};

export default App;