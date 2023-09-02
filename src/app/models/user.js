import bcrypt from 'bcrypt';
import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true })

// Encry password
userSchema.pre('save', async function (next) {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(this.password, salt)
    this.password = hashedPassword
    next()
  } catch (error) {
    next(error);
  }
})

// Reset password
// userSchema.pre('findOneAndUpdate', async function (next) {
//   const update = this.getUpdate()
//   if (update.password) {
//     const passwordHash = await bcrypt.hash(update.password, 10)
//     this.setUpdate({
//       $set: {
//         password: passwordHash,
//         comfirmpw: undefined
//       }
//     })
//   }
//   next()
// })

userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};

export default mongoose.model("User", userSchema);