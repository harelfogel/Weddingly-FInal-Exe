import { createTheme } from "@mui/material";
import { buttonStyle } from "./Components/Button";
import {textFieldStyle} from "./Components/Field";
const customTheme = createTheme({
    components: {...buttonStyle, ...textFieldStyle},
    palette:{
        primary:
        {
            main: '#FF477E'
        },
        secondary:{
            main: '#49516F'
        },

    },
    typography:{
        fontFamily:[
            'Poppins'
        ].join(',')
    }
});

export default customTheme
