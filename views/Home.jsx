const React = require("react");
const DefaultLayout = require("./Default");

function cap(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }


class Home extends React.Component {
  render() {
    const { product } = this.props;
    return (
      <DefaultLayout title={` Home Page`}>
      <link rel="stylesheet" type="text/css" href="../css/home.css"/> 
      <div className='Graph'>
        
        <nav className="navBar">  
          <ul className="navList">
          <li> <a  href="/"><h1>Home</h1></a></li>
          <li><a  href="/product/new"> <h1>Add product</h1></a></li>
          <li><a  href="/product"><h1>Product List</h1></a></li>
          <li><a  href="/pokemon/:indexOfpokemonArray"><h1>Speacial Deals</h1></a></li>
          <li> <a  href="/product/${product._id"><h1>About Us</h1></a></li>
          </ul>
        </nav>
        <h1 >Tame Book Store</h1>
        <img  src="https://jonathanbecher.com/wp-content/uploads/2016/04/Read-more-books.jpg"></img>
        
      </div>
      </DefaultLayout>
    );
  }
}

// const styles = {
//     marginleft: 'auto',
//     marginright:'auto',
//   color: `#ffffff`,
//   backgroundColor:  '#647551'
// };

// const navstyle ={
//   display:'flex',
//   backgroundColor: `#000000`,

// }
module.exports = Home;
