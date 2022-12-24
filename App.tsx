import { StatusBar } from 'react-native';
import { useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components'
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

import { theme } from './src/theme';

export default function App() {

  const [ isLoadedFonts ] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content' 
        backgroundColor='transparent' 
        translucent 
      />
     {isLoadedFonts ? <Routes /> : <Loading /> } 
    </ThemeProvider>
  );
}

