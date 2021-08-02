const Drinks = () => {
  const drinks = [
    {
      name: "Doogh glass/pitcher",
      id: "1",
      price: "2.99/$10.99",
      description: "Yogurt diluted with water and mint",
    },
    {
      name: "Soft Drink",
      id: "2",
      price: "2.25",
      description: "Coke, Pepsi, Sprite, Ginger Ale, Dr. Pepper ",
    },
    {
      name: "Orange juice",
      id: "3",
      price: "2.99",
      description: "Chilled orange juice",
    },
    { name: "Tea", id: "4", price: "1.99", description: "Freshly brewed tea" },
    {
      name: "Coffee",
      id: "5",
      price: "2.99",
      description: "Freshly brewed coffee",
    },
    {
      name: "Turkish Coffee",
      id: "6",
      price: "3.99",
      description: "Our home brewed Turkish coffee",
    },
  ];

  const beers = [
    {
      name: "Domestic Beer",
      id: 1,
      description: "Ask about our selection of domesstic beers",
      price: 5.99,
    },
    {
      name: "Imported Beer",
      id: 2,
      description: "Ask about our selection of imported beers",
      price: 6.49,
    },
  ];

  const spirits = [
    {
      name: "Wine",
      id: 1,
      type1: "5oz",
      type2: "7oz",
      price1: 7.49,
      price2: 8.99,
    },
    {
      name: "Vodka",
      id: 2,
      type1: "Single Shot",
      type2: "Double Shot",
      price1: 5.49,
      price2: 9.99,
    },
    {
      name: "Tequila",
      id: 3,
      type1: "Single Shot",
      type2: "Double Shot",
      price1: 6.99,
      price2: 11.99,
    },
    {
      name: "Crown Royal",
      id: 4,
      type1: "Single Shot",
      type2: "Double Shot",
      price1: 6.49,
      price2: 11.49,
    },
    {
      name: "Red Label",
      id: 5,
      type1: "Single Shot",
      type2: "Double Shot",
      price1: 6.99,
      price2: 12.49,
    },
    {
      name: "Glenfiddich",
      id: 6,
      type1: "Single Shot",
      type2: "Double Shot",
      price1: 7.99,
      price2: 14.49,
    },
    {
      name: "Jack Daniels",
      id: 7,
      type1: "Single Shot",
      type2: "Double Shot",
      price1: 6.99,
      price2: 12.49,
    },
    {
      name: "St. Remy",
      id: 8,
      type1: "Single Shot",
      type2: "Double Shot",
      price1: 6.49,
      price2: 11.49,
    },
    {
      name: "Hennessy",
      id: 9,
      type1: "Single Shot",
      type2: "Double Shot",
      price1: 10.99,
      price2: 17.99,
    },
    {
      name: "Rum",
      id: 10,
      type1: "Single Shot",
      type2: "Double Shot",
      price1: 6.49,
      price2: 11.49,
    },
  ];

  return (
    <div>
      <h2 className="mb-4 mt-10 md:mt-0 text-2xl md:text-3xl font-semibold underline">Non Alcoholic</h2>
      {drinks.map((drink) => (
        <div
          key={drink.id}
          id="content"
          className=" my-6 md:my-12 lg:my-20 xl:my-0"
        >
          <h3>
            {drink.name}
          </h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {drink.description}
            <span className="min-w-1/4 text-right">${drink.price}</span>
          </p>
        </div>
      ))}
      <h2 className="mb-4 underline mt-8 text-2xl md:text-3xl font-semibold">Beer</h2>
      {beers.map((beer) => (
        <div
          key={beer.id}
          id="content"
          className=" my-6 md:my-12 lg:my-20 xl:my-0"
        >
          <h3 >
            {beer.name}
          </h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {beer.description}
            <span className="min-w-1/4 text-right">${beer.price}</span>
          </p>
        </div>
      ))}

      <h2 className="mb-4 underline mt-8 text-2xl md:text-3xl font-semibold">Spirits</h2>
      <p className=" text-base sm:text-xl italic my-6 font-semibold">
        Spirits only available for dine in
      </p>

      {spirits.map((spirit) => (
        <div
          key={spirit.id}
          id="content"
          className=" my-6 md:my-12 lg:my-20 xl:my-0"
        >
          <h3   >
            {spirit.name}
          </h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {spirit.type1} / {spirit.type2}
            <span className="min-w-1/4 text-right">
              ${spirit.price1}/${spirit.price2}
            </span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Drinks;
