const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/tracker")
  .then(() => console.log("Connected to MongoDB2"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

const pro2Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3, 
    maxlength: 50
  },
  PokemonType: String,
  dateCreated: { type: Date, default: Date.now },
  isLegendary: Boolean,
  ultraMoves: {
    type: Number,
    required: function () {
      return this.isLegendary;
    },
  },
});

const Pro2 = mongoose.model("Programs", pro2Schema);

async function createPro() {
  const pro = new Pro2({
    name: "N2",
    isLegendary: true,
  });

  try {
    const result = await pro.save();
    console.log(result);
  } catch (er) {
    for (field in er.errors) 
        console.log(er.errors[field].message);
  }
}

createPro();
