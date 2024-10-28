

export default function HomePage() {
  return (
    <div style={containerStyle}>
      
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '10px',
  backgroundImage: 'url("/fondo.png")', 
  backgroundSize: 'contain', 
  backgroundRepeat: 'no-repeat', 
  backgroundPosition: 'center', 
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const headerStyle = {
  color: '#ffffff', 
  fontSize: '2.5rem', 
  fontWeight: 'bold', 
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)', 
};
