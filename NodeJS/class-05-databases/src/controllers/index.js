const prisma = require('../databases')


module.exports = {
    async read(req, res){
        const { id } = req.query;
        if(id) {
            const listCourse = await prisma.courses.findUnique({where: {id: Number(id)}});
            if (!listCourse) return res.json('User not found');
            return res.json(listCourse);              
            
        } else {
            const listCourses = await prisma.courses.findMany()
            res.json(listCourses)
        }

    },
    async create(req, res){
        const { name, hours } = req.body;
        const createCourse = await prisma.courses.create({data: {name, hours: Number(hours)}});

        res.json(createCourse);

    },
    async update(req, res){

        try {
            const { id } = req.params;
            const { name, hours } = req.body;

            const updateCourses = await prisma.courses.update({
                data: {name, hours: Number(hours)},
                where: { id: Number(id) }
            })
        } catch (error) {
            
        }
        res.json({alert: "ok"})
    },
    async delete(req, res){
        res.json({alert: "ok"})
    },
    
}