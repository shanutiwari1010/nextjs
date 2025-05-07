
const CommentId = async({params}) => {
    console.log(await params)
    const {blogID, commentID} = await params
  return <div>blogIdd is {blogID}, and comment id is {commentID}</div>;
};

export default CommentId;
