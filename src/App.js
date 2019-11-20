import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';
import './App.scss';
import ClassCalendar from './Components/Calendar/Calendar';
import EventCalendar from './Components/Calendar/EventCalendar';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[600]
    },
    secondary: {
      main: grey[100]
    }
  },
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <div className="App">
      <Router>
        <Route path="/" component={ClassCalendar} />
        <Route path="/events" component={EventCalendar} />
      </Router>
    </div>
  </MuiThemeProvider>
);
export default App;
