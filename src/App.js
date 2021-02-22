import logo from './logo.svg';
import './App.css';
import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react"
import Posts from '../src/components/Posts'

// Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
}
const theme = extendTheme({ colors })

function App() {
  return (
    <Box className = "App">
      <Posts />
    </Box>
  );
}

export default App;
