const findUs_fr = [
	{
		title: 'Par la route depuis le Royaume-Uni',
		body: [
			"Si vous voyagez depuis le Royaume-Uni, nous constatons que le meilleur itinéraire est de prendre la traversée de nuit Brittany Ferries de Portsmouth à Caen qui arrive à 6h45. Il vous faudra ensuite six heures de route (prévoyez donc 8 heures au total) pour nous rejoindre et vous serez avec nous à temps pour l'enregistrement et une tasse de thé en milieu d'après-midi.",
			"Un bon endroit pour s'arrêter pour déjeuner est le relais routier (Routiers) à Payré sur la N10. Il offre un déjeuner décent pour environ 14 € et ferme à 14h00.",
			'Le meilleur itinéraire depuis Caen est :',
			'D84/D514/D515 - Ouistreham-Caen',
			"N814 - Caen rocade/rocade (Sortie Porte D'Espagne)",
			'N158/A88 - Direction Le Mans',
			'A28 - En direction Le Mans',
			'A11 - Périphérique Le Mans puis A28 à nouveau vers Tours',
			'A10 - Tours direction Poitiers/Bordeaux',
			"Vous pouvez ensuite rester sur l'A10 jusqu'à J39a (Libourne) mais nous vous recommandons de quitter l'A10 à J30 (Poitier Sud) et de prendre la N10 - c'est plus court et il n'y a pas de péage !",
			"De là, suivez votre GPS jusqu'au Chemin de Peyreton, 33141 et il devrait vous amener à notre porte !",
			"Vous pouvez faire moins d'autoroute et prendre un itinéraire plus pittoresque si vous le souhaitez, donc si cela a ses attraits pour vous, veuillez nous appeler si vous souhaitez des suggestions.",
		],
	},
	{
		title: 'Vol régional',
		body: [
			"Si vous prenez l'avion, les aéroports de Bordeaux (Easyjet, KLM, Air France) et de Bergerac (Ryanair) sont des bons choix.",
			"Bordeaux est plus proche, mais l'aéroport de Bergerac et les routes vers nous sont plus calmes, donc ils sont tous les deux probablement à 45 minutes environ.",
			"Les voitures peuvent être louées à l'un ou l'autre aéroport avec toutes les grandes entreprises représentées.",
		],
	},
	{
		title: 'Vol international',
		body: [
			'Si vous prenez un vol international vers Paris, vous pouvez soit prendre un vol régional depuis Paris (voir Voler en région) ou prendre le TGV (train à grande vitesse) depuis la gare Montparnasse.',
			"Si vous prenez le TGV, assurez-vous d'en prendre un qui s'arrête à Libourne (certains vont directement à Bordeaux). Europcar et Avis ont des agences de location de voitures à la gare de Libourne.",
		],
	},
	{
		title: "Par la route de l'Est",
		body: [
			"Si vous venez de l'Est ou du Nord-Est, vous vous dirigez vers l'A89 qui relie Clermont-Ferrand à Bordeaux.",
			"Sortez de l'A89  (sortie 10) vers Libourne puis prenez la D18 vers Villegouge et suivez votre GPS.",
		],
	},
	{
		title: 'Par la route du sud',
		body: [
			"Prenez l'A62 ou l'A63 en direction de Bordeaux puis prenez la rocade bordelaise A630.",
			"Nous vous recommandons l'itinéraire A63, car selon votre provenance exacte si vous vous dirigez vers l'A62, l'itinéraire peut finir par vous emmener sur des routes de montagne pyrénéennes très venteuses !",
			"Une fois sur l'A630 suivez la direction A10 Paris, sortez à 40b (Libourne) puis suivez votre GPS.",
		],
	},
];

export default async function getFindus(req, res) {
	res.status(200).json(findUs_fr);
}
