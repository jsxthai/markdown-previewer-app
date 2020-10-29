const Preview = (props) => {
  return (
    <div className="preview">
      <h3>Previewer</h3>
      <div id="preview" dangerouslySetInnerHTML={props.getMarkdown}></div>
    </div>
  );
};

export default Preview;
