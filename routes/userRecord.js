const sql = require('mssql');
const baglantids = require('./baglanti'); 
const express = require('express');
const router = express.Router();
const path = require('path');

const giris = require('../routes/login');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'recordPage.html'));
});

router.post('/', async (req, res, next) => {
    const kullaniciAdi = req.body.kullanici_adi;
    const email = req.body.email;
    const sifre = req.body.sifre;

    console.log('Kullanıcı Adı:', kullaniciAdi);
    console.log('Email:', email);
    console.log('Şifre:', sifre);

    try {
        await sql.connect(baglantids);
        const result = await sql.query`INSERT INTO kayit (kullaniciAdi, email, sifre) VALUES (${kullaniciAdi}, ${email}, ${sifre})`;
        console.dir(result);
    } catch (err) {
        console.log(err);
    } finally {
        sql.close();
    }

    const beklemeSuresi = 3000;
    setTimeout(() => {
        res.setHeader('Location', '/');
        res.status(302).send('gidiyorsunuz');
    }, beklemeSuresi);

});

module.exports = router;
