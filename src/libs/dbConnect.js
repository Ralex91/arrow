import mongoose from "mongoose"

//
// Source :
// https://github.com/vercel/next.js/blob/canary/examples/with-mongodb-mongoose/lib/dbConnect.ts
//

const { DB_URL } = process.env

if (!DB_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  )
}

let cached = global.mongoose

// eslint-disable-next-line no-multi-assign
cached ||= global.mongoose = { conn: null, promise: null }

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    }
    cached.promise = mongoose
      .connect(DB_URL, opts)
      .then((connection) => connection)
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

export default dbConnect
