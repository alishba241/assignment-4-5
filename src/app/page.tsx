import { blogs } from "./blogdata";
import Blogcard from "./blogscard/page";

export default function Home() {
  return (
    <div>
      <Blogcard blog={blogs}/>
      {/* <BlogDetail params={{readmore: ""}} /> */}
    </div>
  );
}
