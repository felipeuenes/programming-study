 


module.exports ={ 
    create(req, res){
        const {id, name} = req.body;
        res.json({id,name});
    }
}