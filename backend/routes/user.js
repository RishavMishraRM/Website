const router = require('express').Router();

//Signup
router.post('/sign-up', async(req, res) => {
    try{
        const {username, email, password, address} = req.body;

        //check username length is more than 3
        if(username.length < 4){
            return res.status(400).json({message: "Username must be more than 4 characters"});
        }
        //check usename already exists?
        const existingUsername = await User.findOne({username: username});
        if(existingUsername){
            return res.status(400).json({message: "Username already exists"});
        }
        //check email already exists?
        const existingEmail = await User.findOne({email: email});
        if(existingEmail){
            return res.status(400).json({message: "Email already exists"});
        }
        //check password's length
        if(password.length < 5){
            return res.status(400).json({message: "Password must be more than 5 characters"});
        }
        const newUser = new User({
            username : username,
            email : email,
            password : password,
            address : address
        });
        await newUser.save();
        return res.status(200).json({message: "SignUp successful"});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router;