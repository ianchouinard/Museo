const styles = {
    componentNav: {
        display: 'flex',
        alignItems: 'center',
        height: '63px',
        marginRight: '10px',
        color: '#333',
        '&:hover ul': {
            opacity: '1',
            transform: 'translateY(0)',
            height: 'auto',
            padding: '10px',
            overflowY: 'auto'
        } 
    },
    control: {
        display: 'block',
        margin: '0 5px',
        cursor: 'pointer',
        color: '#828282',
        '&:hover': {
            color: '#3F7FBF'
        }
    },
    name: {
        transform: 'translateY(-1px)'
    },
    compList: {
        position: 'absolute',
        right: '0px',
        width: '270px',
        marginTop: '24px',
        background: '#f2f2f2',
        listStyle: 'none',
        border: '1px solid #ccc',
        borderTop: 'none',
        borderBottomRightRadius: '8x',
        borderBottomLeftRadius: '8px',
        opacity: '0',
        height: 0,
        maxHeight: 'calc(100vh - 99px)',
        overflow: 'hidden',
        transform: 'translateY(20px)',
        transition: 'transform 350ms, opacity 350ms',
        '&:hover': {
            opacity: '1',
            height: 'auto',
            transform: 'translateY(0)',
            padding: '10px',
            overflowY: 'auto'
            
        },
        '& li': {
            marginBottom: '7px',
            padding: '4px',
            borderRadius: '4px',
            background: 'fff',
            fontSize: '13px',
            cursor: 'pointer',
            '&:last-child': {
                marginBottom: '0px'
            },
            '&.active': {
                background: '#3F7FBF',
                color: '#fff'
            },
            '&:hover': {
                background: '#3F7FBF',
                color: '#fff'
            }
        }
    }
};

export default styles;
