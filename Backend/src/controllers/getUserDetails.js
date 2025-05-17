import jwt from "jsonwebtoken";
import { User } from "../../Db.js";

const JWTSecret = "nikhilthakur3536123@";

export const getUserDetails = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token missing or invalid" });
  }

  const token = authHeader.split(" ")[1]; 

  try {
    const decoded = jwt.verify(token, JWTSecret);
    console.log("Decoded token:", decoded); 
    const user = await User.findById(decoded.id).select("firstname lastname email");

    if (!user) {
      console.log("User not found for ID:", decoded.id);
      return res.status(404).json({ message: "User not found" });
    }

    console.log("User data:", user);
    res.json({
      firstname: user.firstname || "",
      lastname: user.lastname || "",
      email: user.email || "",
    });
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};