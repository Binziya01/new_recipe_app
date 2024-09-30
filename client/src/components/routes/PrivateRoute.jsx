// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Outlet } from "react-router-dom";
// import Loader from "../Loader";
// // import { userAuth } from "../../store/authSlice";

// export const PrivateRoute = () => {
//   const [ok, setOk] = useState(false);
//   const { token } = useSelector((state) => state.auth); // Get the token from state
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const authCheck = async () => {
//       const result = await dispatch(userAuth()); // Dispatch the thunk
//       if (result?.payload?.ok) {
//         setOk(true);
//       } else {
//         setOk(false);
//       }
//     };

//     if (token) authCheck();
//   }, [token, dispatch]);

//   return ok ? <Outlet /> : <Loader />;
// };
