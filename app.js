const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const app = express();

const connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "uni_web_semana8"
});

connection.connect((error)=>{
    if(error){
        console.log("Error al conectarse a Mysql",error);
    }else{
        console.log("Conectado a la BD");
    }
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

//Visualizar el formulario
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "public/index.html"));
});

//Enviar los datos a la BD
app.post("/login", (req, res)=>{
    const {username, password} = req.body;
    const query = "insert into login(username, password) values (?, ?)"
    connection.query(query, [username, password], (error) => {
        if(error){
            res.status(500).send(error);
        }else{
            console.log("-".repeat(20));
            console.log("Datos guardados.");
            console.log(`Usuario: ${username}`);
            console.log(`Password: ${password}`);
            res.status(200).send("Registro guardado correctamente.");
            //res.sendFile(path.join(__dirname, "public/index.html"));
        }
    });
});

//Poner en marcha el servidor
const puerto = 3000;
app.listen(puerto, ()=>{
    console.log("Servidor corriendo sobre http://localhost:"+puerto);
});
