import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
const SALT_ROUNDS = 6

const favoriteRoutesSchema = new mongoose.Schema({
  routeName: String,
  routeOwner: {type: mongoose.Schema.Types.ObjectId, ref: 'Profile'},
  startStation: String,
  endStation: String,
})

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, lowercase: true, unique: true },
  password: String,
  profile: {type: mongoose.Schema.Types.ObjectId, ref: "Profile"},
  favoriteRoutes: [favoriteRoutesSchema]
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
const Routes = mongoose.model('Routes', favoriteRoutesSchema)

export { User, Routes }