const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoticiaSchema = new Schema({
  titulo: { type: String },
  autor: { type: String },
  descricao: { type: String},
  datapublicacao: {type: Date},
  conteudo: { type: String}
  
});

const Noticia = mongoose.model("Noticias", NoticiaSchema);
module.exports = Noticia;