const {Applicant} = require("../models");

class Controller
{
    static formApply(req, res)
    {
        res.render("./applicant/apply");
    }

    static apply(req, res)
    {
        let {name, age, departement, position, requested_salary} = req.body;
        let data = {name, age, departement, position, requested_salary};
                Applicant.create(data)
                .then(() => res.redirect("/"))
                .catch(err => res.send(err));
    }
}

module.exports = Controller;