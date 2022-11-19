const Flight = require("../models/models");

const getAllFlight = async (req, res) => {
  let flights;
  try {
    flights = await Flight.find();
  } catch (err) {
    console.log("this is getall error " + err);
  }
  if (!flights) {
    return res.status(404).json({ message: "No any flight here" });
  }
  return res.status(200).json({ flights });
};
const getSingleFlight = async (req, res) => {
  const _id = req.params.id;
  let flight;
  try {
    flight = await Flight.findById(_id);
  } catch (error) {
    console.log("this is getSinggleFlight error " + error);
  }
  if (!flight) {
    return res.status(404).json({ message: "No Single flight Found" });
  }
  return res.status(200).json({ flight });
};

const bookFlight = async (req, res) => {
  const { title, time, price, date } = req.body;
  let flight;
  try {
    flight = new Flight({
      title,
      time,
      price,
      date,
    });
    await flight.save();
  } catch (error) {
    console.log("this is Book flight Error " + error);
  }
  if (!flight) {
    return res.status(500).json({ message: "Unable to book new flight" });
  }
  return res.status(201).json({ flight });
};
const deleteFlight = async (req, res) => {
  const id = req.params.id;
  let flight;
  try {
    flight = await Flight.findByIdAndRemove(id);
  } catch (error) {
    console.log("this is delete problem " + error);
  }
  if (!flight) {
    return res.status(404).json({ message: "can not delete by this id" });
  }
  return res.status(200).json({ message: "item deleted succesfully" });
};
const updateFlight = async (req, res) => {
  const id = req.params.id;
  const { title, time, price, date } = req.body;
  let flight;
  try {
    flight = await Flight.findByIdAndUpdate(id, {
      title,
      time,
      price,
      date,
    });
    flight = await flight.save();
  } catch (error) {
    console.log("this is update errpr " + error);
  }
  if (!flight) {
    return res.status(404).json({ message: "unable to update by this id" });
  }
  return res.status(200).json({ flight });
};

exports.getAllFlight = getAllFlight;
exports.getSingleFlight = getSingleFlight;
exports.bookFlight = bookFlight;
exports.deleteFlight = deleteFlight;
exports.updateFlight = updateFlight;
