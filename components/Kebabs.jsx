const Kebabs = () => {
  const kebabs = [
    {
      name: "Koobideh",
      price: "15.99",
      id: 1,
      description: "Two char broiled skewers of ground beef",
    },
    {
      name: "Chicken leg/breast",
      price: "17.99/$18.99",
      id: 2,
      description: "Marinated char broiled chicken leg/breast",
    },
    {
      name: "Kebab Barg",
      price: "24.99",
      id: 3,
      description: "Marinated char broiled veal",
    },
    {
      name: "Keban Soltani",
      price: "29.99",
      id: 4,
      description: "One skewer of Koobideh and one skewer of Barg",
    },
    {
      name: "Kebab Torsh",
      price: "29.99",
      id: 5,
      description:
        "Marinated beef in a sauce made of walnuts, pomegranate and crushed garlic",
    },
    {
      name: "Lamb Shishlicks",
      price: "27.99",
      id: 6,
      description: "Marinated charbroiled lamb chops",
    },
    {
      name: "Kebab Vaziri",
      price: "23.99",
      id: 7,
      description: "One skewer of chicken leg and one skewer of Koobideh",
    },
    {
      name: "Kebab Salari",
      price: "24.99",
      id: 8,
      description: "One skewer of chicken breast and one skewer of Koobideh",
    },
    {
      name: "Kebab Bakhtiari",
      price: "33.99",
      id: 9,
      description: "One skewer of chicken breast and one skewer of Barg",
    },
  ];

  return (
    <div>
      <p className=" text-base sm:text-xl italic my-6 font-semibold">
        All kebabas come with a serving of rice and a roasted tomato
      </p>
      {kebabs.map((kebab) => (
        <div
          key={kebab.id}
          id="content"
          className=" my-8 md:my-12 lg:my-20 xl:my-0"
        >
          <h3 className="">{kebab.name}</h3>
          <p className="italic text-sm md:text-xl flex justify-between">
            {kebab.description}
            <span className="min-w-1/4 text-right">${kebab.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Kebabs;
