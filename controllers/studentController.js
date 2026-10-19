const Student = require('../models/Student');

// POST /save-student
exports.saveStudent = async (req, res) => {
    try {
        const { stdnum, fname, lname, age } = req.body;

        const student = new Student({
            stdnum,
            fname,
            lname,
            age
        });

        await student.save();

        res.json({ inserted: true });
    } catch (error) {
        console.error(error);
        res.status(500).json({ inserted: false });
    }
};

// POST /update
exports.updateStudent = async (req, res) => {
    try {
        const result = await Student.updateOne(
            { fname: 'Mary Jane' },
            { $set: { lname: 'Parker' } }
        );

        res.json({
            acknowledged: result.acknowledged,
            matchedCount: result.matchedCount,
            modifiedCount: result.modifiedCount
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ updated: false });
    }
};

// POST /remove-user
exports.removeUser = async (req, res) => {
    try {
        const result = await Student.deleteOne({
            stdnum: req.body.stdnum || '8051495845'
        });

        res.json({
            deleted: result.acknowledged && result.deletedCount > 0
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ deleted: false });
    }
};

// POST /remove-all-user
exports.removeAllUsers = async (req, res) => {
    try {
        const result = await Student.deleteMany({});

        res.json({
            deleted: result.acknowledged && result.deletedCount > 0
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ deleted: false });
    }
};

// GET /user?stdnum=8051495845
exports.getUser = async (req, res) => {
    try {
        const students = await Student.find({
            stdnum: req.query.stdnum
        });

        res.json(students);
    } catch (error) {
        console.error(error);
        res.json([]);
    }
};

// GET /members
exports.getAllUsers = async (req, res) => {
    try {
        const students = await Student.find({});

        res.json(students);
    } catch (error) {
        console.error(error);
        res.json([]);
    }
};
