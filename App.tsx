import { ThemeProvider } from 'styled-components'
import { useFonts } from '@expo-google-fonts/roboto';
import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto'

import { Loading } from '@components/Loading';
import { theme } from './src/theme';
import { StatusBar } from 'react-native';
import { Routes } from '@routes/index';

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

