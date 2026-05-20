import logo from '../../assets/logo.webp';
import img from '../../assets/all.jpg';

const Header = () => {
  return (
    <header className="containers flex justify-between items-center">
      <img className="w-25" src={logo} alt="" />

      <div className="flex items-center gap-2.5">
        <p className=" rounded-2xl p-0 text-[12px] "> 12:00 PM</p>
        <img src={img} alt="" className="w-8 h-8 rounded-full " />
      </div>
    </header>
  );
};

export default Header;
