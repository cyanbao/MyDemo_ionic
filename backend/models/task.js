var mongoose = require('mongoose');

//申明一个mongoons对象
var TaskSchema = new mongoose.Schema({
    title: String,
    checked:Boolean,
    create_at: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
});

//暴露出的方法
module.exports = mongoose.model('Task', TaskSchema);
