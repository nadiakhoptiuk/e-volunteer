// import { gql, GraphQLClient } from 'graphql-request';
// import { useRouter } from 'next/router';

// const query = gql`
//   query {
//     allArticles {
//       id
//       cardInfo {
//         image {
//           alt
//         }
//         slugRoute
//         title
//         description
//       }
//     }
//   }
// `;

// export const getStaticProps = async () => {
//   const client = new GraphQLClient('https://qraphql.datocms.com/', {
//     headers: {
//       'content-type': 'application/json',
//       authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
//     },
//   });

//   const data = await client.request(query);
//   console.log(data);

//   return {
//     props: { articles: data },
//   };
// };

const Home = () => {
  // const { locale } = useRouter();

  // console.log(locale);

  // console.log(articles);

  // const bannerData = allBannerHeaders
  //   .flatMap(el => el._allBannerDescriptionLocales)
  //   .filter(el => el.locale === locale)
  //   .flatMap(el => el.value);

  return (
    <section className="py-20">
      <div className="container">
        <h1 className="mb-10 text-center text-3xl font-bold underline">
          Banner text
        </h1>

        <div>
          {/* {bannerData.map(el => {
            return el.displayBanner && <h2 key={el.id}>{el.description}</h2>;
          })} */}

          <h2>description</h2>
        </div>
      </div>
    </section>
  );
};

export default Home;
