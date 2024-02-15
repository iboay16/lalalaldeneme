const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

const errorController = require('./Controllers/error');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');
const LoginRoutes = require('./routes/login');
const UserRecord = require('./routes/userRecord');
const errorPassword = require('./routes/yanlisGiris');

app.use('/', LoginRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/kayit', UserRecord);
app.use('/yanlisGiris', errorPassword);

app.use(errorController.get404Page);

app.listen(3000, () => {
    console.log('dinleme işlemi başladı');
});
