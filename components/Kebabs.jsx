const Kebabs = () => {
  const kebabs = [
    {
      name: "Koobideh",
      price: "14.99",
      id: 1,
      description: "Two char broiled skewers of ground beef",
    },
    {
      name: "Chicken leg/breast",
      price: "14.99/$15.99",
      id: 2,
      description: "Marinated char broiled chicken leg/breast",
    },
    {
      name: "Kebab Barg",
      price: "21.99",
      id: 3,
      description: "Marinated char broiled veal",
    },
    {
      name: "Keban Soltani",
      price: "26.99",
      id: 4,
      description: "One skewer of Koobideh and one skewer of Barg",
    },
    {
      name: "Kebab Torsh",
      price: "26.99",
      id: 5,
      description:
        "Marinated beef in a sauce made of walnuts, pomegranate and crushed garlic",
    },
    {
      name: "Special Kebab",
      price: "24.99",
      id: 6,
      description: "One skewer of Barg with one side covered in ground beef",
    },
    {
      name: "Kebab Vaziri",
      price: "20.99",
      id: 7,
      description: "One skewer of chicken leg and one skewer of Koobideh",
    },
    {
      name: "Kebab Salari",
      price: "21.99",
      id: 8,
      description: "One skewer of chicken breast and one skewer of Koobideh",
    },
    {
      name: "Kebab Bakhtiari",
      price: "29.99",
      id: 9,
      description: "One skewer of chicken breast and one skewer of Barg",
    },
  ];

  return (
    <div>
      {kebabs.map((kebab) => (
        <div
          key={kebab.id}
          id="content"
          className=" my-1 md:my-12 lg:my-20 xl:my-0"
        >
          <h3 className="text-sm sm:text-2xl md:text-3xl font-bold sm:font-normal">{kebab.name}</h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {kebab.description}
            <span>${kebab.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Kebabs;
