function Menu() {
    const menu = {
        background: 'black', 
        display: 'flex',
        justifyContent: 'center'
    };

    const link = {
        display: 'inlineBlock',
        textDecoration: 'none',
        padding: '20px',
        color: '#fff', 
        fontSize: '20px'
    };

    return (
        <>
            <nav style={menu}>
                <ul style={link}>
                    <li><a href="/" style={link}>HOME</a></li>
                    <li><a href="/ListaCarros" style={link}>TECNOLOGIA</a></li>
                    <li><a href="/sobre" style={link}>SOBRE</a></li>
                </ul>
            </nav>
        </>
    );
}

export default Menu;
