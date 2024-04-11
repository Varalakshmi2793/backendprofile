const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const contactussRoutes = require('./routes/contactus'); 
const successRoutes = require('./routes/success'); 

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(contactussRoutes); 
app.use(successRoutes); 



app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
