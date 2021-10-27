var dolgozok = [
    {
        nev: "Béla",
        telepules: "Szeged"
    },
    {
        nev: "Teri",
        telepules: "Szolnok",
        id: 2
    },
    {
        nev: "Lajos",
        telepules: "Hatvan"
    }
];
 
dolgozok.forEach( dolgozo => {
    console.log(dolgozo.nev)
}) 

dolgozok.forEach( dolgozo => {
    console.log(dolgozo.telepules)
}) 
dolgozok.forEach( dolgozo => {
    console.log(dolgozo.id)
}) 