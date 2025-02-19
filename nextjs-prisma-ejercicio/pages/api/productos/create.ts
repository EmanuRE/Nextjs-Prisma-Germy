import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { codigo, nombre, descripcion, precio, stock } = req.body;

    if (!codigo || !nombre || !descripcion || precio == null || stock == null) {
      return res.status(400).json({ error: "Faltan datos requeridos." });
    }

    try {
      const newProduct = await prisma.producto.create({
        data: {
          codigo,
          nombre,
          descripcion,
          precio: parseFloat(precio),
          stock: parseInt(stock),
        },
      });
      res.status(200).json(newProduct);
    } catch (error) {
      console.error('Error creating product:', error); 
      res.status(500).json({ error: "Error creating product", details: error.message }); 
    }
  } else {
    res.status(405).json({ message: 'Only POST requests allowed' });
  }
}
