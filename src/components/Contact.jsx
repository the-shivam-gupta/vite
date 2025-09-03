import { useState, useEffect } from "react";

const Label = ({ name, className }) => {
  return (
    <div>
      <label className={`${className} text-base font-medium`}>{name}</label>
    </div>
  );
};

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    feedback: "",
  });

  // Load saved form data on mount
  useEffect(() => {
    const savedForm = localStorage.getItem("contactForm");
    if (savedForm) {
      setForm(JSON.parse(savedForm));
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("contactForm", JSON.stringify(form));

    alert("Form submitted and saved locally ✅");

    // Clear form after submit
    setForm({
      name: "",
      contact: "",
      email: "",
      feedback: "",
    });
  };

  return (
    <div className="max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        <div>
          <Label name="Name" />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border-b-2 border-l-2 rounded px-2 py-1"
            placeholder="Enter your name"
            required
          />
        </div>
        <div>
          <Label name="Contact" />
          <input
            name="contact"
            type="number"
            value={form.contact}
            onChange={handleChange}
            className="w-full border-b-2 border-l-2 rounded px-2 py-1"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <Label name="Email" />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className="w-full border-b-2 border-l-2 rounded px-2 py-1"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <Label name="Feedback" />
          <textarea
            name="feedback"
            value={form.feedback}
            onChange={handleChange}
            rows={3}
            className="w-full border-b-2 border-l-2 rounded px-2 py-1"
            placeholder="Your feedback..."
            required
          />
        </div>

        <button
          type="submit"
          className="sm:col-span-2 border px-10 cursor-pointer transition-colors ease-in-out hover:text-black hover:bg-white py-2 mt-4 rounded text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
