const {Schema, model} = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false, //Propiedad seteada en False que este campo no sea mostrado en una acción de Select
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Provide a valid email'],
    },
    displayName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //Propiedad que agrega dos columnas DateTime a la tabla automáticamente (createdAt y UpdatedAt)
    versionKey: false,
  },
);

module.exports = model('User', userSchema);
