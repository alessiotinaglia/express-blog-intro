
const express = require("express");
const app = express();
const PORT = 3000;

// Array di post
const posts = [
    {
        titolo: "Il mio primo post",
        contenuto: "Questo è il contenuto del mio primo post. Parlerò di come iniziare con Node.js.",
        immagine: "",
        tags: ["Node.js", "Introduzione", "Backend"]
    },
    {
        titolo: "Secondo post",
        contenuto: "Questo è il contenuto del mio primo post. Parlerò di come iniziare con Node.js.",
        immagine: "",
        tags: ["Node.js", "Introduzione", "Backend"]
    },
    {
        titolo: "Terzo post",
        contenuto: "Questo è il contenuto del mio primo post. Parlerò di come iniziare con Node.js.",
        immagine: "",
        tags: ["Node.js", "Introduzione", "Backend"]
    },
    {
        titolo: "Quarto post",
        contenuto: "Questo è il contenuto del mio primo post. Parlerò di come iniziare con Node.js.",
        immagine: "",
        tags: ["Node.js", "Introduzione", "Backend"]
    },
    {
        titolo: "Quinto post",
        contenuto: "Questo è il contenuto del mio primo post. Parlerò di come iniziare con Node.js.",
        immagine: "",
        tags: ["Node.js", "Introduzione", "Backend"]
    }
];

// Rotta principale
app.get("/", (req, res) => {
    res.send("<h1>Server del mio blog</h1>");
});

// Rotta per ottenere tutti i post
app.get("/posts", (req, res) => {
    res.json(posts); // Restituisce i post come oggetti JSON
});

// Rotta /bacheca per ottenere la lista dei post e il conteggio
app.get("/bacheca", (req, res) => {
    const result = {
        conteggio: posts.length, 
        posts: posts             
    };
    res.json(result); 
});

// Fallback per rotte non trovate
app.all("*", (req, res) => {
    res.status(404).send("<h1>Error 404 - Not Found!</h1>");
});

// In ascolto sulle rotte
app.listen(PORT, () => {
    console.log(`Server del mio blog in esecuzione su http://localhost:${PORT}`);
});