module.exports = app => {

    const express = require('express');
    const multer = require('multer');
    const router = express.Router();

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'uploads/');
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname);
        }
    });

    const upload = multer({ storage: storage });

    router.post('/upload', upload.single('file'), (req, res) => {
        // aquí puedes usar Sequelize para guardar la imagen en la base de datos
        res.send('Imagen cargada correctamente');
    });

    app.use('/api/users/profile', router);

}
