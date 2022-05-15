import profile from "../img/male.png";
const Nav = () => {
  return (
    <div className="row">
      <div className="nav">
        <div className="nav_logo">FitIn</div>
        <div className="nav_heading">
          <h1>Video Searching App</h1>
        </div>
        <div className="nav_profile">
          <img src={profile} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Nav;
