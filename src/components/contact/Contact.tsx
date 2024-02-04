function Contact() {
  return (
    <div
      id="contact"
      className="bg-slate-900 text-neutral-50 flex flex-col gap-5 items-center pt-10 pb-5"
    >
      <h3 className="text-3xl">Want to talk to us?</h3>
      <input
        className="bg-slate-900 border-neutral-50 border-2 p-2"
        type="email"
        placeholder="email"
        required
      />
      <textarea
        className="bg-slate-900  border-neutral-50 border-2 p-2"
        required
        cols={30}
        rows={5}
        placeholder="What do you want to talk about?"
      ></textarea>
      <button className="bg-green-500 hover:bg-green-900 px-2 text-green-50 py-1 rounded self-center">
        Submit
      </button>
    </div>
  );
}

export default Contact;
