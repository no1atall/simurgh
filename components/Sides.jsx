const Sides = () => {
  const sides = [
    {
      name: "French Fries",
      price: "5.99",
      id: "1",
      description: "Regular French fries",
    },
    {
      name: "Crispy Fries",
      price: "6.99",
      id: "2",
      description: "Crispy French fries.",
    },
    {
      name: "Koobideh",
      price: "5.99",
      id: "3",
      description:
        "An extra skewer of koobideh available with the purchase of a full meal",
    },
    {
      name: "Rice",
      price: "3.99",
      id: "4",
      description: "A side order of rice",
    },
    {
      name: "Zereshk Polo",
      price: "3.99",
      id: "5",
      description: "Sour berries",
    },
    {
      name: "Ghormeh Sabzi",
      price: "12.99",
      id: "6",
      description: "Our home made Persian vegitable stew",
    },
  ];

  return (
    <div>
      {sides.map((side) => (
        <div
          key={side.id}
          id="content"
          className="my-8 md:my-12 lg:my-20 xl:my-0"
        >
          <h3>{side.name}</h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {side.description}
            <span className="min-w-1/4 text-right">${side.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Sides;
