import skillsData from "../skillsData";

const About = () => {
  return (
    <section className="px-20 py-20 flex flex-col bg-stone-800 " id="about">
      <h1 className="text-stone-50 text-5xl my-12 font-bold ">About</h1>
      <div className="px-36">
        <p className="text-stone-200 text-xl mb-4  tracking-wider">
          I am a dedicated coding enthusiast with a transformative journey from
          a captivating hobby to a thriving career. My educational path led me
          through The University of New Brunswick's Full Stack Coding Bootcamp,
          where I honed my skills and gained unwavering confidence in my
          abilities. My work is defined by meticulous attention to detail,
          resulting in clean, responsive code. I boast a versatile technical
          toolkit encompassing HTML, CSS, JavaScript, React.js,tailwind,
          Vite,NextJs, jQuery, Bootstrap, Git/Github, Node.JS, Express.JS, SQL,
          MySQL, Figma, EJS, Sequelize, Heroku, NoSQL, and MongoDB. I thrive in
          problem-solving, excel under pressure, and am known for my
          collaborative spirit. Embracing new challenges, be it learning new
          languages or exploring fresh frameworks, is my constant pursuit,
          fueling my growth and passion for this dynamic field.
        </p>
        <p className="text-stone-200 text-xl mb-8  tracking-wider">
          Beyond coding, I am a creative at heart. I immerse myself in 3D art
          using Blender, crafting captivating models and animations. Music is
          another passion, as I enjoy playing and recording, rounding out my
          skill set. The ever-evolving world of technology excites me, and I'm
          committed to leaving my mark in this dynamic field. Thanks for being
          part of this exciting journey!
        </p>
      </div>
      <div>
        <h2 className="text-stone-50 text-5xl font-semiBold text-center mt-8 ">
          My Skills
        </h2>
        <div className="flex justify-center flex-wrap  gap-4 my-20 mx-12 ">
          {skillsData.map((skill) => (
            <div key={skill.id}>
              <div className="bg-stone-900 shadow-md shadow-stone-900 size-56 p-8 flex flex-col justify-between items-center rounded-lg space-y-8">
                <p>
                  <img
                    className="size-20 rounded-lg"
                    src={skill.logo}
                    alt="javascript icon"
                  />
                </p>
                <p className="text-stone-50 text-xl text-center">
                  {skill.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
