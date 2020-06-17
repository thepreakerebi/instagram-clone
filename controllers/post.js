const Post = require('../models/post');

// get all posts logic
exports.allPosts = (req, res, next) => {
    Post.find()
    .populate("postedBy", "_id name")
    .then(posts => {
        res.status(200).json({
            success: true,
            posts
        });
    })
    .catch(err => {
        console.log(err);
    });
}

// create post logic
exports.createPost = (req, res, next) => {
    const { title, body } = req.body;
    if(!title || !body) {
        return res.status(422).json({error: "all fields are required"});
    } else {
        req.user.password = undefined;
        const post = new Post({
            title,
            body,
            postedBy: req.user
        });
        post.save()
        .then(result => {
            res.status(200).json({
                success: true,
                result
            });
        })
        .catch(err => {
            console.log(err);
        });
    }
}

// get all user's posts logic
exports.userPosts = (req, res, next) => {
    Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then(userPosts => {
        res.status(200).json({
            success: true,
            userPosts
        });
    })
    .catch(err => {
        console.log(err);
    });
}