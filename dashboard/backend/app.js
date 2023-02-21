const http = require("http");
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
const getDatafirebase = require("./firebase/getTime");
const getTemperatureAir = require("./firebase/getTemperatureHumiditerAir");
const getcapteurPluie = require("./firebase/getCapteurPluie");
const getMode = require("./firebase/getMode");
const getHumiditySol = require("./firebase/getHumiditySol");
const changeMode = require("./firebase/changerMode");
const changeEtatMoteur = require("./firebase/changeEtatMoteur");
const changeEtatled = require("./firebase/changeEtatled");
const changeEtatPompe = require("./firebase/changeEtatPompe");
const changeventilateur = require("./firebase/changeEtatventilateur");
const getCapteurCo2 = require("./firebase/getCapteurCo2");
const getNpk = require("./firebase/getNpk");
const getNomCulture = require("./firebase/getNomCulture");
const SetNomCulture = require("./firebase/SetNomCulture");
const getEtatbattrie = require("./firebase/getEtatbattrie");
const getStatusmanual = require("./firebase/getStatusmanual");
const getWaterSensor = require("./firebase/getWaterSensor");
const authRouter = require("./routes/auth");
const bodyParser = require("body-parser");
const db = require("./models/index");
const cors = require("cors");
// firebase database config file 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
global.__basedir = __dirname;
// how use toaster in express js

// view engine setup

app.use(
  cors({
    origin: ["http://localhost:8080", "http://localhost:4200"],
    credentials: true,
  })
);

db.sequelize
  .sync() // { force: true } will drop the table if it already exists
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
db.sequelize.options.logging = false;
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "twig");

app.use(express.json());

app.use("/public", express.static(path.join(__dirname, "public")));
; //path postman : http://localhost:3000/deletd/remove/1.jpg )

app.use("/auth", authRouter); //path postman : http://localhost:8080/auth/login
// http://localhost:8080/users


// save data in firebase database
// app.post("/saveData/", function (req, res) {
//   fireebase.saveData(req.body,function (err,data) {

//     res.send(data);
   
//   }
//   );
// });
// how recupere data from firebase database
app.get("/getTime/", function (req, res) {
  getDatafirebase.getData(function (err,data) {
    res.send(data);
  });
});
app.get("/getTemperatureAir/", function (req, res) {
  getTemperatureAir.getTemperatureAir(function (err,data) {
    res.send(data);
  });
});
app.get("/getMode/", function (req, res) {
  getMode.getMode(function (err,data) {
    res.send(data);
  });
});
app.put("/changeEtatled/", function (req, res) {
  changeEtatled.changeEtatled(req.body,function (err,data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    } else {
      res.send(data);
    }
  });
});
app.put("/changeEtatPompe/", function (req, res) {
  changeEtatPompe.updateEtatpompe(req.body,function (err,data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    } else {
      res.send(data);
    }
  });
});
app.put("/changeEtatventilateur/", function (req, res) {
  changeventilateur.updateEtatventilateur(req.body,function (err,data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    } else {
      res.send(data);
    }
  });
});

app.put ("/SetNomCulture/", function (req, res) {
  SetNomCulture.setNomCultrue(req.body,function (err,data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    } else {
      res.send(data);
    }
  });
});
app.get("/getNomCulture/", function (req, res) {
  getNomCulture.getNomCulture(function (err,data) {
    res.send(data);
  });
});


app.put("/changeEtatMoteur/", function (req, res) {
   
  changeEtatMoteur.updateMoteur(req.body,function (err,data) {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving notes.",
      });
    } else {
      res.send(data);
    }

  });
});
app.put("/changeMode/", function (req, res) {

    changeMode.updateMode(req.body,function (err,data) {
      if (err) {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving notes.",
        });
      } else {
        res.send(data);
      }
     
      
    });

 
});

app.get("/getHumiditySol/", function (req, res) {
  getHumiditySol.getHumiditySol(function (err,data) {
    res.send(data);
  });
});
app.get("/getWaterSensor/", function (req, res) {
  getWaterSensor.getWaterSensor(function (err,data) {
    res.send(data);
  });
});

app.get("/getcapteurPluie/", function (req, res) {
  getcapteurPluie.getcapteurPluie(function (err,data) {
    res.send(data);
  });
});
app.get("/getCapteurCo2/", function (req, res) {
  getCapteurCo2.getCaptureCo2(function (err,data) {
    res.send(data);
  });
});

app.get("/getStatusmanual/", function (req, res) {
  getStatusmanual.getStatusmanual(function (err,data) {
    res.send(data);
  });
});
app.get("/getEtatbattrie/", function (req, res) {
  getEtatbattrie.getEtatbattrie(function (err,data) {
    res.send(data);
  });
});

app.get("/getNpk/", function (req, res) {
  getNpk.getNpk(function (err,data) {
    res.send(data);
  });
});

// // how update data from firebase database
// app.put("/updateData/", function (req, res) {
//   updateDatafirebase.updateData(req.body,function (err,data) {
//     res.send(data);
//   });
// });

// http://localhost:8080/paiment

// const someDate = new Date('2022-12-07 00:49:00');
// shedule.scheduleJob(someDate, function(){
//   console.log('The world is going to end today.');
// });


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.json({ error: err });
});
const server = http.createServer(app);

server.listen(5000, function () {
  console.log(`server started at 5000`);
});



 