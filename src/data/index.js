const productos = [
    {
        id: 0,
        title: "Camiseta Uno",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/2/1/2126583799_1-1652624085769374.jpg",
        category: "remeras",
        smDescription:"Camiseta corta de Lycra",
        lgDescription:"Camiseta corta de Lycra con estampado en la espalda. Color -Negro. Composición de la tela -95% Algodón 5% Spandex. Tallas modelo - Blusa L Altura 185",
        price: "4.200",
        stock: "5"
    },
    {
        id: 1,
        title: "Camiseta Dos",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/8/0/806181200_1-1652623962812463.jpg",
        category: "remeras",
        smDescription:"Camiseta de Lycra con cuello V corto",
        lgDescription:"Camiseta de Lycra con cuello V corto. Color blanco. Composición de la tela -95% Algodón 5% Spandex. Tallas modelo - Blusa L Altura 185", 
        price: "4.200",
        stock: "5"
    },
    {
        id: 2,
        title: "Camiseta Tres",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/6/M6181I-2660559_1-16533844524383241.jpg",
        category: "remeras",
        smDescription:"Camiseta corta de algodón con logo de hombre",
        lgDescription:"Camiseta corta de algodón con logo de hombre. Color Rojo. Composición de la tela -100% algodón",
        price: "4.700",
        stock: "3"
    },
    {
        id: 3,
        title: "Camiseta Cuatro",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/6/M6028-22662G432_1-16533109775231880.jpg",
        category: "remeras",
        smDescription:"Camiseta corta verde militar",
        lgDescription:"Camiseta corta. Color verde militar oscuro. Composición de la tela -100% algodón. La altura del modelo es 185 cm. Lleva la talla XL",
        price: "5.600",
        stock: "3"
    },
    {
        id: 4,
        title: "Polo Cinco",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/2/2/2226680790_1-165262330891657.jpg",
        category: "remeras",
        smDescription:"Polo corto color negro",
        lgDescription:"Polo corto para hombre. Color negro. Tipo de tela -Polo LR corto. Composición de la tela -95% Algodón 5% Spandex",
        price: "6.300",
        stock: "4"
    },
    {
        id: 5,
        title: "Polo Seis ",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/2/2/2226680700_1-1652623308699049.jpg",
        category: "remeras",
        smDescription:"Polo corto R color blanco",
        lgDescription:"Polo corto R para hombre. Color blanco. Composición de la tela -93% Algodón 7% Spandex",
        price: "6.300",
        stock: "4"
    },
    {
        id: 6,
        title: "Polo Siete",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/9e9fab1b83ac1159ebe5f189e6aceda3/2/2/2226680331_1-165262330788016.jpg",
        category: "remeras",
        smDescription:"Polo corto color rosa claro",
        lgDescription:"Polo corto para hombre. Color -Rosa claro. Tipo de tela -Polo LR corto. Composición de la tela -95% Algodón 5% Spandex",
        price: "6.300",
        stock: "4"
    },
    {
        id: 7,
        title: "Polo Ocho",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/2/2/2226680199_2-165262330785342.jpg",
        category: "remeras",
        smDescription:"Polo corto R",
        lgDescription:"Polo corto R para hombre. Color -Negro. Composición de la tela -93% Algodón 7% Spandex",
        price: "7.100",
        stock: "4"
    },
    {
        id: 8,
        title: "Jean Uno",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/9/M914Y-661I170098_3-16550182591641378.jpg",
        category: "jeans",
        smDescription:"Jean Bronny",
        lgDescription:"Bronny Jeans Masculinos. Color -Negro. Tipo de tela -BRONNY. Composición de la tela -68% Algodón 27% Poliéster 5% Elastano. Dimensiones del modelo - el tamaño del modelo 33 altura 183",
        price: "5.600",
        stock: "4"
    },
    {
        id: 9,
        title: "Jean Dos",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/9/M914Y-207I185010_1-16533107486204327.jpg",
        category: "jeans",
        smDescription:"Jeans Anbass Masculino",
        lgDescription:"Jeans Anbass Masculino. Color -Azul claro. Tipo de tejido - ANBASS. Composición de la tela -96% Algodón 3% Poliéster 1% Lycra. Tamaños de modelo - Altura del modelo 185 Wears Size 33",
        price: "7100",
        stock: "4"
    },
    {
        id: 10,
        title: "Jean Tres",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/9/M914Y-425I169009_1-16533108175385602.jpg",
        category: "jeans",
        smDescription:"Jeans Anbass Masculino",
        lgDescription:"Jeans Anbass Masculino. Color -Medio Azul. Tipo de tejido - ANBASS. Composición de la tela -98% Algodón 2% Lycra. Tamaños de modelo - Altura del modelo 185 Wears Size 33",
        price: "7100",
        stock: "4"
    },
    {
        id: 11,
        title: "Jean Cuatro",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/a/MA934-573BB92007_1-1652623683399282.jpg",
        category: "jeans",
        smDescription:"Jean Bronny super slim",
        lgDescription:"ronny Super Slim Jeans Hombre Suave. Color -Azul Oscuro. Tipo de tela -BRONNY. Composición de la tela -98% Algodón 2% Lycra",
        price: "7100",
        stock: "4"
    },
    {
        id: 12,
        title: "Jean Cinco",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/a/MA934-141I165009_1-16533844396167895.jpg",
        category: "jeans",
        smDescription:"Jean Bronny",
        lgDescription:"Bronny Jeans Masculinos. Color -Medio Azul. Tipo de tela -BRONNY. Composición de la tela -95% Algodón 3% Poliéster 2% Elastano. Tamaños de modelo - Altura del modelo 185 Talle 33",
        price: "7100",
        stock: "4"
    },
    {
        id: 13,
        title: "Jean Seis",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/9/M914Y-573I103007_1-1652623439836491.jpg",
        category: "jeans",
        smDescription:"Jeans Anbass Slim con rasgaduras",
        lgDescription:"Jeans Anbass Slim con rasgaduras masculino. Color -Azul Oscuro. Tipo de tejido - ANBASS. Composición de la tela -98% Algodón 2% Lycra. Tallas de modelo - Jeans 32 Altura 185",
        price: "7100",
        stock: "4"
    },
    {
        id: 14,
        title: "Zapatillas Uno",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/r/z/RZ520039T-003_1-16532070357426122.jpg",
        category: "zapatillas",
        smDescription:"Zapatillas Blog de hombre",
        lgDescription:"BLOG De Hombre Zapatillas. Color -negro. Composición de la tela -superior: 100% denim, Interior: 70% Tela de toalla 30% poliuretano, Suela: 100% termoplástico de goma",
        price: "7100",
        stock: "4"
    },
    {
        id: 15,
        title: "Zapatillas Dos",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/r/z/RZ3R0001L-047_1-16550183146756480.jpg",
        category: "zapatillas",
        smDescription:"Zapatillas Reload Washed para hombre",
        lgDescription:"Zapatillas RELOAD WASHED para hombre. Color -Rojo. Composición de la tela -100% Cuero, 60% Poliuretano 40% Poliéster, 100% Caucho",
        price: "7100",
        stock: "4"
    },
    {
        id: 16,
        title: "Zapatillas Tres",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/r/z/RZ3P0002L-008_1-16550183252455198.jpg",
        category: "zapatillas",
        smDescription:"Zapatillas Polaris Perf Rz",
        lgDescription:"POLARIS PERF RZ ZAPATILLAS DE HOMBRE. Color -Blanco y Negro. Composición del tejido -Superior: 95% Cuero 5% Poliuretano, Interior: 100% Poliéster, Suela: 100% Caucho",
        price: "7100",
        stock: "4"
    },
    {
        id: 17,
        title: "Zapatillas Cuatro",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/r/z/RZ1G0031S-079_3-16550183253660432.jpg",
        category: "Zapatillas",
        smDescription:"Zapatillas Trae Mid Sport Unbroken RZ",
        lgDescription:"TRAE ZAPATILLAS MID SPORT UNBROKEN RZ. Color -Blanco-Rojo. Composición del tejido -Superior: 80% Poliéster 20% Poliuretano, Interior: 100% Poliéster, Suela: 100% Caucho Termoplástico",
        price: "7100",
        stock: "4"
    },
    {
        id: 18,
        title: "Zapatillas Cinco",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/r/z/RZ3R0001L-087_1-16550183144396723.jpg",
        category: "zapatillas",
        smDescription:"Zapatillas Reload Washed para hombre",
        lgDescription:"Zapatillas RELOAD WASHED para hombre. Color amarillo. Composición de la tela -100% Cuero, 60% Poliuretano 40% Poliéster, 100% Caucho",
        price: "7100",
        stock: "4"
    },
    {
        id: 19,
        title: "Zapatillas Seis",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/r/v/RV980034T-062_1-16532070152889094.jpg",
        category: "zapatillas",
        smDescription:"Zapatillas de deporte bajas Snap Graffiti",
        lgDescription:"ZAPATILLAS DE DEPORTE BAJAS SNAP GRAFFITI PARA HOMBRE.Color -Blanco Negro. Composición de la tela -Superior: 90% Canvas 10% Cuero de gamuza, Interior: 100% Canvas, Suela: 100% Termoplástico de caucho",
        price: "7100",
        stock: "4"
    },
    {
        id: 20,
        title: "Abrigo Eins",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/8/M8206-73540010_1-16526236281011510.jpg",
        category: "abrigos",
        smDescription:"Abrigo Camuflaje con bolsillos en el pecho",
        lgDescription:"Abrigo Camuflaje con capucha y con bolsillos en el pecho. Color -Negro Plata. Composición de la tela -100% poliamida, 100% poliéster, 100% poliéster. Dimensiones del modelo - Coat L Altura 188",
        price: "7100",
        stock: "4"
    },
    {
        id: 21,
        title: "Abrigo Zwei",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/8/M8183-84174919_1-16526236221229497.jpg",
        category: "abrigos",
        smDescription:"Campera de abrigo de dos colores y capucha",
        lgDescription:"Campera de abrigo de dos colores y capucha. Color -Rojo. Composición de la tela -100% poliamida/nylon, 100% poliéster, 100% poliamida/nylon, 100% poliéster",
        price: "7100",
        stock: "4"
    },
    {
        id: 22,
        title: "Abrigo Drei",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/8/M8085A-83814R376_1-16526236111029136.jpg",
        category: "abrigos",
        smDescription:"Abrigo con cremallera ",
        lgDescription:"Abrigo con cremallera para hombre. Color verde oliva. Composición del tejido -100% poliamida, 100% poliéster, 100% poliamida, 100% poliuretano poliéster",
        price: "7100",
        stock: "4"
    },
    {
        id: 23,
        title: "Abrigo Vier",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/8/M8183-84174098_1-16526236221118528.jpg",
        category: "abrigos",
        smDescription:"Campera de abrigo con capucha",
        lgDescription:"Campera de abrigo con capucha. Color -Negro. Composición de la tela -100% poliamida/nylon, 100% poliéster, 100% poliamida/nylon, 100% poliéster",
        price: "7100",
        stock: "4"
    },
    {
        id: 24,
        title: "Abrigo Funf",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/m/8/M8185-84174376_2-1652623623306041.jpg",
        category: "abrigos",
        smDescription:"Abrigo de plumas en dos colores y con capucha",
        lgDescription:"Abrigo de plumas en dos colores y con capucha. Color verde oliva. Composición de la tela -100% poliamida/nylon, 100% poliéster, 100% poliamida/nylon, 100% poliéster",
        price: "7100",
        stock: "4"
    },
    {
        id: 25,
        title: "Chaqueta Eins",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/2/1/21163840T99_1-1652623936797871.jpg",
        category: "chaquetas",
        smDescription:"Chaqueta con capucha Cremallera Interior Velore Forro Largo Logo",
        lgDescription:"Chaqueta con capucha Cremallera Interior Velore Forro Largo Logo. Color -Negro. Composición de la tela -55% Poliéster 37% Algodón 8% Lycra. Dimensiones del modelo - Sudadera con capucha L Altura 185",
        price: "7100",
        stock: "4"
    },
    {
        id: 26,
        title: "Chaqueta Zwei",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/2/1/2116280000_1-1652624041948809.jpg",
        category: "chaquetas",
        smDescription:"Chaqueta con capucha Cremallera Interior Velore Forro Largo  Gran Logotipo",
        lgDescription:"Chaqueta con capucha Cremallera Interior Velore Forro Largo  Gran Logotipo. Color blanco. Composición de la tela -55% Poliéster 37% Algodón 8% Lycra. Dimensiones del modelo - Sudadera con capucha L Altura 184",
        price: "7100",
        stock: "4"
    },
    {
        id: 27,
        title: "Chaqueta Drei",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/2/1/2116280133_1-16526240421192421.jpg",
        category: "chaquetas",
        smDescription:"Chaqueta Interior Vollure Forro Largo Logo pequeño",
        lgDescription:"Chaqueta Interior Vollure Forro Largo Logo pequeño. Color -Rojo. Composición de la tela -55% Poliéster 37% Algodón 8% Lycra. Tallas del modelo - Chaqueta S Altura 185",
        price: "7100",
        stock: "4"
    },
    {
        id: 28,
        title: "Chaqueta Vier",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/2/1/2116280100_1-1652624041676035.jpg",
        category: "chaquetas",
        smDescription:"Chaqueta con capucha cremallera interior Velore Forro largo pequeño logo pecho",
        lgDescription:"Chaqueta con capucha cremallera interior Velore Forro largo pequeño logo pecho. Color blanco. Composición de la tela -55% Poliéster 37% Algodón 8% Lycra. Tallas del modelo - Chaqueta S Altura 185",
        price: "7100",
        stock: "4"
    },
    {
        id: 29,
        title: "Chaqueta Funf",
        imgUrl: "https://www.replayjeans.co.il/pub/media/catalog/product/cache/67c268e1b8e8f489a16333acf633ace6/2/1/21163842T90_1-1652623937928932.jpg",
        category: "chaquetas",
        smDescription:"Chaqueta con capucha cremallera  Forro largo logotipo lado izquierdo",
        lgDescription:"Chaqueta con capucha cremallera interior Velore Forro largo logotipo lado izquierdo. Color -Blanco Negro. Composición de la tela -55% Poliéster 37% Algodón 8% Lycra. Dimensiones del modelo - Sudadera con capucha L Altura 184",
        price: "7100",
        stock: "4"
    },
];

export default productos;