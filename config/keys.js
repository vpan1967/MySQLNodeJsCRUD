let host = 'bv6ym441ukgpx3snbyfs-mysql.services.clever-cloud.com'
let db = 'bv6ym441ukgpx3snbyfs'
let user = 'ux3d8iuvabsqmeks'
let port = '3306'
let password = 'tvMtbKLOPT7u8eKlaj2P'

const database = `mysql://${user}:${password}@${host}:${port}/${db}`;

module.exports = {database};