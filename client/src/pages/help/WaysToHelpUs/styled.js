import styled from 'styled-components';
import { Image } from '@chakra-ui/react';
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
  z-index: 9999;
  overflow-y: hidden;
  padding: 1rem;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ModalContent = styled(motion.div)`
  background: ${({ theme }) =>
    theme.colorMode === 'light'
      ? 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
      : 'linear-gradient(135deg, #1e1e1e 0%, #2c2c2c 100%)'};
  border-radius: 20px;
  padding: 1rem;
  max-width: 35rem;
  width: 90%;
  max-height: 95vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid
    ${({ theme }) => (theme.colorMode === 'dark' ? '#333' : '#eee')};
  overflow-x: hidden;

  &:focus {
    outline: none;
  }

  @media (max-height: 700px) {
    padding: 1rem;
    max-height: 90vh;
  }
`;

export const ModalSectionHeading = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: ${({ theme }) =>
    theme.colorMode === 'light' ? '#1a202c' : '#d8d4d3'};
  text-align: center;
`;

export const GoalReachedText = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) =>
    theme.colorMode === 'light' ? '#2e7d32' : '#a5d6a7'};
  font-weight: 600;
  text-align: center;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
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
`;

export const DonationInput = styled.input`
  border: 2px solid
    ${({ theme }) => (theme.colorMode === 'light' ? '#d1d5db' : '#3b3b3b')};
  border-radius: 20px;
  padding: 0.75rem 1rem;
  margin: 0.7rem 0;
  width: 100%;
  max-width: 24rem;
  font-size: 1rem;
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#111' : '#ddd')};
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#fff' : '#3b3b3b'};
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
  padding-top: 0.5rem;
  margin-bottom: 0.5rem;
  border-top: 1px solid
    ${({ theme }) => (theme.colorMode === 'light' ? '#eee' : '#333')};
  border-bottom: 1px solid
    ${({ theme }) => (theme.colorMode === 'light' ? '#eee' : '#333')};
`;

export const HappinessBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#e5e7eb' : '#374151'};
  border-radius: 4px;
  overflow: hidden;
  margin-top: 8px;
`;

export const HappinessFill = styled.div`
  height: 100%;
  background: ${({ theme }) =>
    theme.colorMode === 'light'
      ? 'linear-gradient(to right, #ff6b6b, #feca57)'
      : 'linear-gradient(to right, #d94848, #e0a800)'};
  width: ${({ happiness }) => happiness}%;
  border-radius: 4px;
  transition: width 1s ease-out;

  /* Добавляем эффект появления при монтировании */
  opacity: 0;
  animation: fadeIn 1s forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }
`;

// === Кнопка ===

export const Button = styled.button`
  background: ${({ theme }) =>
    theme.colorMode === 'light'
      ? 'linear-gradient(to right, #667eea, #764ba2)'
      : 'linear-gradient(to right, #3b3b3b, #555)'};
  color: ${({ theme }) => (theme.colorMode === 'light' ? '#fff' : '#d8d4d3')};
  font-weight: bold;
  border: none;
  border-radius: 10px;
  margin-bottom: 1rem;
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
  width: 100%;
`;

export const RewardItem = styled.div`
  background: ${({ theme }) =>
    theme.colorMode === 'light' ? '#e8f5e9' : '#2e3b2e'};
  color: ${({ theme }) =>
    theme.colorMode === 'light' ? '#2e7d32' : '#a5d6a7'};
  padding: 0.75rem 1rem;
  border-radius: 12px;
  margin: 0.5rem 0;
  width: 100%;
  max-width: 24rem;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;
