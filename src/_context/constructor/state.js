
export default {
  edit:{
    visible: true,
    type: "TEXT_CARDS",
    title: "Servicios",
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
    about:{
      banner:{
        visible: true,
        image: require('assets/images/templates/floop/service.jpg'),
        title: "Somos una empresa con mas de 20 años en el rubro del corretaje inmobiliario",
        subTitle: "Esto nos permite entender mejor que nadie las necesidades de nuestros clientes, por eso ponemos el foco en que la experienca de compra o arriendo sea única",
        buttonText: "Conocénos",
      },
      services:[
        {
          title: 'Compras',
          p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          title: 'Ventas',
          p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          title: 'Arriendo',
          p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },                
        {
          title: 'Compras',
          p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          title: 'Ventas',
          p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },
        {
          title: 'Arriendo',
          p: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium fringilla ex at hendrerit',
        },                   
      ],
    }
  }
}