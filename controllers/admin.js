const {Admin, Applicant, Interview, Interviewer} = require("../models");
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: 'azka1999@gmail.com',
           pass: 'madzka123$'
       }
   });

class AdminController
{
    static formLogin(req, res)
    {
        req.app.locals.as = "admin";
        res.render("./admin/login");
    }

    static login(req, res)
    {
        let {username, password} = req.body;
        Admin.findOne({where : {username}})
        .then((data) =>
        {
            if(password == data.password)
            {
                req.session.username = data.id;
                req.session.isLogin = true;
                res.redirect("/admin");
            }
            else
                res.redirect("/admin/login");
        })
        .catch(err => res.redirect("/admin/login"));
    }

    static createInterview(req, res)
    {   
        let ApplicantId = +req.params.id;
        let {InterviewerId, date} = req.body;
        let data = {InterviewerId, ApplicantId, date};
        Interview.create(data)
        .then((data) => res.send(data))
        .then(() => res.redirect("/admin/interview"))
        .catch(err => 
            {
                let msg = "";
                for(let i in err.errors)
                    msg += err.errors[i].message + "\n";
                res.send(msg)
            });
    }

    static showInterview(req, res)
    {
        Interview.findAll({include : [Applicant, Interviewer]})
        .then(data => res.render("./admin/interview", {data}))
        .catch(err => res.send(err))
    }  

    
    static showaddInterview(req, res)
    {
        let id = Number(req.params.id);
        let data = {};
        Applicant.findByPk(id)
            .then(value =>
                {
                    data = value;
                    // console.log(data);
                    return Interviewer.findAll();
                })
            .then(interviewers => 
                {
                    res.render("./admin/addInterview", {data, interviewers, id})
                })
            .catch(err => res.send(err));
    }

    static showApplicant(req, res)
    {
        Applicant.findAll()
        .then(data => res.render("./admin/applicant", {data}))
        .catch(err => res.send(err))
    }  

    static update(req, res)
    {
        let {status} = req.body;
        let {id} = req.params;
        Interview.update({status}, {where : {id}})
        .then(() => res.redirect("/admin/interview"))
        .then(data => {
            const mailOptions = {
                from: 'azka1999@gmail.com', // sender address
                to: 'azka1999@gmail.com', // list of receivers
                subject: 'Subject of your email', // Subject line
                html: '<p>congratulations</p>'// plain text body
              };
              transporter.sendMail(mailOptions, function (err, info) {
                if(err)
                  console.log(err)
                else
                  console.log(info);
             });
             
        })
        .catch(err => res.send(err))
    }

    static logout(req, res)
    {
        req.session.isLogin = false;
        req.session.username = 0;
        res.redirect("/admin/login")
    }

    static deleteInterviewer(req, res)
    {
        let id = Number(req.params.id);
        Interviewer.destroy({where : {id}})
        .then(() => res.redirect("/admin/interviewer"))
        .catch(err => res.send(err));
    }

    static deleteApplicant(req, res)
    {
        let id = Number(req.params.id);
        Applicant.destroy({where : {id}})
        .then(() => res.redirect("/admin/Applicant"))
        .catch(err => res.send(err));
    }

    static deleteInterview(req, res)
    {
        let id = Number(req.params.id);
        Interview.destroy({where : {id}})
        .then(() => res.redirect("/admin/interview"))
        .catch(err => res.send(err));
    }
}

module.exports = AdminController;