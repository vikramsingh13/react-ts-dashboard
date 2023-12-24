import "./App.css";
import "@radix-ui/themes/styles.css";
import Dashboard from "./views/Dashboard";
import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react'
import { menuTheme } from './components/Menu';

// extendBaseTheme from chakra is necessary for theming the components
// ChakraBaseProvider that only supplies theme tokens and not the default component theming to avoid large js payloads
//const { Button } = chakraTheme.components

const theme = extendBaseTheme({
  components: {
    //Button,
    Menu: menuTheme,
  },
})

function App() {
  return (
    <>
      <ChakraBaseProvider theme={theme}>
        <Dashboard />
      </ChakraBaseProvider>
    </>
  );
}

export default App;
