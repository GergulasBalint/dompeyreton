const provisions = {
  title: "Pack de bienvenue et provisions",
  text: "Nous mettons à disposition un pack de bienvenue composé de quelques produits de première nécessité : vin (indispensable en France !), pain, beurre etc.) et quelques produits locaux selon disponibilité. Un support à épices fournit des herbes et des épices souvent utilisées et nous fournissons de l'huile d'olive et de tournesol, du sel et du poivre pour vous aider à démarrer !",
  provisions: [
    "Bouteille de Cuvée Dom Peyreton (100% merlot)",
    "Huile d'olive",
    "Huile de tournesol",
    "Vinaigre de vin rouge",
    "Sel",
    "Poivre",
    "Beurre",
    "Pain",
    "Liquide vaisselle",
    "Tablettes lave-vaisselle",
    "Herbes et épices",
    "Cubes de bouillon",
    "Vinaigre balsamique",
    "Capsules de café",
    "Sachets de thé",
    "Lait",
    "Sucre",
    "Sac de glaçons",
  ],
};

export default function handler(req, res) {
  res.status(200).json(provisions);
}
