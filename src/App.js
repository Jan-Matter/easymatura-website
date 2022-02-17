import { Route, Routes } from 'react-router-dom';

import LandingPage from './Pages/LandingPage';
import PaymentPage from './Pages/PaymentPage';
import ProductsPage from './Pages/ProductsPage';
import RegistrationPage from './Pages/RegistrationPage';
import WelcomePage from './Pages/WelcomePage';
import DashboardPage from './Pages/DashboardPage';
import CoursePage from './Pages/CoursePage';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import AccountPage from './Pages/AccountPage';
import LoginPage from './Pages/LoginPage';
import LektürePage from './Pages/LektürePage';
import SubjectPage from './Pages/SubjectPage';

import { AuthProvider } from './Context/AuthContext';
import { UserProvider } from './Context/UserContext';
import { GymnasiumProvider } from './Context/GymnasiumContext';
import { KlasseProvider } from './Context/KlasseContext';
import { CourseProvider } from './Context/CourseContext';
import VideoplayerPage from './Pages/VideoplayerPage';


function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <GymnasiumProvider>
          <KlasseProvider>
            <CourseProvider>
              <Routes>
                <Route path="/kurse/:course/:subject/:contentID" element={<VideoplayerPage/>}/>
                <Route path="/kurse/:course/:subject/:contentID" element={<VideoplayerPage/>}/>
                <Route path="/kurse/:course/:subject" element={<SubjectPage/>}/>
                <Route path="/kurse/:course/overview" element={<CoursePage/>}/>
                <Route path="/dashboard" element={<DashboardPage/>}/>
                <Route path="/kurse/:course/register" element={<RegistrationPage/>}/>
                <Route path="/kurse/:course/welcome" element={<WelcomePage/>}/>
                <Route path="/kurse/:course/payment" element={<PaymentPage/>}/>
                <Route path="/kurse" element={<ProductsPage/>}/>
                <Route path="/kontakt" element={<ContactPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/account" element={<AccountPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/" element={<LandingPage/>}/>
              </Routes>
            </CourseProvider> 
          </KlasseProvider>
        </GymnasiumProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
