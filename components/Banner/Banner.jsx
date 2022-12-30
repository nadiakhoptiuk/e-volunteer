import { Container } from '..';

export const Banner = ({ data }) => {
  return (
    <div className="bg-blueLight">
      <Container>
        <h1 className=" py-5 text-center  text-small font-bold text-fontBlueDark underline xl:text-lg ">
          {data}
        </h1>
      </Container>
    </div>
  );
};
