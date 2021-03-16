responseData = (req,res) =>{
    if(req.objects.response === 200){
        res.json({
            info:{
                status: 200
            },
            result:req.objects.data
        });
    }
    else{
        res.status(404).json({ errors:{
            descriptions: [
                "Format no soport"
            ]
        }})
    }
}

module.exports = {
    responseData
}