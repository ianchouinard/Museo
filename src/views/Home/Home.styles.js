
const styles = {
    meta: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '20px 0',
        '& h1': {
            margin: '0'
        }
    },
    filter: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        '& label': {
            marginRight: '10px'
        },
        '& input': {
            fontSize: '14px',
            padding: '5px 30px 5px 5px',
            borderRadius: '0',
            boxShadow: '0',
            outline: 'none'
        },
        '& svg': {
            position: 'absolute',
            bottom: '6px',
            right: '6px',
            fill: '#828282'
        }
    },
    homeLinks: {
        width: '90%',
        maxWidth: '800px',
        margin: '40px auto',
        fontFamily: 'sans-serif',
        '& a': {
            display: 'block',
            marginBottom: '20px',
            background: '#f2f2f2',
            padding: '20px',
            borderRadius: '3px',
            color: '#282828',
            textDecoration: 'none',
            fontSize: '21px',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            '&:hover': {
                color: '#fff',
                background: '#3F7FBF'
            }
        }
    }
};

export default styles;
