const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:uid?")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

router.route("/entries/:uid?")
  .put(booksController.updateEntry);
  

module.exports = router;
