//  Below will be replaced with our MySQL table
const users = [
    {
        username: "bobby",
        password: "badpassword"
    },
    {
        username: "cathy123",
        password: "icecream"
    },
    {
        username: "spongebob",
        password: "patrick"
    }
]

// CRUD Functions
function getAllUsers() {
    return users;
}

module.exports = { getAllUsers }