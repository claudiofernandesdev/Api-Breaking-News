import { connect } from "mongoose";

const connectDatabase = () => {
  console.log("Wait connecting to database");

  connect(
  process.env.MONGODB_URI
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(`Error connecting to MongoDB Atlas: ${error}`));
};

export default connectDatabase;
