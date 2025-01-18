const provisions = {
  title: "Pack de bienvenida y provisiones",
  text: "Ofrecemos un paquete de bienvenida que consta de algunas necesidades básicas: vino (¡esencial en Francia!), pan, mantequilla, etc.) y algunos productos locales según disponibilidad. ¡Un estante de especias proporciona hierbas y especias de uso frecuente y proporcionamos aceite de oliva y girasol, sal y pimienta para que pueda comenzar!",
  provisions: [
    "Botella de Cuvée Dom Peyreton (100 % merlot)",
    "Aceite de oliva",
    "Aceite de girasol",
    " Vinagre de vino tinto",
    "Sal",
    "Pimienta",
    "Mantequilla",
    "Pan",
    "Líquido lavavajillas",
    "Pastillas para lavavajillas",
    "Hierbas y especias",
    "Cubitos de caldo",
    "Vinagre balsámico",
    "Cápsulas de café",
    "Bolsas de té",
    "Leche",
    "Azúcar",
    "Bolsa de hielo",
  ],
};

export default function handler(req, res) {
  res.status(200).json(provisions);
}
