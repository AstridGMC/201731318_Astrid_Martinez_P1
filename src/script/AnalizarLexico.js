

controller.uploadFile = (req, res) => {

    let EDFile = req.files.file;
    //console.log(EDFile.name);
    EDFile.mv(`./files/${EDFile.name}`, err => {
        if (err) {
            return res.status(500).send({ message: err })
        } else
            res.redirect('/');


    });
