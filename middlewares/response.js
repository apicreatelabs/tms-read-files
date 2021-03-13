responseData = (req,res) =>{
    if(req.objects.response === 200){
        res.json({
            status:2000,
            data: req.objects.data
        });
    }
    else{
        res.status(400);
    }
}

module.exports = {
    responseData
}