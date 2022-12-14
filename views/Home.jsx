const React = require("react");
// app.use(express.static('./public'));
// app.use(express.json());

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


class Index extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div style={styles}>
        
        <nav style ={navstyle}>  
       
          <a style ={{margin:"30px"}} href="/"><h1>Home</h1></a>
          <a style ={{margin:"30px"}} href="/product/new"> <h1>Add product</h1></a>
          <a style ={{margin:"30px"}} href="/product"><h1>Product List</h1></a>
          <a style ={{margin:"30px"}} href="/pokemon/:indexOfpokemonArray"><h1>Speacial Deals</h1></a>
          <a style ={{margin:"30px"}} href="/product/${product._id"><h1>About Us</h1></a>
        </nav>
        <h1 style={{margin:'40px 300px'}}>Tame Book Store</h1>
        <img style={{margin:'40px 300px'}} src="https://jonathanbecher.com/wp-content/uploads/2016/04/Read-more-books.jpg"></img>
        
      </div>
    );
  }
}

const styles = {
    marginleft: 'auto',
    marginright:'auto',
  color: `#ffffff`,
  backgroundColor:  '#647551'
};

const navstyle ={
  display:'flex',
  backgroundColor: `#000000`,

}
module.exports = Index;
