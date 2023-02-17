



module.exports ={ 
    create (req, res){
        const {id, name} = req.body;
        res.json({ situation: `Usuário ${name} de ID ${id} foi criado`});
    },
    update (req, res){
        const {id, name} = req.body;
        res.json({ situation: `Update usuario de ID ${id}`});
    },
    delete (req, res){
        const {id, name} = req.body;
        res.json({ situation: `Usuario com ID ${id} foi deletado`});
    },
  
}