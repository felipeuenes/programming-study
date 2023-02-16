 


module.exports ={ 
    create (req, res){
        const {id, name} = req.body;
        res.json({ situation: `User ${name} de ID ${id} created`});
    },
    update (req, res){
        const {id, name} = req.body;
        res.json({ situation: `Update user de ID ${id}`});
    },
    delete (req, res){
        const {id, name} = req.body;
        res.json({ situation: `Update user de ID ${id}`});
    },
  
}