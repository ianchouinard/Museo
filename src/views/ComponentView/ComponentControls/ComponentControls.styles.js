
const styles = {
    componentControls: {
        fontFamily: 'sans-serif'
    },
    inner: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        minHeight: '80px',
        overflowY: 'auto'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: '#ddd',
        color: '#282828',
        padding: '20px',
        marginLeft: '1px',
        fontSize: '21px',
    },
    orientation: {
        display: 'flex',
        '& div': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '25px',
            height: '25px',
            marginLeft: '7px',
            background: '#f1f1f1',
            fontSize: '18px',
            borderRadius: '3px',
            cursor: 'pointer',
            '&.active': {
                background: '#3F7FBF',
                color: '#fff'
            }
        }
    },
    description: {
        fontSize: '14px',
        lineHeight: '21px',
        padding: '20px 20px 0 20px'
    },
    markup: {
        marginTop: '30px',
        width: 'calc(100% - 45px)',
        marginLeft: '20px',
        '&.stacked': {
            marginTop: '10px',
            marginBottom: '10px',
            marginRight: '20px',
            width: 'auto',
            flexGrow: '1'
        }
    },
    stackedPanel: {
        display: 'flex',
        '& div:first-of-type': {
            maxWidth: '300px'
        }
    },
    resizeIndicator: {
        position: 'absolute',
        top: '50%',
        left: '-10px',
        marginTop: '-20px',
        height: '20px',
        width: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#3F7FBF',
        color: '#fff',
        borderRadius: '2px',
        fontSize: '16px',
        '& span': {
            transform: 'translateY(-2px)'
        },
        '&.stacked': {
            height: '25px',
            top: '-13px',
            left: '50%',
            marginLeft: '-20px',
            marginTop: '0',
            '& span': {
                transform: 'translateY(-1px)'
            }
        }
    }
};

export default styles;
