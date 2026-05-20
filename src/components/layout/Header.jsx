import logo from '../../assets/logo.webp';
import img from '../../assets/userIMg.webp';
import { useAuthContext } from '../../context/Auth';

const Header = () => {
  const { signInWithGoogle, error, authUser } = useAuthContext();

  const photURL = !error && authUser ? authUser.photoURL : img;
  return (
    <header className="containers  pt-0 ">
      <div className=" p-5 flex justify-between items-center">
        <img className="w-25" src={logo} alt="" />

        <div className="flex items-center gap-2.5 cursor-pointer">
          {/* <p className=" rounded-2xl p-0 text-[12px] "> 12:00 PM</p> */}
          <div className="relative">
            <div className="w-6 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full borde border border-HEADING  animate-ping" />
            <img src={photURL} alt="" className="w-8 h-8 rounded-full " />
          </div>
          {!authUser && (
            <p
              onClick={signInWithGoogle}
              className="text-HEADING font-bold text-[16px] cursor-pointer"
            >
              logIn
            </p>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
