import { redirect } from "next/navigation";


const Home = async () => {
  const default_category_id = "01";
  redirect(`category/${default_category_id}`);
}

export default Home;