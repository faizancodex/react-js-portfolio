import Swal from 'sweetalert2'

export default function ContactMe() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "584fcd13-5158-49ac-8087-83cc0bab29e9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        Swal.fire({
          title: "Thank You!",
          text: "Message Sent Successfully!",
          icon: "success"
        });
        event.target.reset(); // Clear form data
      } else {
        Swal.fire({
          title: "Error!",
          text: res.message || "Something went wrong. Please try again later.",
          icon: "error"
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again later.",
        icon: "error"
      });
    }
  };
  return (
    <section id="Contact" className="contact--section">
      <div className="contact-head-container portfolio--container">
        <span className="section-head-button">Contact</span>
        <h2 className="section--heading">Drop Me a Message</h2>
      </div>
      <form onSubmit={onSubmit} className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">Name:</span>
            <input
              placeholder="Full Name"
              type="text"
              className="contact--input text-md"
              name="name"
              id="first-name"
              required
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email:</span>
            <input
              placeholder="Email Address"
              type="email"
              className="contact--input text-md"
              name="email"
              id="email"
              required
            />
          </label>
        </div>
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message:</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <div>
          <button className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
