const NavBar = () => {
  return (
    <div>
      <div className="lg:mx-16 mt-4 font-lexend">
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <a className="btn btn-ghost  text-xl lg:text-4xl font-black">
              <span className=" text-rose-400">Hot</span>{" "}
              <span className="text-yellow-500">Restaurant</span>
            </a>
          </div>
          <div className="lg:mr-52 mr-20">
            <ul className="hidden lg:flex gap-8 items-center opacity-70">
              <li>Home</li>
              <li>Recipes</li>
              <li>About</li>
              <li>Search</li>
            </ul>
          </div>

          <div className="flex-none gap-2">
            <div className="form-control  hidden lg:block">
              <div className="flex items-center relative">
                <div className="absolute ml-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="input input-bordered  md:w-auto rounded-full pl-8"
                />
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-2 bg-rose-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7 mx-auto mt-1 text-yellow-500 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </div>
              </div>
              <ul
                tabIndex="0"
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
