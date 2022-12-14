const React = require("react");


function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}



class Show extends React.Component {
  render() {
    const {product} = this.props;
    console.log(product)
    return (
      <div style={styles}>
      <div>
        {/* <h2>{product.Qty}</h2> */}
        <img src={product.img} />
        <br/>
        <a href='/product'><button style={btnH}>Home</button ></a> 
        <a href="/product/${product._id}/edit`}"><button style={btnE}>Edit</button></a>
        <form action={`/product/${product._id}?_method=DELETE`} method="POST">
                <input style ={btnD} type="submit" value="DELETE"/>
              </form>
      </div>
        <div>
           <h2 style={{margin: '60px'}}>{cap(product.name)} :{cap(product.Author)}, {cap(product.Date)} </h2> 
            <h5 style={{margin: '60px'}}>{cap(product.About)}</h5>
            <img style ={{margin: '10px 250px'}} src="https://th.bing.com/th/id/OIP.-0nzyBDSHddDQ3riX6kuAAAAAA?pid=ImgDet&rs=1"></img>
           
           
        </div>
        <div style={sidebar}>
        <h2 style={{margin: '10px 10px'}}>price  ${product.price}</h2>
        <a style={{margin: '10px 10px'}} href="{}"><h3>delivery status</h3></a>
        <h5>FREE delivery {new Date().setDate(new Date().getDate() + 3)} on $25 of items shipped by Tame Store</h5>
        <h4>select delivery adress</h4>
        <h3>{product.Qty}: remaining </h3>
        <form action={`/product/buy/${product.id}?_method=PUT`} method="POST">
          <input type="submit" value=" Buy "/>
      </form>

        </div>
        
      </div>
      
    );
  }
}

const sidebar ={
  boarder: '40px',
  inlinesize: '20px',
  overflow: 'hidden'
 //margin: '20px 100px'
  
}
const styles = {
  color: `#000000`,
  backgroundColor: `rgb(247, 247, 245)`,
  display: 'flex',
  justifycontent: 'space-around',
  textalign: 'center',
  createBtn: {
    backgroundColor: "#fff",
    padding: "5px",
    borderRadius: "5px",
    textDecoration: "none",
  },

};
const btn ={
  backgroundColor: "rgb(202, 153, 16)",
    width: '100px',
    padding: "10px",
    boarder: "1px yellow",
    borderRadius: "5px",
    textDecoration: "none",
}
const btnH ={
  margin:"7px",
  backgroundColor: "Green",
    width: '100px',
    padding: "10px",
    boarder: "1px yellow",
    borderRadius: "5px",
    textDecoration: "none",
}
const btnE ={
  margin:"7px",
  backgroundColor: "orange",
    width: '100px',
    padding: "10px",
    boarder: "1px yellow",
    borderRadius: "5px",
    textDecoration: "none",
}
const btnD ={
  margin:'10px 75px',
  backgroundColor: "Red",
    width: '100px',
    padding: "10px",
    boarder: "1px yellow",
    borderRadius: "5px",
    textDecoration: "none",
}
module.exports = Show;