import jwt from "jsonwebtoken";
import { inputUser, User } from "../../types/index.types";

import { RegisteredUsers } from "../../datasources/user.mimik.js";

const userResolver = {
  userSignIn: (_: any, { userCredentials }: { userCredentials: inputUser }) => {
    const signinUser = RegisteredUsers.filter(
      (user) => user.email === userCredentials.email
    );
    //console.log("REGUser", RegisteredUsers, signinUser);

    if (signinUser.length === 0)
      return {
        email: "",
        firstName: "",
        lastName: "",
        userId: "",
        token: "String",
        validity: 1,
        message: "USER_NOT_FOUND",
      };
    if (signinUser[0].password !== userCredentials.password) {
      return {
        email: "",
        firstName: "",
        lastName: "",
        userId: "",
        token: "String",
        validity: 1,
        message: "INVALID_PASSWORD",
      };
    }

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: {
          email: signinUser[0].email,
          firstName: signinUser[0].firstName,
          lastName: signinUser[0].lastName,
          userId: signinUser[0].userId,
          message: "VALID",
        },
      },
      `${process.env.JWT_SECRET}`
    );

    return {
      email: signinUser[0].email,
      firstName: signinUser[0].firstName,
      lastName: signinUser[0].lastName,
      userId: signinUser[0].userId,
      token: token,
      message: "SIGN_IN_SUCCESS",
      validity: 1,
    };
  },
};

export default userResolver;
