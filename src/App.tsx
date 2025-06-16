import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import Signin from './pages/Signin/Signin';
import Profile from './pages/Profile/Profile';
import Nearby from './pages/Nearby/Nearby';
import Favorites from './pages/Favorites/Favorites';
import Appointments from './pages/Appointments/Appointments';
import AppointmentsHistory from './pages/AppointmentsHistory/AppointmentsHistory';
import BusinessCreate from './pages/BusinessCreate/BusinessCreate';
import Business from './pages/Business/Business';
import MyBusinesses from './pages/MyBusinesses/MyBusinesses';
import OfferCreate from './pages/OfferCreate/OfferCreate';

import PrivateRoute from './routes/PrivateRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signin />} />

          <Route path="/" element={
            <PrivateRoute>
              <Layout><Home /></Layout>
            </PrivateRoute>
          } />

          <Route path="/profile" element={
            <PrivateRoute>
              <Layout><Profile /></Layout>
            </PrivateRoute>
          } />

          <Route path="/nearby" element={
            <PrivateRoute>
              <Nearby />
            </PrivateRoute>
          } />

          <Route path="/favorites" element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          } />

          <Route path="/appointments" element={
            <PrivateRoute>
              <Layout><Appointments /></Layout>
            </PrivateRoute>
          } />

          <Route path="/appointments/history" element={
            <PrivateRoute>
              <AppointmentsHistory />
            </PrivateRoute>
          } />

          <Route path="/my-businesses" element={
            <PrivateRoute>
              <Layout><MyBusinesses /></Layout>
            </PrivateRoute>
          } />

          <Route path="/business/:id" element={
            <PrivateRoute>
              <Business />
            </PrivateRoute>
          } />

          <Route path="/business/create" element={
            <PrivateRoute>
              <BusinessCreate />
            </PrivateRoute>
          } />

          <Route path="/business/:id/offers/create" element={
            <PrivateRoute>
              <OfferCreate />
            </PrivateRoute>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;