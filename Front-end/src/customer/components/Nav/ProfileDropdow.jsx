import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { NavLink } from 'react-router-dom'
import userIcon from '../../../assets/login.png'
import { useEffect } from "react";
import { useAuth } from "../auth/auth";
import { toast } from 'react-toastify';

export default function ProfileDropdown() {
  const { user, userAuthentication } = useAuth();

  useEffect(() => {
    // Fetch user data when the component mounts
    userAuthentication();
  }, [userAuthentication]);

  return (
    <Menu as="div" className="relative ml-3">
      <div>
        <Menu.Button className="relative flex rounded-full">
          <span className="sr-only">Open user menu</span>
          <div className='flex flex-col'>
            <img
              className="h-8 w-8 rounded-full scale-150 self-center"
              src={userIcon}
              alt=""
            />
            <div className="text-sm font-medium text-gray-700 hover:text-gray-800 hover:text-bold uppercase self-center" >
              Hi {user.username}
            </div>
          </div>

        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-10 z-10 mt-2 w-48 origin-top-right rounded-md bg-slate-200 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <NavLink
                // onClick={toast.success("Logged Out!")} // ERRROR
                to={"/userinfo"}
                className={`${active ? 'bg-gray-100' : ''
                  } block px-4 py-2 text-sm text-gray-700`}
              >
                Your Profile
              </NavLink>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={`${active ? 'bg-gray-100' : ''
                  } block px-4 py-2 text-sm text-gray-700`}
              >
                Settings
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <NavLink
                to="/logout"
                className={`${active ? 'bg-gray-100' : ''
                  } block px-4 py-2 text-sm text-gray-700`}
              >
                Sign out
              </NavLink>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
