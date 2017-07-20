var zoo = {
	nombre:"Zoologico de Chapultepec",
	ubicacion: {},
	contacto: {},
	areas: [],
	aforo: 300
}

zoo.ubicacion = {
	direccion:"Plaza de la Constitución, No. 1, 3er. Piso, Col. Centro, Del. Cuauhtémoc, C.P. 06068",
	ciudad:"CDMX",
	pais:"Mexico"
}

zoo.contacto = {
	telefono:"5345 8187",
	email:"atencionciudadana@sedema.df.gob.mx",
	web:"http://data.sedema.cdmx.gob.mx/zoo_chapultepec/"
}

var areaReptil = {
	nombre: "Reptiles",
	individuos: 306, 
	aforoMaximoZona: 30,
	recintos: []
}
var recintoTortugas = {
	nombre: "Tortugas",
	animales: []
}
var tortuga1= {
	nombre:"Juanita",
	salud: 80,
	especie: "C. duncanensis"
}


var areaMamiferos = {
	nombre: "Mamiferos",
	individuos: 332, 
	aforoMaximoZona: 60,
	recintos: []
}
var recintoCanguros = {
	nombre: "Canguros",
	animales: []
}
var canguro1= {
	nombre:"Kevin",
	salud: 100,
	especie: "M. giganteus giganteus"
}


var areaAves = {
	nombre: "Aves",
	individuos: 985, 
	aforoMaximoZona: 70,
	recintos: []
}
var recintoAguilas = {
	nombre: "Aguilas",
	animales: []
}
var aguila1= {
	nombre:"Hector",
	salud: 100,
	especie: "Aquila chrysaetos"
}


function crearArea(nombreRecibido, aforoRecibido, individuos){
	return {
		nombre: nombreRecibido,
		individuos: individuos,
		aforoMaximoZona: aforoRecibido,
		recintos: []
	}
}

zoo.areas.push(areaReptil);
zoo.areas.push(areaMamiferos);
zoo.areas.push(areaAves);

zoo.areas[0].recintos.push(recintoTortugas);
zoo.areas[1].recintos.push(recintoCanguros);
zoo.areas[2].recintos.push(recintoAguilas);

zoo.areas[0].recintos[0].animales.push(tortuga1);
zoo.areas[1].recintos[0].animales.push(canguro1);
zoo.areas[2].recintos[0].animales.push(aguila1);


console.log(zoo);