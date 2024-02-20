import { projects } from "../constants";
import Card from "./Card";
import SeeMore from "./SeeMore";

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
      <div className="w-full grid sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 place-content-evenly sm:mt-5 mb-40">
        {projects.slice(0, 3).map(({ id, name, img, description, link }) => (
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
      <a href="https://github.com/Andyy58">
        <SeeMore />
      </a>
    </section>
  );
};

export default Projects;
