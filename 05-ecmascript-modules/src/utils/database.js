const databaseType = {
    userType: "admin",
    typeData: "dataLocal" ,
}

async function connectToDatabase(dataName) {
    // logica de conexao
    console.log(`conectado ao banco ${dataName}`)    
}

async function disconectDatabase(dataName) {
    // logica de desconexao
    console.log(`desconectado do banco ${dataName}`)
}

export {
    connectToDatabase, 
    disconectDatabase,
    databaseType,
};