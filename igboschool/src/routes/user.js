//Signup
//Login
//Change password
//Update information
//Update profile picture

//Default Get
app.get("/", (req, res) => {
    res.status(200).json({
      message: "Server is up and running",
    });
  });
  
  
  //Controller
  const getAllStudents = async (req, res) => {
    try {
      const getStudents = studentModel.find();
      return res.status(200).json({
        message: "Students Gotten Successfully",
        data: getStudents,
      });
    } catch (error) {
      return res.status(404).json({
        message: "Error Getting Students",
        data: error.message,
      });
    }
  };
  