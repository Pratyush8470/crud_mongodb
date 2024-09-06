const models = require("../model/db/mongoose.js");

const localHost = async (req, res) => {
    const data = await models.find({});

    res.render("index", { data });
};

const addData = async (req, res) => {
    console.log("hello", req.body);

    const obj = {
        bankName: req.body.bankName,
        diposite: req.body.diposite,
        accountNo: req.body.accountNo,
        name: req.body.name,
        mobileNo: req.body.mobileNo,
        method: req.body.method,
        other: req.body.other,
    };
    console.log("data", obj);
    const newObjModel = new models(obj)
    await newObjModel.save();

    res.redirect("/");
};

const editData = async (req, res) => {
    let { id } = req.params;

    const edit = await models.findOne({ _id: id });

    console.log("rec", edit);
    res.render("edit", { edit: edit });
};

const updateData = async (req, res) => {
    let { id } = req.params;
    console.log("ok", req.body);

    const update = await models.findByIdAndUpdate(
        { _id: id },
        {
            bankName: req.body.bankName,
            diposite: req.body.diposite,
            accountNo: req.body.accountNo,
            name: req.body.name,
            mobileNo: req.body.mobileNo,
            method: req.body.method,
            other: req.body.other,
        },
        {
            new: true,
        }
    );

    console.log("Update", update);

    res.redirect("/");
};

const deleteData = async (req, res) => {
    let { id } = req.params;

    const delet = await models.findByIdAndDelete({ _id: id });

    res.redirect("/");
};
module.exports = { localHost, addData, editData, updateData, deleteData };
