
export const textFieldStyle = {
    MuiTextField:{
        styleOverrides: {
            root: {
                // this is styles for the new variants
                "&.form-variant": {
                    "& fieldset": {
                        border: "none",
                        borderRadius: "12px",
                    },
                    "& .MuiInputBase-input:hover + fieldset": {
                        border: `1px solid rgb(200,200,200)`,
                    },
                    "& .MuiInputBase-inputLabel:focus + fieldset": {
                        color: 'rgb(200,200,200)',
                    },
                    "& .MuiInputBase-input:focus + fieldset": {
                        color: "#000",
                        border: `1px solid rgb(200,200,200)`,
                        color: "rgb(200,200,200)",
                    },
                },
            }
        }
    }
}
