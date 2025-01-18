import styles from '@/styles/reviews/MainContent.module.css';
import ReviewTimelineItem from './ReviewTimelineItem';
import Image from 'next/image';

const MainContent = () => {
	const reviews = [
		{
			reviewName: 'Nigel & Pat',
			reviewText:
				"We spent a wonderfully relaxing week at Marta and Iain's fantastic gite in rural Bordeaux wine country.  Our hosts could not have been more welcoming and were discreet but helpful during our entire stay. Do not worry if you think the photos are too good to be true. They are not.  The place they have created is absolutely wonderful. Clean, a great mix of authentic and modern with everything you could want for a comfortable and peaceful retreat. The rear terrace area with a small pool was heaven! Nearby Villegouge had a lovely boulangerie/patisserie and a small but useful convenience store as well. Further afield are supermarkets, great restaurants and interesting day trips. We would be amazed if you were not delighted by choosing this place for your break. Thank you Marta and Iain for a fantastic week.",
			reviewDate: 'August 2024',
			reviewSite: '',
		},
		{
			reviewName: 'Sandy & Dean',
			reviewText:
				'We loved our week long stay in The Lodge. The property is beautifully appointed, spotlessly clean, and exceeded our expectations. The grounds, the private outdoor area with a barbecue, dining area and a dipping pool are truly amazing. In our month long stay in France this ranks as our #1 gite accommodation. Iain and Marta are the most welcoming hosts and have thought of everything possible to make a most memorable and comfortable stay. This is a great base from which to explore all the lovely areas Bordeaux has to offer. We cannot recommend this enough.',
			reviewDate: 'July 2024',
			reviewSite: '',
		},
		{
			reviewName: 'Ian',
			reviewText:
				"The house was beautifully appointed and spotlessly clean. Iain was friendly and helpful but kept very much in the background. The location was wonderful and just what we wanted with a lovely view from the property. I couldn't have asked for more. Thank you.",
			reviewDate: 'July 2024',
			reviewSite: 'VRBO',
		},
		{
			reviewName: 'Lise',
			reviewText:
				"Les hôtes étaient adorables. Le logement était propre et super bien équipé. Nous avons même eu le droit à du pain, du beurre ainsi que du lait pour le matin et une bouteille de leur vin. Nous avons pu jouer à la pétanque et malgré le mauvais temps nous nous sommes baignés car l'eau était à bonne température. Nous avons pu également faire un super barbecue.  Le logement était encore plus beau que sur les photos ! \n\n The hosts were lovely. The accommodation was clean and super well equipped. We were even treated to bread, butter, milk for the morning and a bottle of their wine. We were able to play pétanque and despite the bad weather we went swimming because the water was at the right temperature. We were also able to have a great barbecue.  The accommodation was even more beautiful than in the photos!",
			reviewDate: 'May 2024',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Jurgen',
			reviewText: 'Very pleasant stay in perfect accommodation with very nice hosts',
			reviewDate: 'June 2024',
			reviewSite: 'VRBO',
		},
		{
			reviewName: 'John',
			reviewText:
				'High quality renovation with secluded outdoor space and heated pool. Quiet rural location in the vines near Fronsac and close to Libourne, St Emilion and many other interesting parts of the Bordeaux region. We had an excellent 4 day stay, partly business and partly leisure!',
			reviewDate: 'June 2024',
			reviewSite: 'VRBO',
		},
		{
			reviewName: 'Louise',
			reviewText:
				'Amazing place. Marta and Iain were brilliant, very communicative and very helpful and friendly, recommending local restaurants and gave us some very useful advice about the best times to go to local tourist areas to avoid the crowds. House was spotless, beds were comfortable and the gardens were gorgeous.  It is out in the middle of the countryside (approx 40 minutes from Bordeaux) but there is a large supermarket 10 minutes away and within 15/20 minutes you can be in Libourne or St. Emilion so you will need a car, but in exchange you get peace, quiet, and great views. After a few days in the busy city it was a very nice and peaceful retreat to relax and recharge. It felt like a home. We definitely want to come back again',
			reviewDate: 'May 2024',
			reviewSite: 'AirBnB',
		},
		{
			reviewName: 'Kelly & Kevin',
			reviewText:
				"We have just returned from a 4 night stay at Iain and Marta's stunning property and loved every minute.  The hosts were very easy to communicate with before our arrival and once there we were greeted with a friendly and relaxed welcome. Everything was explained and any requests for recommendations (such as restaurants and vineyard tours) were answered with ease.  The property itself is highly specified and decorated to an exceptional standard with everything you need for your stay including a complimentary bottle of their wine (which was delicious!!).  Nothing was too much trouble and they went out of their way to help us celebrate our 30th wedding anniversary during our stay.  This lead us to having a very relaxing few days and left us with the desire to return again in the future. Thank you again Iain & Marta !!",
			reviewDate: 'May 2024',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Michel',
			reviewText:
				'La demeure de Marta et son mari est vraiment magnifique. Accueil et conseils au top. Mentions spéciales pour la piscine chauffée et le terrain de pétanque. \n\n The property of Marta and her husband is truly magnificent.  The welcome and advice were top notch.  A special mention for the private heated pool and the petanque court.',
			reviewDate: 'May 2024',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Marion',
			reviewText:
				'Magnifique logement. Gites décoré avec goût, paysage magnifique, équipements au top, literie très confortable. Petite parenthèse enchantée. \n\n Magnificent Property.  The Gites were decorated with taste, the countryside was magnificent, the best fittings and equipment.  Beds were very comfortable.  An enchanted little corner.  Spotless furniture and linens;  Squeaky-clean bathroom;  Pristine kitchen; Looked like the photos.',
			reviewDate: 'May 2024',
			reviewSite: 'AirBnB',
		},
		{
			reviewName: 'Nina',
			reviewText:
				'Wow! What a place. The cottage was beautiful and I was blown away by the setting. Everything was finished to such a high standard. Sitting in the beautiful garden with views of the vines was an absolute highlight. The Dom Peyreton wine was great too! ',
			reviewDate: 'April 2024',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Sophie',
			reviewText:
				'I have stayed at the Dom Peyreton gîtes twice and I will be back again soon! Iain and Marta are helpful, friendly and knowledgeable hosts who have gone above and beyond to make each stay special. Their hospitality totally makes it!  The cottages have been designed with great care - the barn is undoubtedly the most beautiful and best equipped cottage I have ever come across! I cannot recommend it highly enough.',
			reviewDate: 'April 2024',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Judith',
			reviewText:
				'Lovely vineyard/farmhouse. A welcome respite from 3 intense travel weeks! Easy to locate, charming interior, fully equipped kitchen. We appreciated the welcome bottle of their limited private label delicious wine so much that we drank 3 more bottles (well-priced and available for shipping) The only thing that would have made this perfect was if we had been able to stay for a week or two! Owners Marta and lain are a delightful couple.',
			reviewDate: 'April 2024',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Liz',
			reviewText:
				'We ended up staying here by mistake due to a last-minute issue with the accommodation we had booked. What a great change of plan it was! We were welcomed with a cup of tea by Iain and Marta, our delightful hosts. The accommodation was brilliant. Everything had been considered with such great attention to detail. The presence of a welcome hamper and fresh milk in the fridge was perfect! The beds were very comfortable and everything has been fitted out to a high specification. The outdoor space has been landscaped beautifully allowing both shade and sun for those who want it. The swimming pool is small but perfectly formed! We were a small group of 4 but this would be a great place to come in a larger group and take over the whole place. We had not stayed in this particular area of France before so the local information present in the cottage was really helpful, as were Iain and Marta with personal recommendations. We particularly enjoyed the market in Libourne. We would love to visit again.',
			reviewDate: 'August 2023',
			reviewSite: '',
		},
		{
			reviewName: 'Lisa',
			reviewText:
				"It's always wonderful when you find a place that meets or exceeds what was described on the internet. The owners have created a truly beautiful place to stay that is so far superior to 99% of any holiday homes we have stayed in. The property is beautifully presented, immaculately clean and incredibly well equipped. The attention to detail has created something that truly deserves the 5* rating. If that was not enough on its own, their wine is really lovely too. Wish Iain and Marta all the best with their venture. Exceptional.",
			reviewDate: 'October 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Roger',
			reviewText:
				'6 old Aussies - Our party of 6 stayed in The Barn for three nights in mid-October 2023. Our hosts, Iain and Marta, were exceptionally helpful especially when it came to assisting with one of our party who was in wheelchair after an accident on a canal boat. Not only did Iain build a ramp for her to be able to access the accommodation but Marta was also able to locate a doctor for us to be able to visit for a consultation. \n\n The Barn is absolutely beautiful with the very best quality of fixtures, fittings and artwork. The kitchen was exceptionally well equipped (especially compared with the usual collection of odds and sods, blunt knives and cheap utensils usually found in Gites/AirBNBs). The bedrooms were all of a good size and the beds were large and very comfortable. Our bedroom also had the added advantage of being wheelchair friendly. The plunge pool was much appreciated with the unseasonably warm weather for that time of the year.  The property is beautifully set amongst vineyards and open pasture bordering a forest. For these athletically inclined, there is a massive petanque area which we enjoyed using.  Within minutes you can be in a number of villages of varying sizes.  We were recommended a restaurant in Saillans (called le Saillans) and were very happy that we took up the recommendation. Excellent food and excellent service. I cannot recommend this Gite highly enough. It is a perfect location for a family or group getaway',
			reviewDate: 'October 2023',
			reviewSite: 'Tripadvisor',
		},
		{
			reviewName: 'Annie',
			reviewText:
				'Pour un séjour entre amis nous avions réservé le gîte Dom Peyreton. Un accueil très sympa le gîte est juste parfait un grand merci à Marta et Iain.',
			reviewDate: 'October 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Shirley',
			reviewText:
				'We simply loved everything about this property both inside and out which was to a very high standard with absolutely everything necessary for a fabulous stay. Nothing was too much trouble for owners Iain and Marta and we valued their recommendations and advice on the local area. The outside area was a haven of peace and tranquillity, sitting out with a glass of Chateau Dom Peyreton, enjoying the sun, pool and wonderful view from the garden to the woods. Would definitely recommend this property and hosts as a great base to stay, relax and explore the region.',
			reviewDate: 'Septemeber 2023',
			reviewSite: 'VRBO',
		},
		{
			reviewName: 'Zoe',
			reviewText:
				'Iain and Marta were very responsive before we arrived and greeted us with a friendly and informative welcome! They helped recommend some great vineyards to visit while we were there. The house itself was well equipped, had beautiful views and so peaceful. We will definitely be back!',
			reviewDate: 'September 2023',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Andrew',
			reviewText:
				"We absolutely loved our stay at Dom Peyreton. We loved the peace and views: I can't recall the last time I felt so relaxed. It was only a few days, but I wish it had been more. The gîte is very well equipped: has everything we could want - I love cooking, and it has a great kitchen. And thank heavens for air conditioning in the bedroom. It made the nights really comfortable.\n\nAnd thank you to Marta & Iain: a really lovely couple, and so knowledgeable about the area. They recommended a superb restaurant in Pomerol….and it wasn't even their first choice.\n\nLoved our stay and would love to return for longer.",
			reviewDate: 'September 2023',
			reviewSite: '',
		},
		{
			reviewName: 'Nuch',
			reviewText:
				'What a lovely place to stay! Much thought has gone into providing accommodation that truly lives up to 5 Stars. Marta and Iain are superb hosts and wanted everything to be just right for our stay. Thank you for the lovely welcome basket complete with a bottle of their own wine! The Barn was spotless, and the kitchen was very well equipped. The outside area was spacious and pool was perfect to dip and cool off. The view across their fields from the patio was lovely, not a building in sight and just the rustling of the grass and leaves. We had a very relaxing and enjoyable stay. Just what we needed! Thank you!',
			reviewDate: 'July 2023',
			reviewSite: '',
		},
		{
			reviewName: 'Mark',
			reviewText:
				'We stayed mid-September 2023 as 3 couples in the Barn and found it to be the perfect base for exploring the Bordeaux wine region. About 75-90 minutes to Margaux (careful, Waze will have you take the ferry across the estuary at Blaze!) 20 min. to St. Emilion and Entre-Deux-Mers just across the Dordogne. Secure parking for 3 cars; easy trip into the village for croissants in the morning; quiet evenings; and a gîte that was better in person than the photos portray. Clothes washer and dishwasher that was used by us and performed flawlessly. Hot water at all times. Well-equipped kitchen that gave us the option of a pasta dinner with Caprese salad thanks to the oil, vinegar and S&P, and other supplies that were stocked in the kitchen for our use.\n\nAfter a day of touring, and tasting, we enjoyed a soak in the pool and then gathered under the covered outdoor dining table. In fact, all our time together as a group was at the outdoor table - breakfast, dinners, and well into the night. Good WiFi coverage was a contributing factor. Iain and Marta were warm, welcoming hosts. We liked that they live onsite, but there was never a reason for us to contact them once we had settled in. After 3 weeks of touring, we all agreed that Château Vieux Moulin was the top stay and set the bar for all the others',
			reviewDate: 'September 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Deborah',
			reviewText:
				'Our stay here was the perfect ending to our 3 week trip to France. Everything about the place exceeded our expectations. The furnishings, decor, and outdoor space ensured an almost perfect stay. The quality of the amenities and the graciousness of our hosts added to our comfort. The outstanding kitchen and extras provided convinced us to make our own dinner three of the four nights we were there and enjoy it out on the patio, taking in the views and solitude of the country. The beauty of the surrounding countryside made driving to the neighboring towns and villages a treat. We would love to return one day!',
			reviewDate: 'September 2023',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Hannah',
			reviewText: 'Amazing property and super friendly hosts. Will definitely be back.',
			reviewDate: 'September 2023',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Helen',
			reviewText:
				'Just returned from a wonderful week at the Barn. Immaculately presented and well equipped to a very high standard with everything we could possibly need. A beautiful private garden with heated plunge pool and great dining area. Perfect for our party of 6. So much to explore in this lovely area, hope to return one day and would definitely choose to stay at Dom Peyreton again. Iain and Marta were so helpful from booking to the end of our stay',
			reviewDate: 'August 2023',
			reviewSite: 'Dompeyreton.com',
		},
		{
			reviewName: 'Victoria',
			reviewText:
				'This has to honestly be one of the best places we have ever stayed. Iain and Marta, have worked tirelessly to ensure their guests have the most comfortable and relaxing stay. Their kindness, knowledge of the area and attentiveness was exceptional. Nothing was too much trouble. The 5 star standard of accommodation, kitchen equipment, facilities and extremely generous welcome pack, ensures you don’t want for anything. It is a picturesque and quiet place to stay surrounded by vineyards and one of the best restaurants we have ever eaten in on the doorstep (Le Saillans). Handy to Bordeaux, Saint Emilion and Libourne (where there is an excellent market on Sundays). I highly recommend the wine tasting on site if offered, because it was a pleasure learning about the process to produce their own boutique wine, which was divine. Iain and Marta should be exceptionally proud of their accomplishment and we looking forward to returning in the near future. Outstanding, thank you!',
			reviewDate: 'August 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Saar',
			reviewText:
				'We had a very good stay at the Lodge. The accommodation had everything you needed. It was also very clean. The hosts, Iain and Marta, were the best hosts we ever had. They were very friendly, helpful and always in for a little chat. I really recommend this place to others for a peaceful and quiet stay. We will certainly come back!',
			reviewDate: 'July 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Alec',
			reviewText:
				'Superb. Bel endroit, totalement rénové, équipement neuf, belle vue sur un jardin, piscine chauffée, hôtes très sympathiques et accueillants',
			reviewDate: 'July 2023',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Maartje',
			reviewText:
				'An oasis of peace in an idyllic spot! Tastefully and luxuriously furnished with a fully equipped kitchen. Thank you so much for the warm welcome Iain & Marta, we would love to come back!',
			reviewDate: 'August 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Andreas',
			reviewText:
				'Unforgettable stay with lovely hosts in a wonderful environment! Our stay at Marta and Iain’s was wonderful! We were greeted warmly and everything was uncomplicated. The apartment is really perfect and equipped to a high standard. We had our privacy and were able to enjoy the time in the great outdoor area with a pool and a nice seating area. Day trips to St Emilion, Bordeaux and Libourne were easily accessible. We recommend this accommodation 100 percent!',
			reviewDate: 'July 2023',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Didier',
			reviewText: 'Cinq etoiles!',
			reviewDate: 'August 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Naomi',
			reviewText:
				'Just came back from a wonderful holiday, we stayed at The Barn which was very clean, beautifully presented and very well equipped! Iain and Marta were the perfect hosts, friendly and accommodating. The welcome pack on arrival was delightful and very much appreciated particularly the bottle of their vineyard’s own Bordeaux wine. Their attention to detail in the property is second to none and the great tips for exploring the local region and French markets were well received. The setting is idyllic and perfect for relaxing and watching the sunset over the vineyard in the evenings. We would definitely stay again and can highly recommend.',
			reviewDate: 'July 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Cléa',
			reviewText:
				"Agréable séjour ! Nous recommandons à 100%! Les hôtes sont très accueillants. La maison est très bien équipée. L'extérieur est très agréable. L'emplacement est calme. La proximité pour visiter des vignobles. Nous avons TOUT aimé !",
			reviewDate: 'July 2023',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Jackie',
			reviewText:
				'A stunning holiday let just 30 mins outside Bordeaux. Iain and Marta were wonderful hosts and The Barn we were staying at was stunning. Beautifully decorated, luxurious furnishings, and wonderful scenery. We happily spent many days walking the grounds, exploring the wildlife, and lounging by the pool! Would highly recommend this place to others!',
			reviewDate: 'June 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Douglas',
			reviewText:
				'A wonderful place for a holiday! Six of us stayed in The Barn and Iain and Marta were the perfect hosts. Great furnishings and even better surroundings, the perfect place to stay and explore this part of France',
			reviewDate: 'June 2023',
			reviewSite: 'Google',
		},
		{
			reviewName: 'Pierre',
			reviewText:
				'An exceptional and quiet location in the heart of the vineyards.  A pleasant heated swimming pool as well as two bedrooms well-spaced from each other.  A special mention to the very well equipped kitchen.',
			reviewDate: 'May 2023',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Annie & Georgie',
			reviewText:
				"Thank you Marta and Iain for making our stay at your amazing chateau unforgettable. You will definitely see us again. Your hospitality was second to none, your lovely welcome basket was a beautiful touch, the accomodation itself was the best of our one month holiday (and we stayed in some lovely accomodation). Anyone looking for spectacular natural beauty within a half hour drive from some of the prettiest towns in France and accommodation that will surpass even the fussiest travellers' expectations you must put this on your 'to stay' list. Marta and Iain you deserve every success.",
			reviewDate: 'May 2023',
			reviewSite: '',
		},
		{
			reviewName: 'Emmanuel',
			reviewText:
				'Marta and Iain were very kind and flexible. The place is just perfect for a weekend with friends away from the hassle of the cities.  I highly recommend it',
			reviewDate: 'May 2023',
			reviewSite: 'Airbnb',
		},
		{
			reviewName: 'Samira',
			reviewText:
				'Peaceful stay, an ideal environment for a great disconnection.  We recommend 100%. Marta is very responsive. Very clean bedding and equipment',
			reviewDate: 'May 2023',
			reviewSite: 'Airbnb',
		},
		{
			reviewName: 'Nicola',
			reviewText:
				'We stayed as two couples and it was perfect, the accommodation has everything we needed including 2 ensuites and a full kitchen. The hosts were friendly and helpful and provided a few basics on arrival. We especially loved the private garden and plunge pool which meant we could relax and watch the sunset while enjoying dinner and wine. In terms of location it is super quiet but close to the amenities so we could relax but close enough to spend our days visiting vineyards. We especially liked the private patio/ garden and plunge pool. The bedrooms both had their own bathroom and were set at opposite sides of the house affording each couple privacy. The hosts were great and were available for any issues while not being intrusive',
			reviewDate: 'May 2023',
			reviewSite: 'Booking.com',
		},
		{
			reviewName: 'Natalia',
			reviewText:
				'Lovely place to spend a vacation! And the owners - Iain and Marta - are super hosts!',
			reviewDate: 'March 2023',
			reviewSite: '',
		},
		{
			reviewName: 'Encarnacion',
			reviewText:
				'We loved our stay at Dom Peyreton: an accommodation with every possible comfort and super spacious. And then the place, the views, those sunsets in that wonderful private pool. A little paradise half an hour from Bordeaux. We will definitely come back!',
			reviewDate: 'July 2022',
			reviewSite: '',
		},
		{
			reviewName: 'Elvira',
			reviewText:
				'What a great spot for relaxation in fantastic surroundings! Exceptional quality, and marvellous hosts. What a great visit to this piece of paradise',
			reviewDate: 'March 2022',
			reviewSite: '',
		},
	];

	return (
		<div className={`container-fluid ${styles.main}`}>
			<div className={styles.imageContainer}>
				<Image
					src='/reviews/reviewsBackgroundImage.webp'
					className={`${styles.image}`}
					alt={'place holder image for review timeline'}
					fill={'true'}
				/>
			</div>
			<div className='container'>
				<div className='row'>
					<div className='col-12'>
						<div className={styles.reviews}>
							{reviews &&
								reviews.map((review, index) => (
									<ReviewTimelineItem
										key={index}
										review={review}
										isLeft={index % 2 == 0}
									/>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MainContent;
