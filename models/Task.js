const { Schema, model } =
    require("./connection")

const taskSchema = Schema({
    entry: {
        required: true,
        type: String
    },
    status: {
        type: String,
        required: true,
        default: 'TO-DO',
        enum: ['TO-DO', 'COMPLETED'],
    }

},
    {
        timestamps: true
    }
)

module.exports = model('Task', taskSchema)