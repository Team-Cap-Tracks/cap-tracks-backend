import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 6

const ticketSchema = new mongoose.Schema({
  ticketOwner: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  fare: {type: Number, required: true},
  startStation: {type: String, required: true},
  endStation: {type: String, required: true},
  time: {type: Date, required: true},
}, {
  timestamps: true,
})

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, lowercase: true, unique: true },
  password: String,
  profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  tickets: [ticketSchema],
}, {
  timestamps: true,
})

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password
    return ret
  },
})

userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified('password')) return next()
  bcrypt.hash(user.password, SALT_ROUNDS)
  .then(hash => {
    user.password = hash
    next()
  })
  .catch(err => {
    next(err)
  })
})

userSchema.methods.comparePassword = function (tryPassword, cb) {
  bcrypt.compare(tryPassword, this.password, cb)
}

const User = mongoose.model('User', userSchema)

export { User }
