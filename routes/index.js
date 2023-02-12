const router = require('express').Router();
//import notes module router
const notesRouter = require('./notes');

router.use("/notes", notesRouter);



module.exports = router;