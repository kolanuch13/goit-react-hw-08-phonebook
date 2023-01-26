import { Route, Routes, NavLink } from 'react-router-dom';
import { getUsername } from '../redux/auth/auth-selectors'
import { useSelector } from 'react-redux';
import { Tabs, TabList, Tab, Button } from '@chakra-ui/react';
// ======================================================
import HomeView from './views/HomeView';
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import ContactsView from './views/ContactsView';
import DefaultPage from './views/DefaultPage';
import css from './App.module.css'


const App = () => {
  const user = useSelector(getUsername);
  return (
      <div className={css.Wrapper} style={{}}>
          <header>
              <p>Welcome {user ? user : '...'}</p>
              <nav
                  style={{
                      display: 'flex',
                      alignItems: 'flex-end',
                  }}
              >
                  <Button
                      type="button"
                      as="button"
                      p={4}
                      color="white"
                      fontWeight="bold"
                      borderRadius="7px 7px 0px 7px"
                      bgGradient="linear(to-r, teal.500, orange.500)"
                      border="2px"
                      borderColor="blue.600"
                      _hover={{
                          bgGradient: 'linear(to-r, red.500, yellow.500)',
                          borderColor: 'red.600',
                      }}
                  >
                      <NavLink to="/" end>
                          Phonebook
                      </NavLink>
                  </Button>
                  {user === null ? (
                      <Tabs spacing="25px">
                          <TabList>
                              <Tab>
                                  <NavLink to="/registered">Register</NavLink>
                              </Tab>
                              <Tab>
                                  <NavLink to="/login">Login</NavLink>
                              </Tab>
                          </TabList>
                      </Tabs>
                  ) : (
                      <Tabs spacing="25px">
                          <TabList>
                              <Tab>
                                  <NavLink to="/home">Home</NavLink>
                              </Tab>
                              <Tab>
                                  <NavLink to="/contacts">Contacts</NavLink>
                              </Tab>
                          </TabList>
                      </Tabs>
                  )}
              </nav>
          </header>
          <Routes>
              <Route path="/" element={<DefaultPage />} />
              {user === null ? (
                  <>
                      <Route path="/registered" element={<RegisterView />} />
                      <Route path="/login" element={<LoginView />} />
                  </>
              ) : (
                  <>
                      <Route path="/home" element={<HomeView />} />
                      <Route path="/contacts" element={<ContactsView />} />
                  </>
              )}
          </Routes>
      </div>
  );
};

export default App;
