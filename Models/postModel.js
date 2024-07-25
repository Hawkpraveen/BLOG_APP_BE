import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      default:
        "https://static.vecteezy.com/system/resources/thumbnails/010/925/555/small/blog-social-media-platform-influencer-personal-brand-promotion-recent-stories-and-post-attract-followers-and-subscriptions-viral-content-flat-design-modern-illustration-vector.jpg",
    },
    category: {
      type: String,
      default: "uncategorized",
    },
  },
  { timestamps: true }
);
const Post = mongoose.model("Post", postSchema);
export default Post;