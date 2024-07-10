import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.db_url as string);
    app.listen(config.port, () => {
      console.log(`Server is running on port :  ${config.port}`);
      console.log("MongoDB Connection Successfully !!!");
    });
  } catch (error) {
    console.log(error);
  }
}

main();
