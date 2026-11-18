import { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

   return (
    <section>
      <h1>Feedback Form</h1>

      <form onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="feedback">Feedback</label>
        <textarea
          id="feedback"
          name="feedback"
          maxLength={200}
          value={formData.feedback}
          onChange={handleChange}
        />
      </form>

            <h2>Live Preview</h2>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Feedback: {formData.feedback}</p>
    </section>
  );
}