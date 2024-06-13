import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ContextProvider } from './contexts/ContextProvider';
import { useState } from 'react';

import Header from './components/Header';
import Submenu from './components/Submenu';
import Subheader from './components/Subheader';
import Footer from './components/Footer';

import Home from './pages/Home';
import Workouts from './pages/Workouts';
import WorkoutDetails from './pages/WorkoutDetails';
import Streams from './pages/Streams';
import StreamsDetails from './pages/StreamsDetails';
import Articles from './pages/Articles';
import ArticleDetails from './pages/ArticleDetails';

import About from './pages/About';
import Contacts from './pages/Contacts';
import Subscriptions from './pages/Subscriptions';
import UserAgreement from './pages/UserAgreement';
import UserOffer from './pages/UserOffer';
import CoachOffer from './pages/CoachOffer';
import ConfidentialPolicy from './pages/ConfidentialPolicy';
import ErrorPage from './pages/ErrorPage404';
import ConfirmPage from './pages/ConfirmPage';
import PaymentPage from './pages/PaymentPage';
import CoachAboutPage from './pages/CoachAboutPage';
import CoachPublicPage from './pages/CoachPublicPage';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import UserAccount from './pages/UserAccount';


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
      <Router>
        <div className="App" onClick={closeForm}>
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
              <Route path='/articles/:id' element={<ArticleDetails />} />
              <Route path='/about' element={<About />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/subscriptions' element={<Subscriptions />} />
              <Route path='/coach_about' element={<CoachAboutPage toggleCoachRegForm={toggleCoachRegForm} toggleCoachLoginForm={toggleCoachLoginForm} />} />
              <Route path='/users/:id' element={<UserAccount />} />
              <Route path='/coaches/:id' element={<CoachPublicPage />} />
              <Route path='/user_offer' element={<UserOffer />} />
              <Route path='/coach_offer' element={<CoachOffer />} />
              <Route path='/user_agreement' element={<UserAgreement />} />
              <Route path='/confidential_policy' element={<ConfidentialPolicy />} />
              <Route path='/payment_subscription/:subscribeType' element={<PaymentPage />} />
              <Route path='/confirm' element={<ConfirmPage />} />
              <Route path='*' element={<ErrorPage />} />
            </Routes>
          </main>
          <Footer />
          {(loginFormVisibility || coachRegFormVisibility || regFormVisibility || coachLoginFormVisibility) && (<div className='overlay'></div>)}
        </div>
        {coachRegFormVisibility && <RegistrationForm role='coach' closeRegForm={toggleCoachRegForm} />}
        {regFormVisibility && <RegistrationForm role='user' closeRegForm={toggleUserRegForm} />}
        {loginFormVisibility && <LoginForm role='user' closeLoginForm={toggleUserLoginForm} />}
        {coachLoginFormVisibility && <LoginForm role='coach' closeLoginForm={toggleCoachLoginForm} />}
      </Router>
    </ContextProvider >
  );
}

export default App;
