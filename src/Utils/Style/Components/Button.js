
export const buttonStyle = {
    MuiButtonBase: {
        defaultProps: {
            font:{
                
            }
        },
      },
      MuiButton:{
          variants:[
            {
                props: { variant: 'dashed' },
                style: {
                    textTransform: 'none',
                    borderRadius: '22px',
                    backgroundColor: 'white',
                    color: 'black',
                  },
              },
          ]
      }
}