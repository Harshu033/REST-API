const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const AccessControlSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true,
    },
    resourceType: {
        type: String, 
        required: true,
    },
    resourceId: {
        type: mongoose.Schema.Types.ObjectId, 
        refPath: 'resourceType',
        required: true,
    },
    permission: {
        type: String, 
        required: true,
    },
});

const ACCESSCONTROL = mongoose.model('AccessControl', AccessControlSchema);
module.exports = ACCESSCONTROL