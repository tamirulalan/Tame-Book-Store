
  const React = require("react");
  
  class New extends React.Component {
    render() {
        return(
            <div>
            <link rel="stylesheet" type="text/css" href="../css/new.css"/>
                <h1 className="title">New product</h1>
                <nav>
                    <a href="/">Home Page</a>
                </nav><br />
                <form action="/product" method="POST">
                    Name  : <input type="text" name="name" /> <br></br> 
                    Author: <input type="text" name="Author" /><br></br> 
                    Price : <input type="number" name="price" /><br></br> 
                    Qtity   : <input type="number" name="Qtity" /><br></br> 
                    Image : <input type="url"  name="img"  /><br></br> 
                    Date  : <input type="text" name="Date" /><br></br> 
                    About : <textarea rows="7" cols="50" class="textRegion" name="About"></textarea> 
                    <br></br> 
                            <input type="submit" value="Create product"></input>
                </form>
            </div>
        )
    }
  }
  
  module.exports = New;