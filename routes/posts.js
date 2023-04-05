var express = require('express');
var router = express.Router();
const PostsControllers = require('../controllers/posts')

router.get('/', PostsControllers.getPosts);

router.post('/', PostsControllers.createPosts);

router.delete('/', PostsControllers.deleteAllPosts);

router.delete('/:id', PostsControllers.deletePosts);

router.patch('/:id', PostsControllers.updatePosts);


module.exports = router;
