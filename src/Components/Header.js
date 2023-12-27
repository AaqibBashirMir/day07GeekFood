// import "./components/Header";
import Button from './Button'

function Header() {
  let buttonStyl={
  backgroundColor: "#1D4ED8", 
 color: "white",
 fontWeight: "bold",
 padding: "10px 12px",
 borderRadius: "5px",
 fontSize: "16px",
 border: "none"
  }
  return (
    <>
     <nav className="Navbar">
      <div className="navContent">
      <div className="logo">
        <img src="https://flowbite.com/docs/images/logo.svg" alt="" />
        <h2>GeekFoods</h2>
      </div>

      <div className="navTabs">
        <a href="">Home</a>
        <a href="">Quote</a>
        <a href="">Resturants</a>
        <a href="">Foods</a>
        <a href="">Contact</a>
      </div>

      <div className="navBtn">
          <Button buttonData="Get Started" buttonStyle={buttonStyl}/>
      </div>
      </div>
     </nav>
    </>
  );
}
export default Header;
