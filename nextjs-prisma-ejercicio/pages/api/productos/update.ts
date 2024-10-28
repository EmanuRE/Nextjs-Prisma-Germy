import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'PUT') {
    const { codigo, nombre, descripcion, precio, stock } = req.body;

    console.log("Código recibido:", codigo);
    console.log("Cuerpo de la solicitud:", req.body); 

    try {
      const updatedProducto = await prisma.producto.update({
        where: { codigo }, 
        data: {
          nombre,
          descripcion,
          precio,
          stock,
        },
      });
      res.status(200).json(updatedProducto);
    } catch (error) {
      console.error("Error al actualizar el producto:", error); 
      res.status(500).json({ error: "Error al actualizar el producto", details: error.message });
    }
  } else {
    res.status(405).json({ message: 'Only PUT requests allowed' });
  }
}
