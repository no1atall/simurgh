const Wings = () => {
  const wings = [
    {
      name: "Small",
      price: "11.99",
      id: "1",
      description: "8 marinated BBQ home style wings",
    },
    {
      name: "Medium",
      price: "13.99",
      id: "2",
      description: "10 marinated BBQ home style wings",
    },
    {
      name: "Large",
      price: "15.99",
      id: "3",
      description: "12 marinated BBQ home style wings",
    },
    {
      name: "Combo",
      price: "14.99",
      id: "4",
      description: "8 marinated BBQ home style wings with a bottle of beer",
    },
  ];

  return (
    <div>
      <p className=" text-base sm:text-xl italic my-6 font-semibold">
        Sauces available upon request
      </p>
      {wings.map((wing) => (
        <div
          key={wing.id}
          id="content"
          className="my-6 md:my-12 lg:my-20 xl:my-0"
        >
          <h3>{wing.name}</h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {wing.description}
            <span className="min-w-1/4 text-right">${wing.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Wings;
