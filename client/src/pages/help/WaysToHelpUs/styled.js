import styled from 'styled-components';
import { Image } from '@chakra-ui/react';
import tw from 'tailwind-styled-components';
import { motion } from 'framer-motion';

export const WaysToHelpUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 0;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#fff' : '#333031'};
`;

export const WaysToHelpUsHeading = styled.h2`
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#9e9e9e')};
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
`;

export const WaysToHelpUsImage = styled(Image)`
  height: 30rem;
  object-fit: contain;
  border-radius: 40px;
  ${({ theme }) => theme.colorMode === 'dark' && 'filter: brightness(80%);'}
`;

export const WaysToHelpUsGridContainer = styled.div`
  display: grid;
  grid-template-columns: 30rem 1fr 30rem;
  grid-template-rows: min-content min-content min-content;
  gap: 0rem;
  align-items: center;

  & > *:nth-child(1) {
    grid-column: 2 / 3;
    grid-row: 1 / 4;
  }

  & > *:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  & > *:nth-child(2) *,
  & > *:nth-child(4) *,
  & > *:nth-child(6) * {
    text-align: right;
  }

  & .h4 {
    font-size: 1rem;
    line-height: 24px;
  }
`;

export const WaysToHelpUsCommonInfo = styled.div`
  margin-top: 3rem;
  padding: 0 4rem;

  .h4 {
    text-align: center;
    font-size: 1.1rem;
    color: ${({ theme }) => (theme.colorMode === 'light' ? '#000' : '#757575')};
  }
`;

export const SupportButton = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  padding: 14px 28px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ theme }) => (theme.colorMode === 'dark' ? '#d8d4d3' : '#fff')};
  background: ${({ theme }) =>
    theme.colorMode === 'dark'
      ? '#4b4949'
      : 'linear-gradient(45deg, #8EC5FC, #E0C3FC)'};
  border: none;
  border-radius: 999px;
  cursor: pointer;
  outline: none;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(4px);
`;

export const ModalContent = styled(motion.div)`
  background: ${({ theme }) =>
    theme.colorMode === 'light'
      ? 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
      : 'linear-gradient(135deg, #1e1e1e 0%, #2c2c2c 100%)'};
  border-radius: 20px;
  padding: 2rem;
  max-width: 32rem;
  width: 90%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid
    ${({ theme }) => (theme.colorMode === 'dark' ? '#333' : '#eee')};
`;

// === Кнопка закрытия ===

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.75rem;
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#888' : '#bbb')};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: ${({ theme }) => (theme.colorMode === 'light' ? '#333' : '#fff')};
    transform: scale(1.1);
  }
`;

// === Donation Section ===

export const DonationSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 2rem;
`;

export const DonationInput = styled.input`
  border: 2px solid
    ${({ theme }) => (theme.colorMode === 'light' ? '#d1d5db' : '#4b5563')};
  border-radius: 12px;
  padding: 0.75rem 1rem;
  width: 100%;
  max-width: 24rem;
  font-size: 1rem;
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#111' : '#ddd')};
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#fff' : '#1f2937'};
  outline: none;
  transition: all 0.2s ease;

  &:focus {
    border-color: ${({ theme }) =>
      theme.colorMode === 'light' ? '#4A90E2' : '#6B7280'};
    box-shadow: 0 0 0 3px
      ${({ theme }) =>
        theme.colorMode === 'light'
          ? 'rgba(74, 144, 226, 0.2)'
          : 'rgba(107, 114, 128, 0.3)'};
  }
`;

// === Игра с питомцем ===

export const GameSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem 0;
  border-top: 1px solid
    ${({ theme }) => (theme.colorMode === 'light' ? '#eee' : '#333')};
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorMode === 'light' ? '#eee' : '#333')};
`;

export const HappinessBar = styled.div`
  width: 100%;
  height: 10px;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#e5e7eb' : '#374151'};
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

export const HappinessFill = styled.div`
  height: 100%;
  background: linear-gradient(
    to right,
    ${({ theme }) => (theme.colorMode === 'light' ? '#ff6b6b' : '#d94848')},
    ${({ theme }) => (theme.colorMode === 'light' ? '#feca57' : '#e0a800')}
  );
  width: ${({ happiness }) => happiness}%;
  transition: width 0.4s ease-in-out;
`;

export const Pet = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #fbbf24, #facc15);
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  margin-bottom: 0.5rem;
  border: 2px solid #fff;
  transition: transform 0.3s ease;
`;

// === Кнопка ===

export const Button = styled.button`
  background: ${({ theme }) =>
    theme.colorMode === 'light'
      ? 'linear-gradient(to right, #667eea, #764ba2)'
      : 'linear-gradient(to right, #3b3b3b, #555)'};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 12px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
    filter: brightness(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

// === Реварды ===

export const RewardSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RewardItem = styled.div`
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#e8f5e9' : '#2e3b2e'};
  color: ${({ theme }) =>
    theme.colorMode === 'light' ? '#2e7d32' : '#a5d6a7'};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  margin-bottom: 0.5rem;
  width: 100%;
  max-width: 24rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }
`;
