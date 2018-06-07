import React from 'react';
import ReactDOM from 'react-dom';
import './style/reset.css';
import './style/style.css';
import App from './App';
import {HashRouter} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './ducks/store'
import { MuiThemeProvider } from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme'


const muiTheme = getMuiTheme({
    palette: {
        primary1Color: '#ab8c6b',
        primary2Color: '#cdb49a',
        // primary3Color: grey400,
        accent1Color: '#30373f',
        accent2Color: "#e6e6e6",
        // accent3Color: "#fff",
        // textColor: darkBlack,
        // alternateTextColor: white,
        // canvasColor: "#ab8c6b",
        borderColor: "#f2ece5",
        // disabledColor: fade(darkBlack, 0.6),
        pickerHeaderColor: '#ab8c6b',
        // clockCircleColor: white,
        // shadowColor: fullBlack
    }
  })

ReactDOM.render(
<MuiThemeProvider muiTheme={muiTheme}>
    <Provider store={store} >
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
</MuiThemeProvider>
, document.getElementById('root'));
