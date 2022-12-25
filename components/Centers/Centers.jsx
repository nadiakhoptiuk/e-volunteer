const Centers = ({ centers }) => {
  return (
    <section className="bg-blueAccent py-20">
      <div className="container">
        <h2>{centers?.titleAtPage}</h2>

        {centers?.receptionCenter?.map(
          ({ id, city, phoneNumber, centerTitle, address }) => {
            return (
              <div key={id} className="border-red mb-4 border-2">
                {centerTitle && <h2>{centerTitle}</h2>}
                <p>{city}</p>
                <address>{address}</address>
                {phoneNumber && (
                  <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
                )}
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Centers;
