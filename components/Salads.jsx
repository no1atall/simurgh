const Salads = () => {
  const salads = [
    {
      name: "Garden Salad",
      price: "6.99",
      id: 1,
      description:
        "Mix of fresh lettuce, cucumber, tomato, and slided red onions",
    },
    {
      name: "Shirazi Salad",
      price: "7.99",
      id: 2,
      description:
        "Finely chopped cucumber, tomato, red onion, and mint mixed with our special blend of lemon juice and viniger",
    },
    {
      name: "Greek Salad",
      price: "8.99",
      id: 3,
      description:
        "Mix of fresh lettuce, cucumber, tomato, red onions, topped with sliced black olives, feta cheese and Greek dressing",
    },
    {
      name: "Ceasar Salad",
      price: "6.99",
      id: 4,
      description:
        "Mix of fresh lettuce, crunchy crutons, parmesean cheese and Ceasar dressing",
    },
    {
      name: "House Special Salad",
      price: "12.99",
      id: 5,
      description:
        "Our special blend of fresh lettuce, cucumber, tomato, red onions, topped with sliced black olives, feta cheese mixed through with our special tangy house sauce",
    },
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
            <span className="min-w-1/4 text-right">${salad.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Salads;
