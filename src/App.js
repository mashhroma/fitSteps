import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider';
import { useState } from 'react';

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
import RegistrationForm from './components/Authorization/RegistrationForm';
import LoginForm from './components/Authorization/LoginForm';
import { UserAccount } from './pages/UserAccount';
import StreamsDetails from './pages/Streams/StreamsDetails';


function App() {
  const [coachRegFormVisibility, setCoachRegFormVisibility] = useState(false);
  const toggleCoachRegForm = () => {
    setCoachRegFormVisibility(!coachRegFormVisibility);
  }

  const [regFormVisibility, setRegFormVisibility] = useState(false);
  const toggleUserRegForm = () => {
    setRegFormVisibility(!regFormVisibility);
  };

  const [loginFormVisibility, setLoginFormVisibility] = useState(false);
  const toggleUserLoginForm = () => {
    setLoginFormVisibility(!loginFormVisibility);
  };

  const [coachLoginFormVisibility, setCoachLoginFormVisibility] = useState(false);
  const toggleCoachLoginForm = () => {
    setCoachLoginFormVisibility(!loginFormVisibility);
  };

  const closeForm = (e) => {
    if (!e.target.classList.contains('reg')) {
      if (coachRegFormVisibility) {
        toggleCoachRegForm();
      }
      if (regFormVisibility) {
        toggleUserRegForm();
      }
      if (loginFormVisibility) {
        toggleUserLoginForm();
      }
      if (coachLoginFormVisibility) {
        setCoachLoginFormVisibility();
      }
      document.querySelector('.App').classList.remove('formVisibility');
    }
  }

  return (
    <ContextProvider>
      <div className="App" onClick={closeForm}>
        <Router>
          <Header toggleUserRegForm={toggleUserRegForm} toggleUserLoginForm={toggleUserLoginForm} />
          <Submenu />
          <Subheader />
          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/workouts' element={<Workouts />} />
              <Route path='/workouts/:typePath' element={<Workouts />} />
              <Route path='/workouts/:typePath/:id' element={<WorkoutDetails />} />
              <Route path='/streams' element={<Streams />} />
              <Route path='/streams/:id' element={<StreamsDetails />} />
              <Route path='/articles' element={<Articles />} />
              <Route path='/about' element={<About />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/subscriptions' element={<Subscriptions />} />
              <Route path='/coach_about' element={<CoachAboutPage toggleCoachRegForm={toggleCoachRegForm} toggleCoachLoginForm={toggleCoachLoginForm} />} />
              <Route path='/users/:id' element={<UserAccount />} />
              <Route path='/public_coaches/:id' element={<CoachPublicPage />} />
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
        {(loginFormVisibility || coachRegFormVisibility || regFormVisibility || coachLoginFormVisibility) && (<div className='overlay'></div>)}
      </div>
      {coachRegFormVisibility && <RegistrationForm role='coach' />}
      {regFormVisibility && <RegistrationForm role='user' />}
      {loginFormVisibility && <LoginForm role='user' closeLoginForm={toggleUserLoginForm} />}
      {coachLoginFormVisibility && <LoginForm role='coach' closeLoginForm={toggleCoachLoginForm} />}
    </ContextProvider>
  );
}

export default App;
