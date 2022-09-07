const { body }          = require('express-validator')

const validateVote = [
    body('hairstyle', "Hairstyle field is incorrectly formatted")
        .trim().escape()
        .isLength({ min: 1, max: 50 }),
    body('voterName', "Name field is incorrectly formatted")
        .trim().escape()
        .notEmpty().withMessage("Name field cannot be empty")
        .isLength({ max: 50 }),
    body('hairstyleSuggestion', "Hairstyle suggestion field is incorrectly formatted")
        .optional({checkFalsy: true})
        .trim().escape()
        .isLength({ min: 1, max: 50 })
]

module.exports = {
    validateVote
}
