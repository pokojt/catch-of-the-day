var React = require('react');
var ReactDOM = require('react-dom');
/* Store picker component. This will let us make <StorePicker/> to use anywhere on page */

var StorePicker = React.createClass({

  render: function() {
    var name = "Taylor";
    return (
      <form className="store-selector">
        <h2>Please Enter A Store {name}</h2>
        <input type="text" ref="storeId" required/>
        <input type="submit"/>
      </form>
    )
  }
});

/* Code to render component in html */

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
