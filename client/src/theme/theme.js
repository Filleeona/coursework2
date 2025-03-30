import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: '#333031',
    brand: {
      500: '#926E96',
      600: '#76497B',
      700: '#926E96',
    },
    dark: {
      500: '333031',
      600: '656263',
      700: 'd8d4d3',
    },
  },
  components: {
    Button: {
      defaultProps: {
        background: 'primary',
        color: 'white',
      },
    },
  },
});
