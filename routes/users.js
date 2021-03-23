var express = require('express');
var router = express.Router();

/* GET users listing. */



// router.post('/',(req,res)=>{
//   var form = new formidable.IncomingForm();

//   form.parse(req);

//   form.on('fileBegin', function (name, file){
//       file.path = __dirname + '/uploads/' + file.name;
//   });

//   form.on('file', function (name, file){
//       console.log('Uploaded ' + file.name);
//   });

//   res.sendFile(__dirname + '/index.html');

// })

module.exports = router;
