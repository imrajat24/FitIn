import profile from "../img/male.png";
const Nav = () => {
  return (
    <div className="row">
      <div className="nav">
        <div className="nav_logo">FitIn</div>
        <div className="nav_Profile">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Nav;
