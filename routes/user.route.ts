import express from "express";
import {
  activateUser,
  loginUser,
  deleteUser,
  getAllUsers,
  getUserInfo,
  logoutUser,
  registrationUser,
  updateAccessToken,
  socialAuth,
  updatePassword,
  updateProfilePicture,
  updateUserInfo,
  updateUserRole,
} from "../controllers/user.controller";
import { authorizeRoles, isAutheticated } from "../middleware/auth";
const userRouter = express.Router();

userRouter.post("/registration", registrationUser);

userRouter.post("/activate-user", activateUser);

userRouter.post("/login", loginUser);

userRouter.get("/logout", updateAccessToken, isAutheticated, logoutUser);

userRouter.get("/refresh", updateAccessToken);

userRouter.get("/me", updateAccessToken, isAutheticated, getUserInfo);

userRouter.post("/social-auth", socialAuth);

userRouter.put(
  "/update-user-info",
  updateAccessToken,
  isAutheticated,
  updateUserInfo
);

userRouter.put(
  "/update-user-password",
  updateAccessToken,
  isAutheticated,
  updatePassword
);

userRouter.put(
  "/update-user-avatar",
  updateAccessToken,
  isAutheticated,
  updateProfilePicture
);

userRouter.get(
  "/get-users",
  updateAccessToken,
  isAutheticated,
  authorizeRoles("admin"),
  getAllUsers
);

userRouter.put(
  "/update-user",
  updateAccessToken,
  isAutheticated,
  authorizeRoles("admin"),
  updateUserRole
);

userRouter.delete(
  "/delete-user/:id",
  updateAccessToken,
  isAutheticated,
  authorizeRoles("admin"),
  deleteUser
);

export default userRouter;
