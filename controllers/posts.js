const errorHandle = require('../utils/errorHandle');
const successHandle = require('../utils/successHandle');
const Post = require('../models/posts');

const posts = {
    async getPosts(req, res) {
        const post = await Post.find();
        successHandle(res, post);
    },
    async createPosts(req, res) {
        try {
            const { body } = req;
            if(body.content) {
                const newPost = await Post.create(
                    {
                        name: body.name,
                        content: body.content,
                    }
                );
                successHandle(res, newPost);
            } else {
                errorHandle(res);
            }
            
        } catch (err) {
            errorHandle(res, err);
        }
    },
    async deleteAllPosts(req, res) {
        const post = await Post.deleteMany({});
        successHandle(res, post);
    },
    async deletePosts(req, res) {
        try {
            const { id } = req.params;
            const post = await Post.findByIdAndDelete(id);
            if(post) {
                successHandle(res, post);
            } else {
                errorHandle(res);
            }
        } catch (err) {
            errorHandle(res, err);
        }
    },
    async updatePosts(req, res) {
        try {
            const { body } = req;
            const { id } = req.params;
            const updatePost = await Post.findByIdAndUpdate(id, {
                name: body.name,
                content: body.content,
            }, { new: true });
            if(updatePost) {
                successHandle(res, updatePost);
            } else {
                errorHandle(res);
            }
        } catch (err) {
            errorHandle(res, err);
        }
    },
}

module.exports = posts;
