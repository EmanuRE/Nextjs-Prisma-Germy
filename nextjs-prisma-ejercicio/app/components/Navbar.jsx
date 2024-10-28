
import Link from 'next/link';

const Navbar = () => {
  return (
    <div style={navbarStyle}>
      <nav style={navStyle}>
        <Link href="/" style={linkStyle}>
          INICIO
        </Link>
        <Link href="/listado" style={linkStyle}>
          GENERAR LISTADO
        </Link>
        <Link href="/consulta" style={linkStyle}>
          CONSULTA POR CODIGO
        </Link>
        <Link href="/creacion" style={linkStyle}>
          CREACION DE PRODUCTO
        </Link>
        <Link href="/actualizacion" style={lastLinkStyle}>
          ACTUALIZACION DE PRODUCTO
        </Link>
      </nav>
    </div>
  );
};

const navbarStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: '#003366', 
  color: '#ffffff',
  padding: '10px 0',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'center',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  fontFamily: 'Roboto, sans-serif', 
};

const navStyle = {
  display: 'flex',
  gap: '0px', 
};

const linkStyle = {
  color: '#ffffff',
  textDecoration: 'none',
  fontSize: '20px', 
  padding: '10px 15px',
  borderRadius: '5px',
  transition: 'background-color 0.3s',
  fontWeight: 'bold', 
  borderRight: '1px solid #ffffff', 
};


const lastLinkStyle = {
  ...linkStyle,
  borderRight: 'none', 
};


linkStyle[':hover'] = {
  backgroundColor: '#005fa3', 
};

export default Navbar;
