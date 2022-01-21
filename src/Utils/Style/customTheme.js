import { createTheme } from "@mui/material";
import { buttonStyle } from "./Components/Button";

const customTheme = createTheme({
    components: {...buttonStyle},
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