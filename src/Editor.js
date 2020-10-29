const Editor = (props) => {
  return (
    <div className="editor">
      <h3>Editor</h3>
      <textarea
        id="editor"
        type="text"
        value={props.markdown}
        onChange={props.onChange}
      ></textarea>
    </div>
  );
};
export default Editor;
