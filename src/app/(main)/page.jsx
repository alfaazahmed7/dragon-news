import LeftSidebar from "@/components/homepage/news/LeftSidebar";

async function getCategories() {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}

export default async function Home() {
  const categories = await getCategories();
  console.log(categories.news_category, "categories");

  return (
    <div className="w-10/12 mx-auto">
      <div className="grid grid-cols-12 gap-5">

        <div className="col-span-3">
          <LeftSidebar categories={categories} activeId={null} />
        </div>

        <div className="bg-yellow-200 col-span-6">
          <h4>All News</h4>
        </div>

        <div className="bg-green-200 col-span-3">
          <h4>Social Icons</h4>
        </div>

      </div>
    </div>
  );
}
