const functions = require('firebase-functions');
const admin = require("firebase-admin");
const { json } = require('express');
const app = require("express")();

admin.initializeApp();
const db = admin.firestore().collection("users");
const dbBlog = admin.firestore().collection("blog");
//Calma aí
//Eu usei cloud no site tbmad
// TODO: create todoList
// TODO: remove todoList

const funcaoQueEnviaProFirestore = (event) => { 
    
  const db = app.firestore();
  db.collection("todos").add({
      quest : quest.value,
      wAns1: wa1.value,
      wAns2: wa2.value,
      wAns3: wa3.value,
      correctAns: ca.value,
      lang: lang.value,
      status: 0
  });
}

app.get("/users", function (req, res) {
  db.get()
    .then(function (docs) {
      let users = [];
      docs.forEach(function (doc) {
        users.push(doc.data())
      })
      res.json(users);
    });
})


app.get("/users/:id", function(req,res) {
    db.doc(req.params.id).get()
        .then(function(doc) {
            res.json(doc.data());
        })
})

app.put('/users/:id', function(req, res) {
    db.doc(req.params.id).update(req.body)
        .then(function () {
            res.json({ general: "It works" });
        });
})

app.delete('/users/:id', function(req,res) {
    db.doc(req.params.id).delete()
        .then(function() {
            res.json({ general: "Deleted"});
        });
})

app.post("/users", function (req, res) {
    db.doc(req.body.id.toString()).set(req.body)
      .then(function () {
        res.json({ general: "It works" });
      })
})

// ------------ DSIDESTINOS ------------

app.get("/blog", function (req, res) {
  dbBlog.get()
    .then(function (docs) {
      let posts = [];
      docs.forEach(function (doc) {
        posts.push(doc.data())
      })
      res.json(posts);
    });
})

app.post("/blog", function (req, res) {
  dbBlog.doc(req.body.postId.toString()).set(req.body)
    .then(function () {
      res.json({ general: "Publicado com sucesso!" });
    })
})

exports.api = functions.https.onRequest(app)

// ------------- Soap Server ----------------
var fs = require('fs'),
soap = require('soap'),
express = require('express'),
cors = require('cors'),
lastReqAddress;
var server = express();
var myService = {
  ws: {
    calc: {
        sumar : function(args) {
            var n = 1*args.a + 1*args.b;
            return { sumres : n };
        },

        multiplicar : function(args) {
            var n = parseInt(args.a) * parseInt(args.b);
            //daora q faz essa conta só por diversao kkkkk, eh que se der problema volta pro anterior, aqui nos n usa git, KKKK, é tudo código pelo whats zuera kkkk
            
            return dbBlog.get()
            .then(function (docs) {
              let posts = [];
              docs.forEach(function (doc) {
                posts.push(doc.data()) 
              })
              return { mulres : JSON.stringify(posts) };
            });
        }
    }
}
};
var xml = fs.readFileSync(__dirname + '/wsdl/wscalc1.wsdl', 'utf-8');
server = express();
server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();
});
server.options('*', cors()); 
soap.listen(server, '/', myService, xml);

exports.stockquote = functions.https.onRequest(server)