import React from 'react';
import PropTypes from 'prop-types';
import {
    createMuiTheme,
    ThemeProvider,
    responsiveFontSizes,
    StylesProvider,
    jssPreset,
} from '@material-ui/core/styles';
import { create } from 'jss';
import indigo from '@material-ui/core/colors/indigo';
import deepOrange from '@material-ui/core/colors/deepOrange';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import orange from '@material-ui/core/colors/orange';
import blueGrey from '@material-ui/core/colors/blueGrey';
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import purple from '@material-ui/core/colors/purple';
import teal from '@material-ui/core/colors/teal';
import pink from '@material-ui/core/colors/pink';

import rtl from 'jss-rtl';

let theme = createMuiTheme({
    direction: 'ltr',
    palette: {
        primary: {
            main: deepOrange[500],
            light: deepOrange[50],
        },
        secondary: {
            main: indigo[500],
            light: indigo[100],
        },
        success: {
            main: green[500]
        },
        error: {
            main: red[500]
        },
        warning: {
            main: orange[500],
            dark: orange[600],
        },
        info: {
            main: blue[500]
        },
        blueGrey: {
            light: blueGrey[50],
            main: blueGrey[400],
            dark: blueGrey[700],
        },
        white: '#fff',
        black: 'black',
        grey: {
            light: grey[100],
            main: grey[400],
            dark: grey[700],
        },
        purple: {
            light: purple["A100"],
            main: purple[500],
            dark: purple[700],
        },
        teal: {
            light: teal["A100"],
            main: teal[400],
        },
        pink: {
            light: pink["A100"],
            main: pink[300],
        },
        contrastThreshold: 3,
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                body: {
                    backgroundColor: '#e9ecef',
                },
            },
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
});

theme = responsiveFontSizes(theme);

const jss = create({
    plugins: [...jssPreset().plugins, rtl()],
});

export default function AppStyleProvider({ children }) {
    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </StylesProvider>
    );
}

AppStyleProvider.propTypes = {
    children: PropTypes.instanceOf(Object).isRequired,
};
