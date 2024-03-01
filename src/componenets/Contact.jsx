import emailImg from "../assets/icons/email.png";
import phoneImg from "../assets/icons/phone.png";
import pinImg from "../assets/icons/pin.png";

const Contact = () => {
  return (
    <section className="bg-stone-800 py-20" id="contact">
      <h1 className="text-5xl text-stone-50 text-center mb-12">Contact Me</h1>
      <div className="flex flex-col items-center gap-8 justify-center">
        <a href="mailto:terence.arseneault@hotmail.com">
          <div className="flex  space-x-4  p-4 bg-stone-900 text-stone-300 font-bold  w-[400px]  text-xl rounded-md items-center">
            <img className="size-8" src={emailImg} alt="email icon" />
            <p className="">terence.arseneault@hotmail.com</p>
          </div>
        </a>

        <div className="flex space-x-24 p-4 bg-stone-900 text-stone-300 font-bold  w-[400px]  text-xl rounded-md items-center">
          <img className="size-8" src={phoneImg} alt="email icon" />
          <p className="">(506) 977-1019</p>
        </div>
        <div className="flex  space-x-16 p-4 bg-stone-900 text-stone-300 font-bold  w-[400px]  text-xl rounded-md items-center">
          <img className="size-8" src={pinImg} alt="email icon" />
          <p className="">Saint John, NB, Canada</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
