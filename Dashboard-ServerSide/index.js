const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");
const dotenv = require("dotenv");

const clientRoutes = require("./Routes/client");
const generalRoutes = require("./Routes/general");
const managementRoutes = require("./Routes/management");
const salesRoutes = require("./Routes/sales");

//Configuration

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const router = express.Router();

//Routes

router.use("/client", clientRoutes);
router.use("/general", generalRoutes);
router.use("/management", managementRoutes);
router.use("/sales", salesRoutes);

//Mongoose SetUp

const port = process.env.PORT || 9000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () =>
      console.log(`Server Running at: http://localhost:${port}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));
