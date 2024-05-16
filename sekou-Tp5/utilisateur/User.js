const mongoose = require('mongoose');
const UtilisateurSchema = new mongoose.Schema({
    nom: String,
    email: String,
    login: String,
    mdp: String,
  });

userModel= mongoose.model('Utilisateur', UtilisateurSchema);
module.exports=userModel;