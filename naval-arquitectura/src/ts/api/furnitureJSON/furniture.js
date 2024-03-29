const furniture = [
  {
    name: 'Banco Meditar',
    id: 'banco-meditar',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano.',
    description: 'Banco para meditar armable de cedro rojo mexicano.',
    measurement: {
      length: 35,
      width: 15,
      height: 18
    },
    related: ['banco-asiento', 'banco-escalon', 'taburete']
  },
  {
    name: 'Banco Asiento',
    id: 'banco-asiento',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano.',
    description: 'Banco asiento armable de cedro rojo mexicano.',
    measurement: {
      length: 35,
      width: 15,
      height: 32
    },
    related: ['banco-meditar', 'banco-escalon', 'taburete']
  },
  {
    name: 'Banco Escalón',
    id: 'banco-escalon',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano.',
    description: 'Banco escalón armable de cedro rojo mexicano.',
    measurement: {
      length: 35,
      width: 15,
      height: 50
    },
    related: ['banco-asiento', 'banco-meditar', 'taburete']
  },
  {
    name: 'Silla',
    id: 'silla',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano, tejido de palma.',
    description: 'Silla estándar armable de cedro rojo mexicano, base y respaldo de tejido de palma.',
    measurement: {
      length: 44,
      width: 43,
      height: 75
    },
    related: ['silla-alta', 'silla-baja', 'silla-lectura', 'silla-mecedora']
  },
  {
    name: 'Silla Alta',
    id: 'silla-alta',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano, tejido de palma.',
    description: 'Silla alta armable de cedro rojo mexicano, base y respaldo de tejido de palma.',
    measurement: {
      length: 40,
      width: 35,
      height: 106
    },
    related: ['silla', 'silla-baja', 'silla-lectura', 'silla-mecedora']
  },
  {
    name: 'Silla Baja',
    id: 'silla-baja',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano, tejido de palma.',
    description: 'Silla baja armable de cedro rojo mexicano, base y respaldo de tejido de palma.',
    measurement: {
      length: 40,
      width: 50,
      height: 54
    },
    related: ['silla-alta', 'silla', 'silla-lectura', 'silla-mecedora']
  },
  {
    name: 'Silla Lectura',
    id: 'silla-lectura',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano, tejido de palma.',
    description: 'Silla para lectura armable de cedro rojo mexicano, base y respaldo de tejido de palma.',
    measurement: {
      length: 54,
      width: 45,
      height: 110
    },
    related: ['silla-alta', 'silla-baja', 'silla', 'silla-mecedora']
  },
  {
    name: 'Silla Mecedora',
    id: 'silla-mecedora',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano, tejido de palma.',
    description: 'Silla mecedora armable de cedro rojo mexicano, base y respaldo de tejido de palma.',
    measurement: {
      length: 54,
      width: 45,
      height: 110
    },
    related: ['silla-alta', 'silla-baja', 'silla-lectura', 'silla']
  },
  {
    name: 'Taburete',
    id: 'taburete',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano, tejido de palma.',
    description: 'Taburete armable de cedro rojo mexicano, base y respaldo de tejido de palma.',
    measurement: {
      length: 35,
      width: 35,
      height: 42
    },
    related: ['catre', 'banco-meditar', 'banco-escalon', 'banco-asiento']
  },
  {
    name: 'Catre',
    id: 'catre',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano, tejido de palma.',
    description: 'Catre armable de cedro rojo mexicano, base de tejido de palma.',
    measurement: {
      length: 180,
      width: 60,
      height: 42
    },
    related: ['taburete', 'banco-asiento']
  },
  {
    name: 'Caja Herramientas',
    id: 'caja-herramientas',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano.',
    description: 'Caja para herramientas de cedro rojo mexicano.',
    measurement: {
      length: 25,
      width: 15,
      height: 11
    }
  },
  {
    name: 'Buró',
    id: 'buro',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano.',
    description: 'Buró armable de cedro rojo mexicano.',
    measurement: {
      length: 35,
      width: 19,
      height: 40
    },
    related: ['silla-mecedora', 'silla', 'silla-lectura']
  },
  {
    name: 'Mesa',
    id: 'mesa',
    price: '2800.00 mxn',
    material: 'Cedro rojo mexicano.',
    description: 'Mesa armable de cedro rojo mexicano.',
    measurement: {
      length: 90,
      width: 90,
      height: 75
    },
    related: ['silla', 'silla-alta', 'silla-mecdora', 'silla-lectura']
  },
]

export default furniture;
