import { v1 as uuid } from 'uuid';
export default {
  edit:{
    visible: false,
    type: "",
    title: "",
  },
  color: false,
  office: {
    id: "5e8e36b31c9d440000d35090",
    name: "ClasiHome",
    email: "clasi@clasihome.cl",
    address: "Hola",
    phone: {
      countryCode: "5555",
      areaCode: "555",
      phoneNumber: "55555555"
    },
    mobile: {
      countryCode: "5555",
      areaCode: "555",
      phoneNumber: "55555555"
    },      
  },
  main:{
    primaryColor: "#f00046",
    secondaryColor: "#ffffff",
    favicon: "",
    logo:{
      isImage: false,
      value: "The Floop" /*require("assets/images/templates/floop/logo.png")*/,
    },
  },
  home:{
    hero:{
      visible: true,
      title: "Somos lo mejor en el mercado inmobiliario",
      background: require("assets/images/templates/floop/hero.jpg"),
    },
    properties:{
      visible: true,
      title: "Contamos con una seleción exclusiva de propiedades.",
      footer: "Estas son solo algunas de las propiedades que tenemos para ofrecerte",
      buttonText: "Ver todas las propiedades",
      items:[
        {
          mainImage: require('assets/images/templates/floop/property-1.png'),
          title: "Casa en lo Barnechea",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Valle del Monasterio / manquele oriente",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 4
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          mainImage: require('assets/images/templates/floop/property-2.png'),
          title: "Casa en Vitcura",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Lo Curro",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 8
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          mainImage: require('assets/images/templates/floop/property-3.png'),
          title: "Casa en Las Condes",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Malaga",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 6
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          mainImage: require('assets/images/templates/floop/property-4.png'),
          title: "Casa en lo Barnechea",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Rosario / Casorra Alzamona",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 6
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        }, 
        {
          mainImage: require('assets/images/templates/floop/property-1.png'),
          title: "Casa en lo Barnechea",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Valle del Monasterio / manquele oriente",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 4
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          mainImage: require('assets/images/templates/floop/property-2.png'),
          title: "Casa en Vitcura",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Lo Curro",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 8
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          mainImage: require('assets/images/templates/floop/property-3.png'),
          title: "Casa en Las Condes",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Malaga",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 6
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },
        {
          mainImage: require('assets/images/templates/floop/property-4.png'),
          title: "Casa en lo Barnechea",
          currency: 'UF',
          value: 75000,
          operation: "Venta",
          code: "345678",
          ubication:{
            address: "Rosario / Casorra Alzamona",
          },
          characteristics:[
            {
              id: "5f0591b437096b0008b019d5",
              name: "Habitaciones",
              value: 6
            },
            {
              id: "5f0591b437096b0008b019d5",
              name: "Sup. Total",
              value: 1000
            },
          ]
        },                                              
      ],
    },
    about:{
      banner:{
        visible: true,
        image: require('assets/images/templates/floop/service.jpg'),
        title: "Somos una empresa con mas de 20 años en el rubro del corretaje inmobiliario",
        subTitle: "Esto nos permite entender mejor que nadie las necesidades de nuestros clientes, por eso ponemos el foco en que la experienca de compra o arriendo sea única",
        buttonText: "Conocénos",
      },
    },
    services:{
      visible: true,
      items:[
        {
          id: uuid(),
          title: 'Compras',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          id: uuid(),
          title: 'Ventas',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          id: uuid(),
          title: 'Arriendo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },                
        {
          id: uuid(),
          title: 'Compras',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          id: uuid(),
          title: 'Ventas',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          id: uuid(),
          title: 'Arriendo',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },                   
      ]      
    },
    reviews:{
      visible: true,
      items:[
        {
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.',
          author:'Adrian Carcamo - Clasihome'
        },
        {
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.',
          author:'Elon musk - Space-x'
        },
        {
          review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vulputate sapien at nisi volutpat dictum. Maecenas vel lorem tellus. Sed sit amet sollicitudin nisi. Sed consectetur eget orci sit amet condimentum.',
          author:'Montgomery burns - Planta nuclear de springfield'
        },     
      ],
    },
    contact:{
      visible: true,
      buttonText: "¿Necesitas vender, arrendar o comprar una propiedad? Somos tu socio perfecto.",
    },    
  }
}