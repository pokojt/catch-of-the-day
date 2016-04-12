var React = require('react');
var ReactDOM = require('react-dom');

/*  App */

var App = React.createClass({

  render: function() {
    return (
      <div className="catch-of-the-day">
      <div className="menu">
        <Header />
      </div>
      <Order/>
      <Inventory/>
      </div>
    )
  }
});

/* Header <Header/> */

var Header = React.createClass({
  render : function() {
    return (
      <p>Header</p>
    )
  }
});

/* Order <Order/>*/

var Order = React.createClass({
  render : function() {
    return (
      <p>Order</p>
    )
  }
});

/* Inventory <Inventory/> */

var Inventory = React.createClass({
  render : function() {
    return (
      <p>Inventory</p>
    )
  }
})

/* Store picker component. This will let us make <StorePicker/> to use anywhere on page */

var StorePicker = React.createClass({

  render: function() {
    var name = "Dude";
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

ReactDOM.render(<App/>, document.querySelector('#main'));
