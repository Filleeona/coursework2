import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    primary: '#4D8468',
    brand: {
      500: '#926E96',
      600: '#76497B',
      700: '#926E96',
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
