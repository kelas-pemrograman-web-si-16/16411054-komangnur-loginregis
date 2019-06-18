const mongoose = require('mongoose');
const bukuSchema = mongoose.Schema({
    kodebuku        : {type: String, unique: true},
    judulbuku 		: String,
    sinopsis 	    : String,
    pengarang	    : String,
    harga	        : number,
    created_at		: Date
});
module.exports = mongoose.model('buku', bukuSchema);