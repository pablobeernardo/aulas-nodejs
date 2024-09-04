async function connectToDataBase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        console.log("conexão com o banco de dados estabelecida")
    } else {
        console.log("falha na conexão com o banco de dados")
    }

}

export default connectToDataBase;