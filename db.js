const mongoose= require('mongoose');
mongoose.connect('mongodb://127.0.0.1/colegiogeek',{
    useNewUrlParser:true
}).then(db=>console.log(`BD Conectada`))
.catch(error=>console.error(error));


