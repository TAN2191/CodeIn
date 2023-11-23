import "./header.css";

export default function Header() {
  return (
    <div className="header" >
      <div className="headerTitles">
        <span className="headerTitleSm">Develop with us</span>
        <span className="headerTitleLg">CodeIn</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.ttgtmedia.com/rms/onlineimages/code_g1289411982.jpg"
        alt=""
      />
    </div>
  );
}