const Form = (props) => {
  return (
    <form onSubmit={props.onSubmit}>
      <input
        id="form"
        type="text"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search for a city and press enter"
      />
    </form>
  );
};

export default Form;
