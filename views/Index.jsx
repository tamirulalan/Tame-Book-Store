const React = require("react");
// const DefaultLayout =require('./Default')

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


class Index extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <div style={styles}>
      {/* <DefaultLayout title={"product Index Page"}></DefaultLayout> */}
        
        <img src="https://images-na.ssl-images-amazon.com/images/G/01/books/textbooks/marketing/CXImprove_test/CXImprov_textbooks_T2.png"></img>

        <nav style={navstyle}>
          <a style ={{margin:"10px 60px"}} href="/"><h1> Back to Home</h1></a>
          <a style ={{margin:"10px 525px"}} href="/product/new"><h1> Add new books</h1></a>
        </nav>
        <h1>Top purchused book List</h1>
        {console.log(product)}
        <ul style={ordirection}>
          {product.map((product, idx) => (
            <li key={idx}>
              <img style={{margin: '30px', width:'150px', heigth: '200px' }} src={product.img} />
              <br/>
              <a href={`/product/${product.id}`}>{cap(product.name)}</a>
              <br/>
               By {product.Author} 
               <br></br>
               price {product.price}
                 Qty {product.Qty}
              <br/>
              {/* <a href={`/product/${product._id}/edit`}>Edit</a>
              <form action={`/product/${product._id}?_method=DELETE`} method="POST">
                <input style ={{margin:"10px 40px ", backgroundColor:  '#F51720'}} type="submit" value="DELETE"/>
              </form> */}
              
            </li>
            
          ))}
          
        </ul>
      </div>
    );
  }
}

const styles = {
  color: `Green`,
  
  // backgroundColor:  '#647551'
};

const ordirection ={
  display:'flex',
  liststyletype: 'none',
  margin: '30px 30px',
  backgroundColor: `##83E0FB`,

}
const navstyle ={
  display:'flex'
}
module.exports = Index;
