import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './components/Home';
import { NavBar } from './components/NavBar';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#53905F',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      contrastText: '#fff',
    },
    secondary: {
      light: '#0066ff',
      main: '#ffffff',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#53905F',
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});
const store = configureStore();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <Router>
          <NavBar />
          <Route exact path="/" component={<Home />} />
        </Router>
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
