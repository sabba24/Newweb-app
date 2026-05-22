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
import Plans from './pages/Plans';
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
        <Route path="/plans" element={<Plans />} />
        <Route path="/missing/:id" element={<MissingPersonDetail />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/ads" element={<Advertise />} />
        <Route path="/ads/:id" element={<Advertise />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/overview" element={<DashboardPlaceholder type="overview" />} />
        <Route path="/dashboard/alerts" element={<DashboardPlaceholder type="alerts" />} />
        <Route path="/dashboard/create-alert" element={<DashboardPlaceholder type="createAlert" />} />
        <Route path="/dashboard/my-missing-alerts" element={<DashboardPlaceholder type="myMissingAlerts" />} />
        <Route path="/dashboard/billing" element={<DashboardPlaceholder type="billing" />} />
        <Route path="/dashboard/business-ads" element={<DashboardPlaceholder type="businessAds" />} />
        <Route path="/dashboard/my-ads" element={<DashboardPlaceholder type="myAds" />} />
        <Route path="/dashboard/promotions" element={<DashboardPlaceholder type="promotions" />} />
        <Route path="/dashboard/campaigns" element={<DashboardPlaceholder type="campaigns" />} />
        <Route path="/dashboard/website-traffic" element={<DashboardPlaceholder type="websiteTraffic" />} />
        <Route path="/dashboard/ad-performance" element={<DashboardPlaceholder type="adPerformance" />} />
        <Route path="/dashboard/plan-status" element={<DashboardPlaceholder type="planStatus" />} />
        <Route path="/dashboard/agency-license" element={<DashboardPlaceholder type="agencyLicense" />} />
        <Route path="/dashboard/verified-reports" element={<DashboardPlaceholder type="verifiedReports" />} />
        <Route path="/dashboard/missing-persons" element={<DashboardPlaceholder type="missingPersons" />} />
        <Route path="/dashboard/emergency-alerts" element={<DashboardPlaceholder type="emergencyAlerts" />} />
        <Route path="/dashboard/active-incidents" element={<DashboardPlaceholder type="activeIncidents" />} />
        <Route path="/dashboard/community-reports" element={<DashboardPlaceholder type="communityReports" />} />
        <Route path="/dashboard/dispatch-queue" element={<DashboardPlaceholder type="dispatchQueue" />} />
        <Route path="/dashboard/responders" element={<DashboardPlaceholder type="responders" />} />
        <Route path="/dashboard/department-management" element={<DashboardPlaceholder type="departmentManagement" />} />
        <Route path="/dashboard/patrol-zones" element={<DashboardPlaceholder type="patrolZones" />} />
        <Route path="/dashboard/emergency-broadcasts" element={<DashboardPlaceholder type="emergencyBroadcasts" />} />
        <Route path="/dashboard/surveillance-requests" element={<DashboardPlaceholder type="surveillanceRequests" />} />
        <Route path="/dashboard/vehicles-units" element={<DashboardPlaceholder type="vehiclesUnits" />} />
        <Route path="/dashboard/evidence-media" element={<DashboardPlaceholder type="evidenceMedia" />} />
        <Route path="/dashboard/wanted-persons" element={<DashboardPlaceholder type="wantedPersons" />} />
        <Route path="/dashboard/public-safety-notices" element={<DashboardPlaceholder type="publicSafetyNotices" />} />
        <Route path="/dashboard/road-traffic-alerts" element={<DashboardPlaceholder type="roadTrafficAlerts" />} />
        <Route path="/dashboard/flood-hurricane-warnings" element={<DashboardPlaceholder type="floodHurricaneWarnings" />} />
        <Route path="/dashboard/emergency-hotlines" element={<DashboardPlaceholder type="emergencyHotlines" />} />
        <Route path="/dashboard/citizen-complaints" element={<DashboardPlaceholder type="citizenComplaints" />} />
        <Route path="/dashboard/case-management" element={<DashboardPlaceholder type="caseManagement" />} />
        <Route path="/dashboard/report-archive" element={<DashboardPlaceholder type="reportArchive" />} />
        <Route path="/dashboard/analytics-statistics" element={<DashboardPlaceholder type="analyticsStatistics" />} />
        <Route path="/dashboard/settings" element={<DashboardPlaceholder type="settings" />} />
      </Routes>
    </BrowserRouter>
  );
}