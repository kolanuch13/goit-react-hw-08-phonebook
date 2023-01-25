import { Route, Routes, NavLink } from 'react-router-dom';
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import {getUsername} from '../redux/auth/auth-selectors'
import { useSelector } from 'react-redux';
import { Tabs, TabList, Tab } from '@chakra-ui/react';

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
              <p>Welcome {user ? user : '...'}</p>
        <nav>
          {/* className="link" */}
                    <Tabs spacing="25px">
                          <TabList>
                            <Tab>
                              <NavLink to="/" end>
                                  Home
                              </NavLink>
                            </Tab>
                            <Tab>
                              <NavLink to="/registered">
                                  Register
                              </NavLink>
                            </Tab>
                            <Tab>
                              <NavLink to="/logIn">
                                  Login
                              </NavLink>
                            </Tab>
                            <Tab>
                              <NavLink to="/contacts">
                                  Contacts
                              </NavLink>
                            </Tab>
                          </TabList>
                    </Tabs>
                  </nav>
          </header>
          <Routes>
              <Route exact path="/" element={<HomeView />} />
              <Route exact path="/registered" element={<RegisterView />} />
              <Route exact path="/login" element={<LoginView />} />
              <Route exact path="/contacts" element={<ContactsView />} />
          </Routes>
      </div>
  );
};

export default App;
