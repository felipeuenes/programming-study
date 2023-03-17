const { json } = require('express');
const prisma = require('../database')

module.exports = {
    async read(req, res){
        try {
            const { id } = req.query;
            if (id) {
                const student = await prisma.studants.findUnique({ where: Number(id)})
            
            if (!student) {
                return res.status(400).json('Aluno não encontrado!');
            }
                return res.json(student);

        } else {
            const studants = await prisma.studants.findMany();
            return res.json(studants);
        }
            
        } catch (error) {
            console.error(error);
        }
    },
    async create(req, res){
        try {

            const { name, email, fone, city } = req.body;
            if( !name ||
                !email ||
                !fone ||
                !city ||
                name == ''||
                email == '' ||
                fone == '' ||
                city == ''){
                return  res.status(400).json('Por favor, preencha todos os dados')
            }

            const studantsEmail = await prisma.studants.findUnique({ where: {email}});
            if(studantsEmail) return  res.status(400).json('Email já em uso!')

            await prisma.studants.create({data: {name, email, fone, city}});
            return res.json('Aluno cadastrado com sucesso')
            
        } catch (error) {
            console.error(error);
        }
    },
    async update(req, res){
        try {
            const { id } = req.params;

            const { name, email, fone, city } = req.body;
            if( !name ||
                !email ||
                !fone ||
                !city ||
                name == ''||
                email == '' ||
                fone == '' ||
                city == ''){
                return  res.status(400).json('Por favor, preencha todos os dados')
            }

            const student = await prisma.studants.findUnique({where: {id: Number(id)}});
            if(!student) return  res.status(400).json('Aluno não encontrado');

            const studantsEmail = await prisma.studants.findUnique({ where: {email}});
            if(studantsEmail && (studantsEmail.email != student.email)) return  res.status(400).json('Email já em uso!')

            await prisma.studants.update({data: {name, email, fone, city},
            where: {id: Number(id)}});
            return res.json('Aluno atualizado com sucesso')
            

        } catch (error) {
            console.error(error);
        }
    },
    async delete(req, res){
        try {
            const { id } = req.params;

           
            const student = await prisma.studants.findUnique({where: {id: Number(id)}});
            if(!student) return  res.status(400).json('Aluno não encontrado');

            await prisma.studants.delete({where: {id: Number(id)}});
            return res.json('Aluno deletado com sucesso')
            
        } catch (error) {
            console.error(error);
        }
    },
}