const router = require('express').Router();

//Signup
router.post('/sign-up', async(req, res) => {
    try{
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;