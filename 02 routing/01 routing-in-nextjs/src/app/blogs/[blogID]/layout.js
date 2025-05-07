
export const generateMetadata = async({params})=>{
  const {blogID} = await params;
return{
  title: `Blog ${blogID}`
}

}

export default function RootLayout({ children }) {
  return (
      <>
        <header></header>
        {children}
        <footer></footer>
        </>
  );
}
