const Location = () => {
  return (
    <section id="Location" className=" py-32 flex justify-center items-center ">
      <div className="mx-40  flex flex-col items-center text-xl">
        <h2 className="text-3xl mb-2 font-bold">Hours</h2>
        <h3>Tuesday - Sunday</h3>
        <h4>12pm - 10pm</h4>
        <h3>Monday</h3>
        <h4>Closed</h4>
      </div>
      <address className="mx-40  flex flex-col items-center not-italic text-xl">
        <h2 className="text-3xl mb-2 font-bold">Location</h2>
        <h3>+1 (289) - 234 - 6622</h3>
        <h3>12930 Yonge St</h3>
        <h3>Richmond Hill</h3>
        <h3>ON L4E 3K2</h3>
      </address>
    </section>
  );
};

export default Location;
