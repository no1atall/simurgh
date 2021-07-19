const Salads = () => {
  const salads = [
    { name: "Garden Salad", price: "4.99", id: 1, description: "" },
    {
      name: "Shirazi Salad",
      price: "6.99",
      id: 2,
      description: "Israeli salad",
    },
    { name: "Greek Salad", price: "6.99", id: 3, description: "" },
    { name: "Ceasar Salad", price: "6.99", id: 4, description: "" },
    { name: "House Special Salad", price: "11.99", id: 5, description: "" },
    { name: "Torshi", price: "3.99", id: 6, description: "Pickles" },
  ];

  return (
    <div>
      {salads.map((salad) => (
        <div
          key={salad.id}
          className="my-8 md:my-12 lg:my-20 xl:my-0"
          id="content"
        >
          <h3 className="">{salad.name}</h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {salad.description}
            <span>${salad.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Salads;
