const h1 = {
    color: '#ffffff',
    backgroundColor: '#c244d1',
    padding: '10px'
  };
  
  
  const React = require("react");
  
  class New extends React.Component {
    render() {
        return(
            <div>
                <h1 style={h1}>New product</h1>
                <nav>
                    <a href="/home">Home Page</a>
                </nav><br />
                <form action="/product" method="POST">
                    Name:  <input type="text" name="name" /><br />
                    Author:  <input type="text" name="Author" /><br />
                    price:  <input type="number" name="price" /><br />
                    Qty:<input type="number" name="Qty" /><br/>
                    Image: <input type="url"  name="img"  /><br />
                    Date:<input type="text" name="Date" /><br/>
                    About:<textarea rows="7" cols="50" class="textRegion" name="About"></textarea> <br/>
                    <input type="submit" value="Create product"></input>
                </form>
            </div>
        )
    }
  }
  
  module.exports = New;