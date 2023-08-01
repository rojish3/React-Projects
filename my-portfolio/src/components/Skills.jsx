const Skills = () => {
  return (
    <div className="skills m-10 p-10">
      <h1 className="text-4xl mb-5">Skills</h1>
      <h3>HTML</h3>
      <input className="border-none" type="range" min="0" max="10" value="8" />
      <h3>CSS</h3>
      <input className="border-none" type="range" min="0" max="10" value="5" />
      <h3>JavaScript</h3>
      <input className="border-none" type="range" min="0" max="10" value="5" />
      <h3>React</h3>
      <input className="border-none" type="range" min="0" max="10" value="6" />
    </div>
  )
}

export default Skills