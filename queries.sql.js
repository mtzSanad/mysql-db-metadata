const queries = {
    schemas: `SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA ORDER BY SCHEMA_NAME`
}
module.exports = queries;