const mongoose = require('mongoose');
const {Schema,model} = mongoose;

const depositSchema = new Schema({
  rekeningTujuan: {
    type: String,
    required: true,
  },
  rekeningAsal: {
    type: String,
    required: true,
  },
  jumlah: {
      type: Number,
      required: true
  },
  catatan: {
      type: String,
      required: true
  },
  action: {
      type: String,
      required: true,
      default: "inActive"
  }
});


const Deposit = model('Desposit', depositSchema);
module.exports= Deposit;