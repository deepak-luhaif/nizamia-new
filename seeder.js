const { default: mongoose } = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/dermology-care-repo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connection established successfully");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1); // Exit if connection fails
  }
};

const seedDB = async () => {
  await connectDB();

  // Access the collection only after ensuring the connection is open
  const usersCollection = mongoose.connection.db.collection("users");

  // Create a user with ADMIN role

  const updateData = {
    name: "Admin",
    email: "deepak@ledsak.ai",
    phone: "9784749117",
    user_type: "ADMIN",
  };

  const user = await usersCollection.updateOne(
    { email: "deepak@ledsak.ai" },
    { $set: updateData } // Use $set to update fields
  );

  console.log("Admin user created:");
};

seedDB();

// Handle graceful shutdown on SIGINT
process.on("SIGINT", () => {
  mongoose.connection.close(() => {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});

module.exports = seedDB;
