const Contact = () => {
  return (
    <>
      <h1 className="text-2xl font-bold p-2 m-2">Contact Us page</h1>
      <form className="p-2 m-2">
        <input
          type="text"
          placeholder="Name"
          className="border border-black m-2 px-2 "
        />
        <input
          type="textarea"
          placeholder="Message"
          className="border border-black m-2 px-2 "
        />
        <button className="border border-black m-2 px-2 bg-slate-500 rounded-lg">
          Submit
        </button>
      </form>
    </>
  );
};

export default Contact;
