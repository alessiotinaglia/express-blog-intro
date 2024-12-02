
const express = require("express");
const app = express();
const PORT = 3000;

// immagini statiche 
app.use(express.static('public'));

// Array di post
const posts = [
    {
        titolo: "Ricetta ciambellone",
        contenuto: "Oggi parleremo della ricetta del ciambellone",
        immagine: ('<img scr="/images/ciambellone.jpeg">'),
        tags: ["Uova", "Farina", "Burro"]
    },
    {
        titolo: "Ricetta cracker alla barbabietola",
        contenuto: "Oggi parleremo delle ricetta cracker alla barbabietola",
        immagine: ('<img scr="/images/cracker_barbabietola.jpeg">'),
        tags: ["Cracker", "Barbabietola", "Olio"]
    },
    {
        titolo: "Ricetta pane fritto",
        contenuto: "Oggi parleremo della ricetta del pane fritto",
        immagine: ('<img scr="/images/pane_fritto_dolce.jpeg">'),
        tags: ["Pane", "latte", "uova"]
    },
    {
        titolo: "Ricetta barbabietola",
        contenuto: "Oggi parleremo della ricetta barbabietola",
        immagine: ('<img scr="/images/pasta_barbabietola.jpeg">'),
        tags: ["Sale", "Colorante", "Latte"]
    },
    {
        titolo: "Ricetta torta_paesana",
        contenuto: "Oggi parleremo della ricetta torta_paesana",
        immagine: ('<img scr="/images/torta_paesana.jpeg">'),
        tags: ["Farina", "Uova", "Latte"]
    }
];

// Rotta principale
app.get("/", (req, res) => {
    res.send("<h1>Server del mio blog</h1>");
});

// Rotta per ottenere tutti i post
app.get("/posts", (req, res) => {
    res.json(posts); 
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