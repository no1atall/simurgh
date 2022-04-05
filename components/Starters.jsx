const Starters = () => {
  const starters = [
    {
      name: "Mast Khiar",
      price: "5.99",
      id: 1,
      description: "Diced cucumber with fresh home style yogurt",
    },
    {
      name: "Mast Moosir",
      price: "5.99",
      id: 2,
      description: "Home style yogurt sprinkled with shallots",
    },
    {
      name: "Kashkeh Bademjan",
      price: "10.99",
      id: 3,
      description:
        "Mashed and fried eggplant topped with fried onions, mint, and garlic",
    },
    {
      name: "Khaviar Bademjan",
      price: "9.99",
      id: 4,
      description: "Mashed and fried BBQ eggplant and tomato",
    },
    {
      name: "Zeytoon Parvarde",
      price: "8.99",
      id: 5,
      description: "Marinated green olives in pomegranate and walnut paste",
    },
    {
      name: "Jigar",
      price: "9.99",
      id: 6,
      description: "BBQ beef liver (Available on weekends only)",
    },
  ];

  return (
    <div>
      {starters.map((starter) => (
        <div
          key={starter.id}
          id="content"
          className="my-6 md:my-12 lg:my-20 xl:my-0"
        >
          <h3>{starter.name}</h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {starter.description}
            <span className="min-w-1/4 text-right">${starter.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Starters;
