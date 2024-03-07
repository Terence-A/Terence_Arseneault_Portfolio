import emailImg from "../assets/icons/email.png";
import phoneImg from "../assets/icons/phone.png";
import pinImg from "../assets/icons/pin.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <section className="bg-stone-800 py-20 lg:py-36" id="contact">
      {/* <h1 className="text-3xl lg:text-5xl text-stone-50 text-center mb-12">
        Contact Me
      </h1>
      <div className="flex flex-col items-center gap-8 justify-center">
        <a href="mailto:terence.arseneault@hotmail.com">
          <div className="flex  space-x-4  p-4 bg-stone-900 text-stone-300 font-bold w-[350px] lg:w-[400px]  lg:text-xl rounded-md items-center">
            <img className="size-8" src={emailImg} alt="email icon" />
            <p className="">terence.arseneault@hotmail.com</p>
          </div>
        </a>

        <div className="flex space-x-24 p-4 bg-stone-900 text-stone-300 font-bold w-[350px] lg:w-[400px]  lg:text-xl rounded-md items-center">
          <img className="size-8" src={phoneImg} alt="email icon" />
          <p className="">(506) 977-1019</p>
        </div>
        <div className="flex  space-x-16 p-4 bg-stone-900 text-stone-300 font-bold  w-[350px]  text-xl rounded-md items-center">
          <img className="size-8" src={pinImg} alt="email icon" />
          <p className="">Saint John, NB, Canada</p>
        </div>
      </div> */}
      <h1 className="text-3xl lg:text-5xl text-stone-50 text-center mb-12">
        Contact Me
      </h1>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap space-y-4 md:w-[600px] md:mx-auto mx-2"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="md:flex-row md:space-x-4 space-y-4 flex-col  ">
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Name"
            className="w-full md:w-[290px] px-4 py-4 bg-stone-950 rounded-sm shadow-md shadow-stone-900 font-bold placeholder-stone-400 text-stone-50 outline-none"
          />
          <input
            name="email"
            id="email"
            type="email"
            placeholder="Email"
            className="w-full md:w-[290px] px-4 py-4 bg-stone-950 rounded-sm shadow-md shadow-stone-900  font-bold placeholder-stone-400 text-stone-50 outline-none"
          />
        </div>
        <input
          type="text"
          required
          placeholder="Subject"
          className="w-full px-4 py-4 bg-stone-950 rounded-sm shadow-md shadow-stone-900  font-bold placeholder-stone-400 text-stone-50 outline-none"
        />
        <textarea
          name="message"
          cols="30"
          rows="10"
          required
          placeholder="Message"
          className="w-full px-4 py-4 bg-stone-950 rounded-sm shadow-md shadow-stone-900  font-bold placeholder-stone-400 text-stone-50 outline-none  "
        ></textarea>

        <button
          type="submit"
          className="w-full px-4 py-4 bg-amber-700 rounded-lg shadow-md shadow-stone-900 text-xl hover:font-bold placeholder-stone-700 text-stone-200 outline-none  hover:text-stone-50 hover:bg-amber-600"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
