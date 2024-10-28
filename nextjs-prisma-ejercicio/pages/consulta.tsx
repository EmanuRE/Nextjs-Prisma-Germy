
'use client';

import { useState } from 'react';

export default function ConsultaPage() {
  const [codigo, setCodigo] = useState('');
  const [producto, setProducto] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`/api/productos/${codigo}`);
    const data = await response.json();
    setProducto(data);
  }

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>CONSULTA POR CODIGO</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <input
          type="text"
          placeholder="Ingrese el código del producto"
          value={codigo}
          onChange={(e) => setCodigo(e.target.value)}
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Consultar</button>
      </form>
      {producto && (
        <div style={detailsContainerStyle}>
          <h3>Detalles del Producto</h3>
          <p><strong>Nombre:</strong> {producto.nombre}</p>
          <p><strong>Descripción:</strong> {producto.descripcion}</p>
          <p><strong>Precio:</strong> ${producto.precio}</p>
          <p><strong>Stock:</strong> {producto.stock}</p>
        </div>
      )}
    </div>
  );
}

const containerStyle = {
  textAlign: 'center',
  padding: '50px',
  backgroundColor: '#ffffff', 
  minHeight: '70vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const headerStyle = {
  color: '#003366', 
  marginBottom: '40px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '10px', 
};

const inputStyle = {
  padding: '10px',
  width: '300px', 
  border: '1px solid #007bbd', 
  borderRadius: '5px',
};

const buttonStyle = {
  backgroundColor: '#007bbd', 
  color: '#ffffff',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'background-color 0.3s',
};

const detailsContainerStyle = {
  marginTop: '20px',
  padding: '20px',
  backgroundColor: '#ffffff', 
  borderRadius: '8px',
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
};
