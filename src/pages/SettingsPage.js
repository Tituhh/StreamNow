import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../theme/ThemeContext';

const Container = styled.div`
  max-width: 600px;
  margin: 48px auto;
  background: ${({ theme }) => theme.mode === 'light' ? '#fff' : '#191c22'};
  border-radius: 20px;
  box-shadow: 0 4px 18px #0005;
  padding: 36px 32px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.mode === 'light' ? '#222' : '#fff'};
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.mode === 'light' ? '#222' : '#fff'};
  margin-bottom: 18px;
  display: block;
`;

const ThemeToggle = styled.button`
  background: var(--accent);
  color: #fff;
  border: none;
  font-size: 1.08rem;
  font-weight: 700;
  border-radius: 9px;
  padding: 13px 32px;
  margin: 12px 0 32px 0;
  cursor: pointer;
  box-shadow: 0 2px 8px #0002;
  transition: background 0.2s;
`;

const ColorGrid = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 12px;
`;

const ColorCircle = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: ${({ selected }) => selected ? '3px solid var(--accent)' : '2px solid #aaa'};
  background: ${({ color }) => color};
  cursor: pointer;
  outline: none;
  transition: border 0.2s;
`;

const accentColors = [
  { name: 'Blue', value: '#2962ff' },
  { name: 'Red', value: '#ff3d00' },
  { name: 'Green', value: '#00e676' },
  { name: 'Orange', value: '#ff6e40' },
  { name: 'Purple', value: '#7c4dff' },
  { name: 'Pink', value: '#e040fb' },
];

const SettingsPage = () => {
  const { theme, updateTheme } = useTheme();

  return (
    <Container theme={theme}>
      <Title theme={theme}>Settings</Title>
      <Label theme={theme}>Theme Mode</Label>
      <ThemeToggle onClick={() => updateTheme({ mode: theme.mode === 'dark' ? 'light' : 'dark' })}>
        {theme.mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </ThemeToggle>
      <Label theme={theme}>Accent Color</Label>
      <ColorGrid>
        {accentColors.map(accent => (
          <ColorCircle
            key={accent.value}
            color={accent.value}
            selected={theme.accent === accent.value}
            onClick={() => updateTheme({ accent: accent.value })}
            title={accent.name}
            aria-label={`Accent color: ${accent.name}`}
          />
        ))}
      </ColorGrid>
    </Container>
  );
};

export default SettingsPage;
