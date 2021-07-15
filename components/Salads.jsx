const Salads = () => {
  const salads = [
    { name: "Garden Salad", price: "4.99", description: "" },
    { name: "Shirazi Salad", price: "6.99", description: "Israeli salad" },
    { name: "Greek Salad", price: "6.99", description: "" },
    { name: "Ceasar Salad", price: "6.99", description: "" },
    { name: "House Special Salad", price: "11.99", description: "" },
    { name: "Torshi", price: "3.99", description: "Pickles" },
  ];

  return (
    <div>
      {salads.map((salad) => (
        <div id="content">
          <h3 className="">{salad.name}</h3>
          <p className="italic text-xl mb-4 flex justify-between">
            {salad.description}
            <span className="text-xl">${salad.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Salads;
