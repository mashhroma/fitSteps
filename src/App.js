import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/SimplePages/About';
import { Contacts } from './pages/Contacts';
import { Workouts } from './pages/Workouts';
import { Streams } from './pages/Streams';
import { Articles } from './pages/Articles';
import { UserAgreement } from './pages/SimplePages/UserAgreement';
import { UserOffer } from './pages/SimplePages/UserOffer';
import { CoachOffer } from './pages/SimplePages/CoachOffer';
import { ConfidentialPolicy } from './pages/SimplePages/ConfidentialPolicy';
import { WorkoutDetails } from './pages/Workouts/WorkoutDetails';

import workoutsData from './backend/workoutsData.json';
import WorkoutsNavigation from './components/WorkoutsNavigation';
import Title from './components/Title';
import Search from './components/Search';

function App() {
  return (
    <Router>
      <Header />
      <WorkoutsNavigation />
      <main>
        <div className='heading'>
          <Title />
          <Search />
        </div>
        <Routes>
          <Route path='/' element={<Home workouts={workoutsData} />} />
          <Route path='/workouts' element={<Workouts workouts={workoutsData} />} />
          <Route path='/workouts/:id' element={<WorkoutDetails workouts={workoutsData} />} />
          <Route path='/streams' element={<Streams />} />
          <Route path='/articles' element={<Articles />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/user_offer' element={<UserOffer />} />
          <Route path='/coach_offer' element={<CoachOffer />} />
          <Route path='/user_agreement' element={<UserAgreement />} />
          <Route path='/confidential_policy' element={<ConfidentialPolicy />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
