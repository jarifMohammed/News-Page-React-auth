import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const NewsPage = () => {
    const {data:news} = useLoaderData()
    // console.log(news)
    return (
        <div>
           <h2 className="font-semibold mb-3">News Home</h2>
           <p className="text-gray-400 text-sm">
        {news.length} News Found</p>
        <div>
            {
                news.map((n)=> (<NewsCard key={n.id} news={n} ></NewsCard>

                ))

            }
        </div>
        </div>
    );
};

export default NewsPage;