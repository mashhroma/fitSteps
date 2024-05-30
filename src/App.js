import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider';
import { FormContext } from './contexts/FormContext';

import Header from './components/Header';
import Submenu from './components/Submenu';
import Subheader from './components/Subheader';
import Footer from './components/Footer';

import Home from './pages/Home';
import Workouts from './pages/Workouts';
import Streams from './pages/Streams';
import Articles from './pages/Articles';
import About from './pages/SimplePages/About';
import Contacts from './pages/Contacts';
import Subscriptions from './pages/Subscriptions';
import UserAgreement from './pages/SimplePages/UserAgreement';
import UserOffer from './pages/SimplePages/UserOffer';
import CoachOffer from './pages/SimplePages/CoachOffer';
import ConfidentialPolicy from './pages/SimplePages/ConfidentialPolicy';
import ErrorPage from './pages/SimplePages/ErrorPage404';
import EmailConfirmPage from './pages/SimplePages/EmailConfirmPage';
import WorkoutDetails from './pages/Workouts/WorkoutDetails';
import PaymentPage from './pages/PaymentPage';
import CoachAboutPage from './pages/SimplePages/CoachAboutPage';
import CoachPublicPage from './pages/CoachPublicPage';


function App() {
  return (
    <ContextProvider>
      <FormContext>
        <div className="App">
          <Router>
            <Header />
            <Submenu />
            <Subheader />
            <main>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/workouts' element={<Workouts />} />
                <Route path='/workouts/:typePath' element={<Workouts />} />
                <Route path='/workouts/:typePath/:id' element={<WorkoutDetails />} />
                <Route path='/streams' element={<Streams />} />
                <Route path='/articles' element={<Articles />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/subscriptions' element={<Subscriptions />} />
                <Route path='/coach_about' element={<CoachAboutPage />} />
                <Route path='/coaches/:id' element={<CoachPublicPage />} />
                <Route path='/user_offer' element={<UserOffer />} />
                <Route path='/coach_offer' element={<CoachOffer />} />
                <Route path='/user_agreement' element={<UserAgreement />} />
                <Route path='/confidential_policy' element={<ConfidentialPolicy />} />
                <Route path='/payment_subscription/:subscribeType' element={<PaymentPage />} />
                <Route path='/email_confirm' element={<EmailConfirmPage />} />
                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </div>
      </FormContext>
    </ContextProvider>
  );
}

export default App;
