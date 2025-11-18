const FormSubmission = require('../models/FormSubmission');

const submitForm = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const formSubmission = new FormSubmission({
      name,
      email,
      message,
      userId: req.userId
    });

    await formSubmission.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitForm };