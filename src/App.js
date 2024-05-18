import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Workouts } from './pages/Workouts';
import { Channels } from './pages/Channels';
import { Discussions } from './pages/Discussions';
import { UserAgreement } from './pages/UserAgreement';
import { UserOffer } from './pages/UserOffer';
import { CoachOffer } from './pages/CoachOffer';
import { ConfidentialPolicy } from './pages/ConfidentialPolicy';
import { Footer } from './components/Footer';


const workoutsData = [
  {
    id: 101,
    name: 'Стэп',
    date: '28.05.2024',
    duration: '60 минут',
    image: 'https://s1.1zoom.ru/big7/370/Fitness_Earobics_kind_459352.jpg'
  },
  {
    id: 102,
    name: 'Йога',
    date: '29.05.2024',
    duration: '60 минут',
    image: 'https://mykaleidoscope.ru/uploads/posts/2022-08/1660584642_36-mykaleidoscope-ru-p-fitnes-trenirovka-doma-dizain-krasivo-foto-39.jpg'
  },
  {
    id: 103,
    name: 'Фитнес билд',
    date: '29.05.2024',
    duration: '60 минут',
    image: 'https://de-fragrance.ru/wp-content/uploads/9/e/7/9e7a84c19e7da9f998a0df5e5f0acdc7.jpeg'
  },
  {
    id: 104,
    name: 'Фитнесс-малина',
    date: '30.05.2024',
    duration: '60 минут',
    image: 'https://ucare.timepad.ru/ca2caee3-2674-4082-8ce5-16c10435ffab/poster_event_1763988.jpg'
  },
  {
    id: 105,
    name: 'Джумба',
    date: '31.05.2024',
    duration: '60 минут',
    image: 'https://sportishka.com/uploads/posts/2022-11/1667438976_54-sportishka-com-p-khip-khop-kostyumi-dlya-sovremennikh-tants-55.jpg'
  }
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Routes>
          <Route path='/' element={<Home workouts={workoutsData} />} />
          <Route path='/workouts' element={<Workouts workouts={workoutsData} />} />
          <Route path='/contacts' element={<Channels />} />
          <Route path='/contacts' element={<Discussions />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/user_offer' element={<UserOffer />} />
          <Route path='/coach_offer' element={<CoachOffer />} />
          <Route path='/user_agreement' element={<UserAgreement />} />
          <Route path='/confidential_policy' element={<ConfidentialPolicy />} />
        </Routes>

        <Footer />
      </div >
    </Router>
  );
}

export default App;
