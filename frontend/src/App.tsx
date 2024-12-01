import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './sections/Home';
import Register from './sections/Register';
import Login from './sections/Login';
import Admin from './sections/Admin';
import Teacher from './sections/Teacher';
import Parent from './sections/Parent';
import ToDoList from './sections/ToDoList';
import AllEvents from './sections/AllEvents';
import AllEventsAdmin from './sections/AllEvents-admin';
import ViewLeaderboard from './sections/Leaderboard';
import ViewLeaderboardAdmin from './sections/Leaderboard-admin';
import Announcement from './sections/Announcement';
import AnnouncementAdmin from './sections/Announcement-admin';
import ManageAccounts from './sections/ManageAccount';
import Logs from './sections/Logs';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/teacher' element={<Teacher />} />
        <Route path='/parent' element={<Parent />} />
        <Route path='/todolist' element={<ToDoList />} />
        <Route path='/allevents' element={<AllEvents />} />
        <Route path='/events-admin' element={<AllEventsAdmin />} />
        <Route path='/leaderboard' element={<ViewLeaderboard />} />
        <Route path='/leaderboard-admin' element={<ViewLeaderboardAdmin />} />
        <Route path='/announce' element={<Announcement />} />
        <Route path='/announce-admin' element={<AnnouncementAdmin />} />
        <Route path='/manageAccounts' element={<ManageAccounts />} />
        <Route path='/logs' element={<Logs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;