const sql = require('mssql');
const baglantids = require('./baglanti');
const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'loginPage.html'));
});

router.post('/', async (req, res, next) => {
    const kullaniciAdi = req.body.kullaniciAdi;
    const sifre = req.body.sifre;
    if (kullaniciAdi == "admin" && sifre == "123") {
        res.redirect('/admin');
    }

    try {
        await sql.connect(baglantids);
        const result = await sql.query`select * from kayit where kullaniciAdi = ${kullaniciAdi} and sifre = ${sifre}`;
        console.dir(result);

        // SORGU SONUCU ETKİLENENEN SATIR SAYISINA GÖRE KONTROL EDİLİR
        if (result.recordset.length > 0) {
            console.log('Giriş Başarılı');
            res.redirect('/user');
        } else {
            console.log('Giriş Başarısız');
            res.redirect('/yanlisGiris');
        }
    } catch (err) {
        console.log(err);
        console.log('Giriş Başarısız');
        res.status(500).send('Internal Server Error');
    } finally {
        sql.close();
    }
});

module.exports = router;
