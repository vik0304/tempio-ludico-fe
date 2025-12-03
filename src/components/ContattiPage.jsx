import { useState } from "react";

const ContattiPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Ti risponderemo al più presto!");
    // toast({
    //   title: "Message sent!",
    //   description: "We'll get back to you as soon as possible.",
    // });
    setFormData({ name: "", email: "", message: "" });
  };
  <div>
    <h1>Ecco qui tutti i nostri contatti!</h1>
    <h2>I nostri social:</h2>
    <div>
      <div>
        <h2>
          Segui tutti i nostri aggiornamenti oppure contattaci su Instagram:
        </h2>
        {/* TODO: LOGO INSTAGRAM */}
        <img src="https://placehold.co/50x50" alt="Logo Instagram" />
      </div>
      <div>
        <h2>
          Unisciti alla community su whatsapp per comunicazioni più rapide!
        </h2>
        <img src="https://placehold.co/50x50" alt="Logo Whatsapp" />
      </div>
    </div>
    <div>
      <h1>Scrivici un messaggio e noi risponderemo il prima possibile!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <label htmlFor="message">Messaggio</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>
        </form>
      </div>
    </div>
  </div>;
};

export default ContattiPage;
