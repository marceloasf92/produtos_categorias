// import jwt from "jsonwebtoken";

// const verifyAuthTokenMiddleware = (request, response, next) => {
//   let token = request.headers.authorization;
//   if (!token) {
//     return response
//       .status(401)
//       .json({ message: "Missing authorization headers" });
//   }

//   const splitBearer = token.split(" ");
//   if (splitBearer.length > 1) {
//     token = splitBearer[1];
//   }

//   jwt.verify(token, "ef20049cae3ad0f9a86946c2582eaf5b", (error, decoded) => {
//     if (error) {
//       return response.status(401).json({ message: "Invalid Token" });
//     }

//     const { sub, isAdm } = decoded;

//     request.user = {
//       userIdAuth: sub,
//       isAdm,
//     };

//     next();
//   });
// };

// export default verifyAuthTokenMiddleware;
