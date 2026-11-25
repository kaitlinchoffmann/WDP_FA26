const con = require("./db_connect")
const bcrypt = require("bcrypt")

async function createTable() {
    let sql = `
      CREATE TABLE IF NOT EXISTS User(
       userID INT NOT NULL UNIQUE AUTO_INCREMENT,
       userName VARCHAR(32) NOT NULL UNIQUE,
       email VARCHAR(254) NOT NULL UNIQUE,
       password VARCHAR(254) NOT NULL,
       firstName VARCHAR(100) NOT NULL,
       lastName VARCHAR(254) NOT NULL, 
       CONSTRAINT userPK PRIMARY KEY(userID)
    );`

    await con.query(sql)
}
createTable()

async function userExists(user) {
    let sql = `
      SELECT * FROM User 
      WHERE userName=? OR email=?
    `
    let cuser = await con.query(sql, [user.userName, user.email])
    return cuser[0]
}

//Create/Register function
async function register(user) {
    let cuser = await userExists(user)
    if(cuser) throw Error("Username or Email already in use!")
    
    let hashedPassword = await bcrypt.hash(user.password, 10)
    
    let sql = `
      INSERT INTO User(userName, email, password, firstName, lastName)
      VALUES(?, ?, ?, ?, ?)
    `

    await con.query(sql, [user.userName, user.email, hashedPassword, user.firstName, user.lastName])

    cuser = await userExists(user)
    return cuser
}
/*{
  userName: "bobby",
  password: "bobbyiscool",
  firstName: "Robert",
  lastName: "Smith",
  email: "bob@fakemail.com"
}*/
// Read/Login function
async function login(user) {
    let cuser = await userExists(user)
    if(!cuser) throw Error("Username or email not in use!")
    
    let match = await bcrypt.compare(user.password, cuser.password)
    if(!match) throw Error("Password incorrect!")
        
    return cuser    
}

async function getAllUsers() {
    let sql = "SELECT * FROM User;"

    return await con.query(sql)
}

module.exports = { getAllUsers, register, login }