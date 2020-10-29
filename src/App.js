import "./App.css";
import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import marked from "marked";
marked.setOptions({
  breaks: true,
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placehoder,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }

  getMarkdown() {
    return { __html: marked(this.state.markdown) };
  }

  render() {
    return (
      <div>
        <h1 className="title">Simple React Markdown Previewer</h1>
        <div className="flex-container ">
          <Editor onChange={this.handleChange} markdown={this.state.markdown} />
          <Preview getMarkdown={this.getMarkdown()} />
        </div>
      </div>
    );
  }
}

const placehoder = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://picsum.photos/200)
`;

export default App;
