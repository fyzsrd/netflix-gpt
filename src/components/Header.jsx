import React, { useEffect } from 'react';
import profileAvatar from '../assets/images/profileAvatar.png';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/useSlice';
import setErrorMessage from 'set-error-message';

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setErrorMessage(error);
        navigate('/error');
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        if (window.location.pathname === '/') {
          navigate('/browse');
        }
      } else {
        dispatch(removeUser());
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between items-center absolute w-full px-4 py-2 sm:px-2 bg-gradient-to-b from-black z-10">
      <Link to="/">
        <img
          className="w-32 sm:w-24"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </Link>

      {user && (
        <div className="flex items-center gap-2 sm:gap-1">
          <Link to="/wishlist">
            <img
              className="w-10 h-10 sm:w-8 sm:h-8 rounded-full"
              src={profileAvatar}
              alt="profile"
            />
          </Link>
          <button
            onClick={handleSignOut}
            className="text-white font-medium text-sm sm:text-xs"
          >
            Sign out: <span className="font-bold">{user.displayName}</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;
