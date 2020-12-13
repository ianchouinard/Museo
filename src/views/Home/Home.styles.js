
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
        maxWidth: '1600px',
        margin: '40px auto',
        fontFamily: 'sans-serif',
    },
    compList: {
        display: 'flex',
        flexWrap: 'wrap',
        '& a': {
            display: 'block',
            flexBasis: 'calc(50% - 60px)',
            margin: '10px',
            background: '#f2f2f2',
            padding: '20px',
            borderRadius: '3px',
            color: '#282828',
            textDecoration: 'none',
            fontSize: '21px',
            boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.25)',
            '& span': {
                display: 'inline-block',
                marginTop: '20px',
                padding: '10px 15px',
                borderRadius: '8px',
                boxShadow: '0px 0px 5px 0px rgba(0,0,0,0.1)',
                background: '#fff'
            },
            '&:hover': {
                color: '#fff',
                background: '#3F7FBF',
                '& span': {
                    background: 'rgba(250,250,250,.2)'
                }
            }
        }
    },
    previewWrapper: {
        width: '100%',
        height: '150px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '& iframe': {
            position: 'absolute',
            left: '0',
            top: '-50%',
            width: '200%',
            height: '300px',
            transform: 'scale(.5)',
            transformOrigin: 'left',
            border: 'none',
            pointerEvents: 'none'
        }
    }
};

export default styles;
