const pool = require('./pool');
const bcrypt = require('bcrypt');

function User() {};

User.prototype = {
    //Find user data by id or username.
    find : function(user=null,callback)
    {
        //if user = number return field = id, if user=string return 
        //field=username. 
        if(user){
            var field = Number.isInteger(user) ? 'id' : 'username';

        }
        let sql = `SELECT * FROM users where ${field}=?`;

        pool.query(sql,user,function(err,result){
            if(err) throw err

            if(result.length){
                callback(result[0]);
            }else{
            callback(result);
            }
        });
    },

    create : function(body, callback)
    {
        let pwd = body.password;
        body.password = bcrypt.hashSync(pwd,10);

        var bind = [];

        for(prop in body){
            bind.push(body[prop]);
        }
        
        let sql = `INSERT INTO users(username,fullname,password) VALUES(?,?,?)`

        pool.query(sql,bind,function(err,result){
            if(err) throw err;
            callback(result.insertId);
        });
    },

    login : function(username,password,callback)
    {
        this.find(username,function(user){
            if(user){
                if(bcrypt.compareSync(password, user.password)){

                    callback(user);
                    return;
                }
            }
            // if the username/password is wrong then return null
            callback(null);
        });

    }
}

module.exports = User;