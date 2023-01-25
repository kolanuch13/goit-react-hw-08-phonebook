import { Route, Routes, NavLink } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import {getUsername} from '../redux/auth/auth-selectors'
import { useSelector } from 'react-redux';

const App = () => {
  const user = useSelector(getUsername);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <header>
        <p>Welcome {user ? user : "..."}</p>
        <nav>
          <NavLink className="link" to="/" end>Home</NavLink>
          <NavLink className="link" to="/registered">Register</NavLink>
          <NavLink className="link" to="/logIn">LogIn</NavLink>
          <NavLink className="link" to="/contacts">Contacts</NavLink>
        </nav>
      </header>
      <Routes>
        <Route exact path="/" element={<HomeView/>} />
        <Route exact path="/registered" element={<RegisterView />} />
        <Route exact path="/login" element={<LoginView />} />
        <Route exact path="/contacts" element={<ContactsView />} />
      </Routes>
    </div>
  );
};

export default App;
