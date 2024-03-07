import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/Contact", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      if (response.ok) {
        console.log("Form submitted successfully!");
      } else {
        console.error("Form submission failed!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="bg-stone-800 py-20 lg:py-36" id="contact">
      <h1 className="text-3xl lg:text-5xl text-stone-50 text-center mb-12">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-wrap space-y-4 md:w-[600px] md:mx-auto mx-2"
      >
        <div className="md:flex-row md:space-x-4 space-y-4 flex-col">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full md:w-[290px] px-4 py-4 bg-stone-950 rounded-sm shadow-md shadow-stone-900 font-bold placeholder-stone-400 text-stone-50 outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full md:w-[290px] px-4 py-4 bg-stone-950 rounded-sm shadow-md shadow-stone-900  font-bold placeholder-stone-400 text-stone-50 outline-none"
          />
        </div>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          placeholder="Subject"
          className="w-full px-4 py-4 bg-stone-950 rounded-sm shadow-md shadow-stone-900  font-bold placeholder-stone-400 text-stone-50 outline-none"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          cols="30"
          rows="10"
          required
          placeholder="Message"
          className="w-full px-4 py-4 bg-stone-950 rounded-sm shadow-md shadow-stone-900  font-bold placeholder-stone-400 text-stone-50 outline-none"
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
