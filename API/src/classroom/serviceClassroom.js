const schemaClassroom = require('./schemaClassroom.js')

schemaClassroom.methods(['get', 'put', 'post', 'delete'])
schemaClassroom.updateOptions({ new: true, runValidators: true})

module.exports = schemaClassroom