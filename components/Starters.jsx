const Starters = () => {
  const starters = [
    { name: "Mast Sade", price: "3.99", description: "Plain yogurt" },
    {
      name: "Mast Khiar",
      price: "4.99",
      description: "Diced cucumber with fresh home style yogurt",
    },
    {
      name: "Mast Moosir",
      price: "4.99",
      description: "Home style yogurt sprinkled with shallots",
    },
    {
      name: "Kashkeh Bademjan",
      price: "9.99",
      description:
        "Mashed and fried eggplant topped with fried onions, mint, and garlic",
    },
    {
      name: "Khaviar Bademjan",
      price: "8.99",
      description: "Mashed and fried BBQ eggplant and tomato",
    },
    { name: "Salad Olveih", price: "8.99", description: "Potato salad" },
    { name: "Jigar", price: "9.99", description: "BBQ beef liver" },
  ];

  return (
    <div>
      {starters.map((starter) => (
        <div id="content">
          <h3>{starter.name}</h3>
          <p className="italic text-sm md:text-xl mb-4 flex justify-between">
            {starter.description}
            <span >${starter.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Starters;
