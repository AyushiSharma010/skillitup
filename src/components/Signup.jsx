import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup">
      <div className="elements">
        <img
          src="Rectangle 47.png"
          alt="img"
          className=" absolute top-0 left-0 -z-10 w-full h-[100] "
        />
        <div className="Rectangle96 w-[520px] h-[770.52px] align-middle bg-white rounded-2xl shadow border border-black relative top-[5rem] left-[40rem] ">
          <div className="Text text-black text-[41px] font-bold font-tnr text-center absolute top-10 left-[5rem] ">
            Sign up to hire talent
          </div>
          <form className="group m-10 p-[2rem]  flex flex-col gap-7 align-middle absolute top-[5rem] font-roboto font-semibold">
            <div className="input-group">
              <label
                className="block text-black text-[16px] font-normal font-roboto"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="  w-[360px] h-[37.09px] rounded border border-stone-900 text-zinc-400 text-[16px] font-normal font-roboto "
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div className="input-group">
              <label
                className="block  text-black text-[16px] font-normal font-roboto"
                htmlFor="Email"
              >
                Email
              </label>
              <input
                className=" w-[360px] h-[37.09px] rounded border border-stone-900 text-zinc-400 text-[16px] font-normal font-roboto"
                placeholder="Email"
                type="text"
                id="Email"
              />
            </div>
            <div className="input-group">
              <label
                className="block  text-black text-[16px] font-normal font-roboto"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                className=" w-[360px] h-[37.09px] rounded border border-stone-900 text-zinc-400 text-[16px] font-normal font-roboto"
                placeholder="Password"
                type="text"
                id="Password"
              />
            </div>
            <div className="input-group">
              <label
                className="block  text-black text-[16px] font-normal font-roboto"
                htmlFor="Confirm Password"
              >
                Confirm Password
              </label>
              <input
                className=" w-[360px] h-[37.09px] rounded border border-stone-900 text-zinc-400 text-[16px] font-normal font-roboto"
                placeholder="Confirm Password"
                type="text"
                id="Confirm Password"
              />
            </div>
            <button
              className="bg-red-400 duration-300 hover:bg-red-700 text-white text-xl font-bold font-roboto py-4 px-6 rounded-[12px] "
              onClick={() => navigate('/profile')}
            >
              Sign in
            </button>
            <div className="OrContinueWith w-[98.29px] h-[18.41px] text-stone-900 text-[12px] font-normal font-roboto align-middle relative left-[9rem]  ">
              Or continue with
            </div>
            <input
              className=" w-[360px] h-[37.09px] rounded border text-center border-[#FF6578] text-[#FF6578] text-[16px] font-normal font-roboto"
              placeholder="Google"
              type="Google"
              id="Google"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
