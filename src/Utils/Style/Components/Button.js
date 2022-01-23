
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
                props: { variant: 'form' },
                style: {
                    textTransform: 'none',
                    borderRadius: '32px',
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    height: '6vh',
                    width: '9vw',
                    backgroundColor: 'white',
                    color: 'black',
                  },
              },
              {
                props: { variant: 'nav-button' },
                style: {
                    fontWeight: 'bolder',
                    borderRadius: '12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '-1px 10px 12px 3px rgba(255,71,126,0.34)',
                    height: '6vh',
                    width: '7vw',
                    backgroundColor: '#FF477E',
                    padding: '0.5rem 1rem',
                    borderBottom: '4px solid #FF477E',
                    '&:hover': {
                        backgroundColor: '#FF477E',
                        color: 'white',
                    },
                  },
              },
              {
                  props: { variant: 'work-with' },
                  style: {
                      fontWeight: 'bolder',
                      borderRadius: '12px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      boxShadow: '-1px 10px 12px 3px rgba(255,71,126,0.34)',
                      height: '15vh',
                      width: '7vw',
                      backgroundColor: '#FF477E',
                      padding: '0.5rem 1rem',
                      borderBottom: '4px solid #FF477E',
                      '&:hover': {
                          backgroundColor: '#FF477E',
                          color: 'white',
                      },
                  },
              }

          ]
      }
}
