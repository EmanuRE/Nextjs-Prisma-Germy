
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div style={layoutStyle}>
      <Navbar />
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const contentStyle = {
  marginTop: '60px', 
  padding: '20px',
};

export default Layout;
