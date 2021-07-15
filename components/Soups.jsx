const Soups = () => {
  const soups = [
    {
      name: "Soup Of The Day",
      price: "5.99",
      description:
        "Traditional Persian soup made in house from fresh ingredients",
    },
    {
      name: "Bean Soup",
      price: "3.99",
      description: "Our staple comforting bean soup",
    },
  ];

  return (
    <div>
      {soups.map((soup) => (
        <div id="content">
          <h3 className="">{soup.name}</h3>
          <p className="italic text-xl mb-4 flex justify-between">
            {soup.description}
            <span className="text-xl">${soup.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Soups;
