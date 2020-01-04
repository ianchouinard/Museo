
const styles = {
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '63px',
        background: '#f6f6f6',
        position: 'relative',
        zIndex: '5',
        fontFamily: 'sans-serif',
        boxShadow: '0px 3px 5px 0px rgba(0,0,0,0.15)',
        color: '#333'
    },
    appName: {
        paddingLeft: '20px',
        fontWeight: '700',
        color: '#282828',
        textDecoration: 'none',
        '&:hover': {
            color: '#3F7FBF'
        }
    },
    compName: {
        flexGrow: '1',
        fontWeight: '400',
        marginLeft: '10px'
    },
    meta: {
        display: 'flex'
    }
};

export default styles;
