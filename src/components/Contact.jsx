import { useState } from "react";

const Label = ({ name }) => (
  <label className="block text-sm font-semibold uppercase">{name}</label>
);

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted ✅");
    setForm({ name: "", contact: "", email: "", feedback: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full text-white">
      {/* Row 1: Name - Mobile - Email */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Label name="Name" />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none pb-2"
            required
          />
        </div>
        <div>
          <Label name="Mobile Number" />
          <input
            name="contact"
            type="number"
            value={form.contact}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none pb-2"
            required
          />
        </div>
        <div>
          <Label name="Email Id" />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none pb-2"
            required
          />
        </div>
      </div>

      {/* Row 2: Feedback */}
      <div className="mt-4">
        <Label name="What Do You Have In Mind?" />
        <textarea
          name="feedback"
          value={form.feedback}
          onChange={handleChange}
          rows={2}
          className="w-full bg-transparent border-b border-white/40 focus:border-white outline-none resize-none"
          required
        />
      </div>

      {/* Buttons Row */}
      <div className="mt-4 flex justify-between items-center">
        {/* Submit button */}
        <button
          type="submit"
          className="relative cursor-pointer text-3xl font-medium tracking-wide transform scale-y-125 transition group"
        >
          Submit
          <span className="absolute left-0 -bottom-1 w-0 h-[0.1px] bg-gray-300 transition-all duration-300 group-hover:w-full"></span>
        </button>
      </div>
    </form>
  );
};

export default Contact;
