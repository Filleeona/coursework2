import { useState, useEffect, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

// Анимация волн для фона
const waveAnimation = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const IslandContainer = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  background: linear-gradient(135deg, #f4e4bc 0%, #e6d2a1 100%);
  border: 2px solid #4a2c0a;
  border-radius: 12px;
  overflow: hidden;
  user-select: none;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
`;

const IslandBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/sand.png');
  opacity: 0.5;
  z-index: 1;
  animation: ${waveAnimation} 20s infinite linear;
`;

const GameHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 8px;
  background: linear-gradient(90deg, #8d5524, #c68642);
  border-radius: 10px 10px 0 0;
  z-index: 10;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const ScoreText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #fff3e0;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const EnergyText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #ffca28;
  margin: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 60px);
  grid-template-rows: repeat(6, 60px);
  gap: 4px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
`;

const Cell = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid #8d5524;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const Cat = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  z-index: 6;
`;

const AngryDog = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  z-index: 6;
`;

const Treasure = styled.div`
  font-size: 1.4rem;
  animation: ${keyframes`
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    `} 1.5s infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Trap = styled.div`
  font-size: 1.4rem;
  animation: ${keyframes`
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(10deg);
        }
        100% {
            transform: rotate(0deg);
        }
    `} 1s infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const PalmTree = styled.div`
  font-size: 1.4rem;
  animation: ${keyframes`
        0% {
            transform: rotate(-2deg);
        }
        50% {
            transform: rotate(2deg);
        }
        100% {
            transform: rotate(-2deg);
        }
    `} 2s infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GameOverMessage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 235, 205, 0.9);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  z-index: 20;
  border: 2px solid #8d5524;
  max-width: 80%;
  box-sizing: border-box;
`;

const GameOverText = styled.h2`
  font-size: 1.5rem;
  color: #4a2c0a;
  margin: 0 0 10px;
  font-family: 'Arial', sans-serif;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
`;

const RestartButton = styled.button`
  padding: 8px 16px;
  background: #c68642;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  margin: 5px;
  transition:
    background 0.3s,
    transform 0.1s;

  &:hover {
    background: #8d5524;
    transform: scale(1.05);
  }
`;

// Мемоизация Cell с отображаемым именем
const MemoizedCell = memo(({ children }) => <Cell>{children}</Cell>);
MemoizedCell.displayName = 'MemoizedCell';

// Генерация случайной позиции без пересечений
const generateRandomPosition = (existingPositions, gridSize) => {
  const maxAttempts = 50;
  let attempts = 0;
  let pos;

  while (attempts < maxAttempts) {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    pos = `${x},${y}`;

    if (!existingPositions.includes(pos)) {
      return { x, y };
    }
    attempts++;
  }

  for (let x = 0; x < gridSize; x++) {
    for (let y = 0; y < gridSize; y++) {
      pos = `${x},${y}`;
      if (!existingPositions.includes(pos)) {
        return { x, y };
      }
    }
  }

  return { x: 0, y: 0 };
};

const MiniGame = ({ onClose }) => {
  const [score, setScore] = useState(0);
  const [energy, setEnergy] = useState(15);
  const [gameOver, setGameOver] = useState(false);
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0 });
  const [dog1Position, setDog1Position] = useState({ x: 0, y: 0 }); // Первая собака
  const [dog2Position, setDog2Position] = useState({ x: 0, y: 0 }); // Вторая собака
  const [treasures, setTreasures] = useState([]);
  const [traps, setTraps] = useState([]);
  const [palmTrees, setPalmTrees] = useState([]);
  const [moveCount, setMoveCount] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);
  const gridSize = 6;

  // Инициализация игры
  useEffect(() => {
    const positions = [];

    // Позиция котика
    const catPos = generateRandomPosition(positions, gridSize);
    setCatPosition(catPos);
    positions.push(`${catPos.x},${catPos.y}`);

    // Позиция первой собаки
    const dog1Pos = generateRandomPosition(positions, gridSize);
    setDog1Position(dog1Pos);
    positions.push(`${dog1Pos.x},${dog1Pos.y}`);

    // Позиция второй собаки
    const dog2Pos = generateRandomPosition(positions, gridSize);
    setDog2Position(dog2Pos);
    positions.push(`${dog2Pos.x},${dog2Pos.y}`);

    // Сундуки (4 штуки)
    const newTreasures = [];
    for (let i = 0; i < 4; i++) {
      const pos = generateRandomPosition(positions, gridSize);
      positions.push(`${pos.x},${pos.y}`);
      newTreasures.push({ id: i + 1, x: pos.x, y: pos.y });
    }
    setTreasures(newTreasures);

    // Ловушки (5 штук вместо 3)
    const newTraps = [];
    for (let i = 0; i < 5; i++) {
      const pos = generateRandomPosition(positions, gridSize);
      positions.push(`${pos.x},${pos.y}`);
      newTraps.push({ id: i + 1, x: pos.x, y: pos.y });
    }
    setTraps(newTraps);

    // Пальмы (5 штук вместо 3)
    const newPalmTrees = [];
    for (let i = 0; i < 5; i++) {
      const pos = generateRandomPosition(positions, gridSize);
      positions.push(`${pos.x},${pos.y}`);
      newPalmTrees.push({ id: i + 1, x: pos.x, y: pos.y });
    }
    setPalmTrees(newPalmTrees);

    // Инициализация завершена
    setIsInitialized(true);
  }, []);

  // Движение собак каждые 3 хода
  useEffect(() => {
    if (gameOver || moveCount % 3 !== 0) return;

    // Движение первой собаки
    setDog1Position((prev) => {
      const directions = [
        { x: 0, y: -1 }, // вверх
        { x: 0, y: 1 }, // вниз
        { x: -1, y: 0 }, // влево
        { x: 1, y: 0 }, // вправо
      ];

      let newPos = null;
      let attempts = 0;
      const maxAttempts = 10;

      while (attempts < maxAttempts) {
        const randomDir =
          directions[Math.floor(Math.random() * directions.length)];
        let newX = prev.x + randomDir.x;
        let newY = prev.y + randomDir.y;

        if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) {
          attempts++;
          continue;
        }

        const isPalmTree = palmTrees.some((p) => p.x === newX && p.y === newY);
        if (isPalmTree) {
          attempts++;
          continue;
        }

        newPos = { x: newX, y: newY };
        break;
      }

      if (!newPos) return prev;

      if (newPos.x === catPosition.x && newPos.y === catPosition.y) {
        setGameOver(true);
      }

      return newPos;
    });

    // Движение второй собаки
    setDog2Position((prev) => {
      const directions = [
        { x: 0, y: -1 }, // вверх
        { x: 0, y: 1 }, // вниз
        { x: -1, y: 0 }, // влево
        { x: 1, y: 0 }, // вправо
      ];

      let newPos = null;
      let attempts = 0;
      const maxAttempts = 10;

      while (attempts < maxAttempts) {
        const randomDir =
          directions[Math.floor(Math.random() * directions.length)];
        let newX = prev.x + randomDir.x;
        let newY = prev.y + randomDir.y;

        if (newX < 0 || newX >= gridSize || newY < 0 || newY >= gridSize) {
          attempts++;
          continue;
        }

        const isPalmTree = palmTrees.some((p) => p.x === newX && p.y === newY);
        if (isPalmTree) {
          attempts++;
          continue;
        }

        newPos = { x: newX, y: newY };
        break;
      }

      if (!newPos) return prev;

      if (newPos.x === catPosition.x && newPos.y === catPosition.y) {
        setGameOver(true);
      }

      return newPos;
    });
  }, [moveCount, gameOver, catPosition, palmTrees]);

  // Проверка окончания игры
  useEffect(() => {
    if (!isInitialized) return;

    if (treasures.length === 0) {
      setGameOver(true); // Победа: все сундуки собраны
    }
    if (energy <= 0) {
      setGameOver(true); // Поражение: закончилась энергия
    }
  }, [treasures, energy, isInitialized]);

  // Обработка движения котика
  const handleKeyDown = useCallback(
    (e) => {
      if (gameOver || !isInitialized) return;

      setCatPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        switch (e.key) {
          case 'ArrowUp':
            newY = Math.max(0, prev.y - 1);
            break;
          case 'ArrowDown':
            newY = Math.min(gridSize - 1, prev.y + 1);
            break;
          case 'ArrowLeft':
            newX = Math.max(0, prev.x - 1);
            break;
          case 'ArrowRight':
            newX = Math.min(gridSize - 1, prev.x + 1);
            break;
          default:
            return prev;
        }

        if (newX === prev.x && newY === prev.y) return prev;

        const isPalmTree = palmTrees.some((p) => p.x === newX && p.y === newY);
        if (isPalmTree) return prev;

        if (newX === dog1Position.x && newY === dog1Position.y) {
          setGameOver(true);
          return prev;
        }
        if (newX === dog2Position.x && newY === dog2Position.y) {
          setGameOver(true);
          return prev;
        }

        setMoveCount((prev) => prev + 1);

        setEnergy((prevEnergy) => {
          const newEnergy = Math.max(0, prevEnergy - 1);
          if (newEnergy <= 0) {
            setGameOver(true);
            return 0;
          }
          return newEnergy;
        });

        const treasureIndex = treasures.findIndex(
          (t) => t.x === newX && t.y === newY,
        );
        if (treasureIndex !== -1) {
          setTreasures((prev) => prev.filter((_, i) => i !== treasureIndex));
          setScore((prev) => prev + 10);
          if (Math.random() < 0.3) {
            // Увеличен шанс проклятия с 20% до 30%
            setEnergy((prev) => {
              const newEnergy = Math.max(0, prev - 1);
              if (newEnergy <= 0) {
                setGameOver(true);
                return 0;
              }
              return newEnergy;
            });
          } else {
            if (Math.random() < 0.5) {
              setEnergy((prev) => Math.min(prev + 2, 15));
            }
          }
        }

        const trapIndex = traps.findIndex((t) => t.x === newX && t.y === newY);
        if (trapIndex !== -1) {
          if (Math.random() < 0.7) {
            // Увеличен шанс потери энергии с 50% до 70%
            setEnergy((prev) => {
              const newEnergy = Math.max(0, prev - 2);
              if (newEnergy <= 0) {
                setGameOver(true);
                return 0;
              }
              return newEnergy;
            });
          }
          setTraps((prev) => prev.filter((_, i) => i !== trapIndex));
        }

        return { x: newX, y: newY };
      });
    },
    [
      gameOver,
      treasures,
      traps,
      dog1Position,
      dog2Position,
      palmTrees,
      isInitialized,
    ],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const handleRestart = () => {
    setScore(0);
    setEnergy(15);
    setGameOver(false);
    setMoveCount(0);
    setTreasures([]);
    setTraps([]);
    setPalmTrees([]);
    setIsInitialized(false);
    const positions = [];

    const catPos = generateRandomPosition(positions, gridSize);
    setCatPosition(catPos);
    positions.push(`${catPos.x},${catPos.y}`);

    const dog1Pos = generateRandomPosition(positions, gridSize);
    setDog1Position(dog1Pos);
    positions.push(`${dog1Pos.x},${dog1Pos.y}`);

    const dog2Pos = generateRandomPosition(positions, gridSize);
    setDog2Position(dog2Pos);
    positions.push(`${dog2Pos.x},${dog2Pos.y}`);

    const newTreasures = [];
    for (let i = 0; i < 4; i++) {
      const pos = generateRandomPosition(positions, gridSize);
      positions.push(`${pos.x},${pos.y}`);
      newTreasures.push({ id: i + 1, x: pos.x, y: pos.y });
    }
    setTreasures(newTreasures);

    const newTraps = [];
    for (let i = 0; i < 5; i++) {
      const pos = generateRandomPosition(positions, gridSize);
      positions.push(`${pos.x},${pos.y}`);
      newTraps.push({ id: i + 1, x: pos.x, y: pos.y });
    }
    setTraps(newTraps);

    const newPalmTrees = [];
    for (let i = 0; i < 5; i++) {
      const pos = generateRandomPosition(positions, gridSize);
      positions.push(`${pos.x},${pos.y}`);
      newPalmTrees.push({ id: i + 1, x: pos.x, y: pos.y });
    }
    setPalmTrees(newPalmTrees);

    setIsInitialized(true);
  };

  const renderGrid = () => {
    const cells = [];
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const treasure = treasures.find((t) => t.x === x && t.y === y);
        const trap = traps.find((t) => t.x === x && t.y === y);
        const palmTree = palmTrees.find((p) => p.x === x && p.y === y);

        cells.push(
          <MemoizedCell key={`${x},${y}`}>
            {treasure && (
              <Treasure key={`treasure-${treasure.id}`}>💰</Treasure>
            )}
            {trap && <Trap key={`trap-${trap.id}`}>🪤</Trap>}
            {palmTree && <PalmTree key={`palm-${palmTree.id}`}>🌴</PalmTree>}
          </MemoizedCell>,
        );
      }
    }
    return cells;
  };

  return (
    <IslandContainer>
      <IslandBackground />

      <GameHeader>
        <ScoreText>Score: {score}</ScoreText>
        <EnergyText>Energy: {energy.toFixed(1)}</EnergyText>
      </GameHeader>

      <Grid>{renderGrid()}</Grid>

      <Cat
        style={{
          left: 35 + catPosition.x * 64,
          top: 50 + catPosition.y * 64,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        🐱
      </Cat>

      <AngryDog
        style={{
          left: 35 + dog1Position.x * 64,
          top: 50 + dog1Position.y * 64,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        🐶
      </AngryDog>

      <AngryDog
        style={{
          left: 35 + dog2Position.x * 64,
          top: 50 + dog2Position.y * 64,
        }}
        animate={{
          x: 0,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut',
        }}
      >
        🐶
      </AngryDog>

      {gameOver && (
        <GameOverMessage>
          <GameOverText>
            {treasures.length === 0 ? 'You Win! 🎉' : 'Game Over!'} Score:{' '}
            {score}
          </GameOverText>
          <RestartButton onClick={handleRestart}>Play Again</RestartButton>
          <RestartButton onClick={onClose}>Close</RestartButton>
        </GameOverMessage>
      )}
    </IslandContainer>
  );
};

export default MiniGame;
