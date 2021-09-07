const user = {
    name: 'Sandro',
    lastname: 'Neri de Paiva'
};

function getUserWithFullName(user){
    return{
        ...user,
        fullname: '${user.name} ${user.lastname}'
    }
}

const userWithFullName = getUserWithFullName(user);
console.log(userWithFullName);