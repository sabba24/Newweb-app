import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import SafetyTips from './pages/SafetyTips';
import EmergencyResources from './pages/EmergencyResources';
import Setup from './pages/Setup';
import MissingPersonDetail from './pages/MissingPersonDetail';
import Advertise from './pages/Advertise';
import Dashboard from './pages/Dashboard';
import DashboardPlaceholder from './pages/DashboardPlaceholder';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/safety-tips" element={<SafetyTips />} />
        <Route path="/emergency-resources" element={<EmergencyResources />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/missing/:id" element={<MissingPersonDetail />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/ads" element={<Advertise />} />
        <Route path="/ads/:id" element={<Advertise />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/alerts" element={<DashboardPlaceholder type="alerts" />} />
        <Route path="/dashboard/create-alert" element={<DashboardPlaceholder type="createAlert" />} />
        <Route path="/dashboard/billing" element={<DashboardPlaceholder type="billing" />} />
        <Route path="/dashboard/business-ads" element={<DashboardPlaceholder type="businessAds" />} />
        <Route path="/dashboard/promotions" element={<DashboardPlaceholder type="promotions" />} />
        <Route path="/dashboard/agency-license" element={<DashboardPlaceholder type="agencyLicense" />} />
        <Route path="/dashboard/verified-reports" element={<DashboardPlaceholder type="verifiedReports" />} />
      </Routes>
    </BrowserRouter>
  );
}