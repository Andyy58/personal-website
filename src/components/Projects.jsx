import { projects } from "../constants";
import Card from "./Card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen h-fit items-center box-content w-full"
    >
      <div className="w-full flex justify-center">
        <h2 className="ss:text-[52px] md:text-[67px] xl:text-7xl text-[42px] text-gradient font-semibold h-fit sm:py-10">
          My Projects
        </h2>
      </div>
      <div className="w-full grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-content-evenly sm:mt-5">
        {projects.map(({ id, name, img, description, link }) => (
          <div className="flex justify-center" key={id}>
            <Card
              name={name}
              description={description}
              link={link}
              img={img}
            ></Card>
          </div>
        ))}
      </div>
      {/* <div className="absolute z-[0] w-[40%] h-[35%] top-[100vh] right-[2vh] pink-gradient"></div> */}
    </section>
  );
};

export default Projects;
