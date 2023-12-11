const schems = require('../validationSchemes/schems');
const BadRequestError = require('../errors/BadRequestError');

module.exports.validateRegistrationData = async (req, res, next) => {
  const validationResult = await schems.registrationSchem.isValid(req.body);
  if (!validationResult) {
    return next(new BadRequestError('Invalid data for registration'));
  } else {
    next();
  }
};

module.exports.validateLogin = async (req, res, next) => {
  const validationResult = await schems.loginSchem.isValid(req.body);
  if (validationResult) {
    next();
  } else {
    return next(new BadRequestError('Invalid data for login'));
  }
};

module.exports.validateContestCreation = async (req, res, next) => {
  try {
    for (const el of req.body.contests) {
      const isValid = await schems.contestSchem.isValid(el);

      if (!isValid) {
        throw new BadRequestError('Invalid data for contest creation');
      }
    }

    next(); 
  } catch (err) {
    next(err);
  }


  // const promiseArray = req.body.contests.map(el => schems.contestSchem.isValid(el));
 
  // const results = Promise.all(promiseArray);

  // if (results.every(result => result)) {
  //   next();
  // } else {
  //   return next(new BadRequestError('Invalid data for contest creation'));
  // }
};
