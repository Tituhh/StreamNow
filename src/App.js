import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import StreamingPage from './pages/StreamingPage';
import Disclaimer from './components/Legal/Disclaimer';
import Contact from './components/Legal/Contact';
import Copyright from './components/Legal/Copyright';
import SettingsPage from './pages/SettingsPage';
import styled, { createGlobalStyle } from 'styled-components';
import { useTheme } from './theme/ThemeContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.mode === 'light' ? '#f5f7fa' : '#121212'};
    font-family: 'Inter','Roboto',Arial,sans-serif;
    margin: 0;
    color: ${({ theme }) => theme.mode === 'light' ? '#222' : '#fff'};
    transition: background 0.2s;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  :root {
    --accent: ${({ theme }) => theme.accent};
  }
`;

const NavBar = styled.nav`
  background: ${({ theme }) => theme.mode === 'light' ? '#fff' : '#181a1f'};
  box-shadow: 0 2px 8px #0005;
  padding: 16px 0;
  display: flex;
  justify-content: center;
  gap: 38px;
  margin-bottom: 0;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.mode === 'light' ? '#222' : '#fff'};
  font-weight: 600;
  font-size: 1.1rem;
  border-radius: 6px;
  padding: 8px 18px;
  transition: background 0.16s;
  &:hover {
    background: ${({ theme }) => theme.mode === 'light' ? '#f5f7fa' : '#23262e'};
  }
`;

function App() {
  const { theme } = useTheme();
  return (
    <BrowserRouter>
      <GlobalStyle theme={theme} />
      <NavBar theme={theme}>
        <NavLink theme={theme} href="/">Home</NavLink>
        <NavLink theme={theme} href="/disclaimer">Disclaimer</NavLink>
        <NavLink theme={theme} href="/contact">Contact</NavLink>
        <NavLink theme={theme} href="/copyright">Copyright</NavLink>
        <NavLink theme={theme} href="/settings">Settings</NavLink>
      </NavBar>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/stream/:id" element={<StreamingPage />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
