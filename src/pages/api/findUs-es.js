const findUs_es = [
	{
		title: 'Por carretera desde el Reino Unido',
		body: [
			'Si viaja desde el Reino Unido, creemos que la mejor ruta es tomar el cruce nocturno de Brittany Ferries de Portsmouth a Caen, que llega a las 6:45 am. Luego tendrá seis horas por carretera (así que calcule 8 horas en total) para llegar a nosotros y estará con nosotros a tiempo para registrarse y tomar una taza de té a media tarde.',
			'Un buen lugar para parar a almorzar es el relais routier (Routiers) en Payré en la N10. Ofrece un almuerzo decente por unos 14 € y cierra a las 14:00.',
			'La mejor ruta desde Caen es:',
			'D84/D514/D515 - Ouistreham-Caen',
			"N814 - Carretera de circunvalación de Caen/carretera de circunvalación (salida Porte D'Espagne)",
			'N158/A88 - Dirección Le Mans',
			'A28 - En dirección a Le Mans',
			'A11 - Peripherique de Le Mans luego A28 nuevamente hacia Tours',
			'A10 - Tours hacia Poitiers/Bordeaux',
			'Luego puede permanecer en la A10 hasta la J39a (Libourne), pero le recomendamos que deje la A10 en la J30 (Poitier Sud) y tome la N10, ¡es más corta y no hay peaje!',
			'Desde allí, siga su GPS hasta Chemin de Peyreton, 33141 y debería llevarlo a nuestra puerta.',
			'Puede hacer menos carretera y tomar una ruta más pintoresca si lo desea, así que si esto le atrae, llámenos si desea alguna sugerencia.',
		],
	},
	{
		title: 'Vuelo regional',
		body: [
			'Si vas a volar, los aeropuertos de Burdeos (Easyjet, KLM, Air France) y Bergerac (Ryanair) son buenas opciones.',
			'Burdeos está más cerca, pero el aeropuerto de Bergerac y las carreteras hacia nosotros son más tranquilas, por lo que probablemente ambos estén a unos 45 minutos.',
			'Los coches se pueden alquilar en cualquiera de los dos aeropuertos con todas las principales empresas representadas.',
		],
	},
	{
		title: 'Vuelo internacional',
		body: [
			'Si toma un vuelo internacional a París, puede luego tomar un vuelo regional desde París (consulte Vuelo regional) o tomar el TGV (tren de alta velocidad) desde la estación de Montparnasse.',
			'Si toma el TGV, asegúrese de tomar uno que pare en Libourne (algunos van directamente a Burdeos). Europcar y Avis tienen agencias de alquiler de coches en la estación de Libourne.',
		],
	},
	{
		title: 'Por el este',
		body: [
			'Si viene del este o del noreste, diríjase a la A89 que conecta Clermont-Ferrand con Burdeos.',
			'Salga de la A89 (salida 10) hacia Libourne, luego tome la D18 hacia Villegouge y siga su GPS.',
		],
	},
	{
		title: 'Por la ruta del sur',
		body: [
			'Tome la A62 o la A63 en dirección a Burdeos y tome la carretera de circunvalación de Burdeos A630.',
			'Recomendamos la ruta A63, porque dependiendo de dónde vengas exactamente, si te diriges hacia la A62, ¡la ruta puede terminar llevándote por algunas carreteras de montaña pirenaicas con mucho viento!',
			'Una vez en la A630, siga la dirección A10 París, salga en 40b (Libourne) y luego siga su GPS.',
		],
	},
];

export default async function getFindus(req, res) {
	res.status(200).json(findUs_es);
}
