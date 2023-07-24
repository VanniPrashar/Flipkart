import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
id: String,
    type: String,
url: String,
detailUrl: String,
title: Object,
price: Object,
quantity: Number,
description: String,
discount: String,
tagline: String
});



const products = mongoose.model('product' , productSchema);

export default products;