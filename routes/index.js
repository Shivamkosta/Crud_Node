var express = require('express');
var router = express.Router();
const formidable = require("formidable");
const app = require('../app');
const fs = require('fs');
const fileUpload = require('express-fileupload')
var uuid = require('uuid')
var connection  = require('../lib/db');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Node.js Simple CRUD with Express.js and MySQL Tutorial' });
});

//file upload

// router.post('/',(req,res)=>{
//   console.log(req.files)
//   var file = req.files.upload.data
//   var filename = req.files.upload.name;
//   var buffer = new Buffer(file, 'binary')
//     // console.log("BUFFER:" + buffer)
//     var imgsrc = `./public/${filename}` 

// fs.writeFile(imgsrc, buffer, function(err,written){
//    if(err) {
//      console.log("error :",err)
//    }
//     else {
//      console.log("Successfully written");
//     }
// });
// })

//BASE64 IMAGE UPLOAD
// router.post('/',(req,res)=>{
//   //upload file
//   if(!req.files)
//   {
//       res.send("No files were uploaded")
//   }
//   else{
//     let date = new Date().toLocaleString();
//     console.log("date :", date)
//     let dataString = date.replace(" ", "-");
//     console.log("dataString :", dataString)
//     let dateupdate = dataString.replace(" ", "-");
//     console.log("dateupdate :", dateupdate);
//     var matches = req.files.upload.match(
//       /^data:([A-Za-z-+\/]+);base64,(.+)$/
//     ),
//       response = {};
//     console.log("matches :", matches)
//     if (matches.length !== 3) {
//       return new Error("Invalid input string");
//     }
//     response.type = matches[1];
//     console.log("response.type :", response.type);
//     response.data = new Buffer.from(Buffer, "base64");
//     console.log("response.data :", response.data);
//     let decodedImg = response;
//     console.log("decodedImg :", decodedImg)
//     let imageBuffer = decodedImg.data;
//     console.log("imageBuffer :", imageBuffer);
//     let type = decodedImg.type;
//     console.log("type :", type);
//     const name = type.split("/");
//     console.log("name :", name);
//     const name1 = name[0];
//     console.log("name1 :", name1);
//     let extension = mime.getExtension(type);
//     console.log("extension :", extension);
//     const rand = Math.ceil(Math.random() * 1000);
//     console.log("random :", rand);
//     //Random photo name with timeStamp so it will not overide previous images.
//     const fileName = `photo_${Date.now()}.${extension}`;
//     console.log("fileName :", fileName);
//     const path3 = path.resolve(`./public/images`);
//     console.log("path3 :", path3);
//     const localpath = `${path3}/photo/`;
//     console.log("localpath :", localpath);
//     if (!fs.existsSync(localpath)) {
//       fs.mkdirSync(localpath, { recursive: true });
//     }
//     fs.writeFileSync(
//       `${localpath}` + fileName,
//       imageBuffer,
//       "utf8"
//     );
//     const image = `${req.protocol}://${req.hostname}:${process.env.PORT}/images/photo/${fileName}`;
  
//     var inserdata = "INSERT INTO students (image) VALUES(?)"
//     connection.query(inserdata,[image],(err,result)=>{
//         if(err){
//           res.status(401).json({
//             status:false
//           })
//           console.log("error :",err)
//         }else{
//           res.status(200).json({
//             status:true
//           })
//           console.log("result :",result);
//         }
//       })
//   }
   
  
// })

// router.post('/',(req,res)=>{
//   if(!req.files){
//     res.send("No file uploaded")
//   }else{
//     var file = req.files.upload //here upload in index.ejs form input name
//     console.log("file :",file);
//     if(file.mimetype === "image/jpeg" || file.mimetype === "image/png" || file.mimetype === "image/gif"){
//       var imageName = file.name;
//       console.log("imageName :",imageName);
//       var uuidname = uuid.v1(); //this is used for unique file name
//       var imgsrc = 'http://localhost:3500/images/'+ uuidname + file.name

//       var insertData = "INSERT INTO students(image) VALUES(?)";
//       connection.query(insertData,[imgsrc],(err,result)=>{
//         if(err) res.status(400).json({status:false})
//         console.log("error :",err);

//         file.mv('public/docs',uuidname + file.name)
//         res.json("Data successfully save in DB")
//       })
//     }
//     //for any file upload like pdf,docs etc 
//     else{
//       var fileName = file.name;
//       console.log("filename :",fileName);
//       var uuidname = uuid.v1();//this is used for unique filename
//       console.log('uuidname :',uuidname);
//       var filesrc = "http://localhost:3500/docs/"+ uuidname + file.name;
//       console.log("filesrc :",filesrc);

//       var insertData = 'INSERT INTO students(image) VALUES(?)';
//       connection.query(insertData,[filesrc],(err,result)=>{
//         if(err) throw err
//         file.mv('public/docs'+uuidname + filename)
//         res.json("Data successfully save")
//       })
//     }
//   }
// })

// router.post('/',(req,res)=>{
//   var form = new formidable.IncomingForm();

//     form.parse(req);

//     form.on('fileBegin', function (name, file){
//         file.path = __dirname + '/data/' + file.name;
//     });

//     form.on('file', function (name, file){
//         console.log('Uploaded ' + file.name);
//     });

//     return res.json(200, {
// 							result: 'Upload Success'
//     });

// })
module.exports = router;
