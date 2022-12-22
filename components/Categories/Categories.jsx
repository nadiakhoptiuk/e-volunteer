import Image from 'next/image';
import Link from 'next/link';

const Categories = ({ articles }) => {
  return (
    <section className="py-20">
      <div className="container">
        {articles?.map(({ cardInfo, title, route }) => {
          const { id, description, image } = cardInfo[0];

          return (
            <div key={id} className="border-red mb-4 border-2">
              <Link href={route}>
                <Image
                  src={image.url}
                  alt={image.alt}
                  width={364}
                  height={220}
                />
                <h2>{title}</h2>
                <p>{description}</p>
                <span>route: {route}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;
