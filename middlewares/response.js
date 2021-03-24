responseData = (req,res) =>{
    if(req.objects.response === 200){
        res.json({
            info:{
                status: 200,
                urlServices:req.headers.host,
                path: req.originalUrl
            },
            result:req.objects.data
        });
    }
    else{
        res.status(404).json({ errors:{
            status:400,
            descriptions: [
                "Format no soport"
            ]
        }})
    }
}

module.exports = {
    responseData
}