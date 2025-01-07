const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({

    name : String,  
    description : String,
    media : [],
    creator : {
        //cle etranger
        type : mongoose.Types.ObjectId,
        //esem el tab
        ref : 'users',
        // true manha kol post lezem tkoun andha creator
        required : true

    }
})

module.exports = mongoose.model('postes', postSchema)

