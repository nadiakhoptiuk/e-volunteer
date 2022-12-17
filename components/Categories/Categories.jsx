import Image from 'next/image';

const Categories = ({ articles }) => {
  return (
    <section className="py-20">
      <div className="container">
        {articles?.map(({ cardInfo }) => {
          const { id, description, slugRoute, image, title } = cardInfo[0];

          return (
            <div key={id} className="border-red mb-4 border-2">
              <Image src={image.url} alt={image.alt} width={364} height={220} />
              <h2>{title}</h2>
              <p>{description}</p>
              <span>route: {slugRoute}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
