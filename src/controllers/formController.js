const formModel = require("../models/formModel");
const {
  isValidDate,
  validateEmail,
  validateMobile,
} = require("../validation");

const createForm = async (req, res) => {
  try {
    const requestBody = req.body;
    if (Object.keys(requestBody).length === 0) {
      return res
        .status(400)
        .send({ status: false, msg: "Request body can't be empty" });
    }
    const { name, email, phone, date, time } = requestBody;
    if (!name) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "Name is required and must only contain letters",
        });
    }
    if (!email) {
      return res.status(400).send({ status: false, msg: "Email is required" });
    }
    if (!phone) {
      return res
        .status(400)
        .send({ status: false, msg: "Phone number is required" });
    }
    if (!date) {
      return res.status(400).send({ status: false, msg: "Date is required" });
    }
    if (!time) {
      return res.status(400).send({ status: false, msg: "Time is required" });
    }

    if (!validateEmail(email)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please provide a valid email" });
    }

    if (!validateMobile(phone)) {
      return res
        .status(400)
        .send({ status: false, msg: "Please provide a valid phone number" });
    }

    if (!isValidDate(date)) {
      return res
        .status(400)
        .send({
          status: false,
          msg: "Please provide a valid date (YYYY-MM-DD)",
        });
    }

    const existingForm = await formModel.findOne({ email });
    if (existingForm) {
      return res
        .status(400)
        .send({ status: false, msg: "Email address already exists" });
    }

    const newForm = await formModel.create(requestBody);
    res
      .status(201)
      .send({ status: true, msg: "Form created successfully", data: newForm });
  } catch (error) {
    return res.status(500).send({ status: false, msg: error.message });
  }
};

module.exports = { createForm };
