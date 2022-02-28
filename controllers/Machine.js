const History = require("../models/History");
const Machine = require("../models/Machine");

exports.changeMachineStatus = async (req, res) => {
  const { id, fullName, hours, minutes } = req.body;
  const machine = await Machine.findOne({
    id,
  });

  machine.status = !machine.status;
  machine.user = fullName;
  machine.hours = hours;
  machine.minutes = minutes;

  const date = new Date(Date.now());

  const formattedDate =
    date.getDate() +
    "/" +
    (date.getMonth() + 1) +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();

  const history = {
    machine: id,
    date: formattedDate,
    user: fullName,
  };

  await History(history).save();

  await machine.save();

  res.send({
    machine,
    history,
  });
};

exports.getHistoryWithLimit = async (req, res) => {
  const { limit } = req.params;

  const histories = await History.find().sort({ date: -1 }).limit(limit);

  res.send(histories);
};

exports.getMachineStatuses = async (req, res) => {
  
  const machines = await Machine.find();

  res.send(machines);
};
