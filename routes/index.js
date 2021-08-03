const express = require('express');
const router = express.Router();

/* POST home page. */
router.post('/', (req, res, next) => {
  const { numbers } = req.body;
  const userName = 'AyushUpadhyay';
  const dateOfBirth = '01062000';
  const user_id = `${userName}_${dateOfBirth}`;
  try {
    const transformedNumbers = numbers.map(number => +number);
    const isInputInvalid = transformedNumbers.findIndex(
      number => !Number.isInteger(number)
    );
    if (isInputInvalid > -1) {
      return res.status(200).json({
        is_success: false,
        user_id
      });
    } else {
      const even = [];
      const odd = [];
      transformedNumbers.forEach(number => {
        number % 2 === 0 ? even.push(number) : odd.push(number);
      });
      return res.status(200).json({
        is_success: true,
        user_id,
        odd,
        even
      });
    }
  } catch (e) {
    return res.status(500).json(e);
  }
});

module.exports = router;
