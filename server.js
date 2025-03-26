const app = require('./app.js')
const PORT = process.env.PORT || 2525 ;

app.listen(PORT, () => {
    console.log(`Server is Running at localhost:${PORT}`);
})