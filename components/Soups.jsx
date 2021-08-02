const Soups = () => {
  const soups = [
    {
      name: "Soup Of The Day",
      price: "5.99",
      id: 1,
      description:
        "Traditional Persian soup made in house from fresh ingredients",
    },
    {
      name: "Bean Soup",
      price: "4.99",
      id: 2,
      description: "Our staple comforting bean soup",
    },
  ];

  return (
    <div>
      {soups.map((soup) => (
        <div
          key={soup.id}
          id="content"
          className="my-8 md:my-12 lg:my-20 xl:my-0"
        >
          <h3 className="">{soup.name}</h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {soup.description}
            <span className="min-w-1/4 text-right">${soup.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Soups;
