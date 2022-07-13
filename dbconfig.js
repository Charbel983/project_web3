var config = {
    user : "sa",
    password: "admin",
    driver: "msnodesqlv8",
    database: "Products Database",
    server: ".",
    options: {
        trustedconnection: true,
        enableArithAbort : true, 
        trustServerCertificate: true,
        instancename : 'MSSQLSERVER'
    },
    port: 1433
}

module.exports = config;