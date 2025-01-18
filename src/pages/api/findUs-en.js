const findUs_en = [
	{
		title: 'By road from the UK',
		body: [
			"If you are travelling from the UK we find that the best route is to take the Brittany Ferries night crossing from Portsmouth to    Caen which arrives at 6.45am. It is then a leisurely six hour drive (so allow 8 hours in total) to reach us and you'll be with us in time for check-in and a mid-afternoon cuppa.",
			'A good place to stop for lunch is the truck stop (Routiers) in Payré on the N10. It does a decent lunch for about €14 and closes at 14.00.',
			'The best route from Caen is:',
			'D84/D514/D515 - Ouistreham-Caen',
			"N814 - Caen rocade/ring-road (Exit Porte D'Espagne)",
			'N158/A88 - Heading towards Le Mans',
			'A28 - Heading towards Le Mans',
			'A11 - Le Mans ring-road then A28 again to Tours',
			'A10 - Tours towards Poitiers/Bordeaux',
			"You can then stay on the A10 all the way to J39a (Libourne) but we recommend that you exit the A10 at J30 (Poitiers Sud) and pick up the N10 - it's shorter and there are no tolls!",
			'From this point, follow your sat nav to Chemin de Peyreton, 33141 and it should bring you to our door!',
			'You could do less motorway and take a more scenic route if desired so if that has its attractions for you please call us if you would like any suggestions.',
		],
	},
	{
		title: 'Flying Regionally',
		body: [
			"If you're flying in, then both Bordeaux (Easyjet, KLM, Air France) and Bergerac (Ryanair) airports are good bets.",
			'Bordeaux is closer, but Bergerac airport and the roads towards us are quieter so they are both probably 45 minutes or so.',
			'Cars can be hired at either airport with all the major companies represented.',
		],
	},
	{
		title: 'Flying Internationally',
		body: [
			'If flying internationally into Paris, then you could either pick up a regional flight from Paris (see Flying Regionally) or take the TGV (high-speed train) from Montparnasse station.',
			'If you take the TGV be sure to take one which stops in Libourne (some go straight through to Bordeaux). Europcar and Avis have car hire locations at Libourne station.',
		],
	},
	{
		title: 'By road from the East',
		body: [
			'If you travel from the East or North-East then you head for the A89 which runs from Clermont-Ferrand towards Bordeaux.',
			'Exit the A89 at J10 towards Libourne and then take the D18 towards Villegouge and follow your sat nav.',
		],
	},
	{
		title: 'By road from the south',
		body: [
			"You'll be travelling on the A62 or A63 towards Bordeaux and picking up the A630 Bordeaux ring-road.",
			'We would recommend the A63 route, as depending on exactly where you are coming from if you head for the A62 the route may end up taking you over some very windy Pyrenean mountain roads!',
			'Once on the A630 follow signs for the A10 Paris, exit at J40b (Libourne) and then follow your sat nav.',
		],
	},
];

export default async function getFindus(req, res) {
	res.status(200).json(findUs_en);
}
