function checkLogin(req, res, next)
{
    if(req.session.isLogin)
        res.render("./admin");
    else
        res.redirect("/admin/login");
}

module.exports = checkLogin;