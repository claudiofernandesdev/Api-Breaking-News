import { connect } from "mongoose";

const connectDatabase = () => {
  console.log("Wait connecting to database");

  connect(
      "mongodb+srv://ClaudioFernandes:PnkWI6jfVAymJuT6@cluster0.fwgjee4.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
