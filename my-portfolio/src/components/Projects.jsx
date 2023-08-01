import ecommerce from "../assets/ecommerce.png";
const Projects = () => {
  return (
    <div className="projects m-10 p-10">
      <h1 className="text-4xl mb-5">Projects</h1>
      <div className="cards flex space-x-12">
        <div className="card h-72 w-96 p-3 bg-gray-300 shadow-xl overflow-hidden">
          <img src={ecommerce} alt="ecommerce"></img>
          <h3 className="text-lg text-center my-2 font-bold">
            Gadget Store (E-commerce App)
          </h3>
          <p>
            Gadget Store is an one stop destination for your electornic gadget
            needs.
          </p>
        </div>

        <div className="card h-72 w-96 p-3 bg-gray-300 shadow-xl overflow-hidden">
          <img src={ecommerce} alt="ecommerce"></img>
          <h3 className="text-lg text-center my-2 font-bold">
            Gadget Store (E-commerce App)
          </h3>
          <p>
            Gadget Store is an one stop destination for your electornic gadget
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
