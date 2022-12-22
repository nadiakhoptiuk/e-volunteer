import { Container } from '..';

export const Banner = ({ banner }) => {
  return (
    <div className="bg-blueLight">
      <Container>
        <h1 className=" py-5 text-center  text-3xl font-bold text-fontBlueDark underline ">
          {banner}
        </h1>
      </Container>
    </div>
  );
};
