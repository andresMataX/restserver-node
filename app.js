require('dotenv').config();

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en puerto', process.env.PORT);
});