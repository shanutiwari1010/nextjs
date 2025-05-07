const page = async ({ params }) => {
  console.log(await params, "123456789");
  const { blogID } = await params;
  return <div> comments {blogID} </div>;
};

export default page;
