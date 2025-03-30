import { useColorMode } from '@chakra-ui/react';
import { ThemeProvider } from 'styled-components';
import { useMemo } from 'react';

export default function ThemeSync({ children }) {
  const { colorMode } = useColorMode();

  const theme = useMemo(
    () => ({
      colorMode,
    }),
    [colorMode],
  );

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
