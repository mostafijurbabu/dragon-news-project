import { FaEye, FaStar } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { PiBookmarkSimple } from "react-icons/pi";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    rating,
    total_view,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-xl border-0 rounded-xl overflow-hidden">
      {/* Author Info */}
      <div className="flex items-center rounded-t-md bg-base-200 justify-between p-4">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h3 className="font-semibold">{author.name}</h3>
            <p className="text-sm text-start text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <PiBookmarkSimple size={24} className="text-accent" />
          <GoShareAndroid size={24} className="text-accent" />
        </div>
      </div>
      {/* {Title} */}
      <div>
        <h2 className="card-title text-lg font-bold mt-4">{title}</h2>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full object-cover rounded-md mt-4"
        />
      </figure>

      {/* Content */}
      <div className="p-4">
        <p className="text-gray-600 text-sm mt-2">
          {details.slice(0, 200)}...
          <Link
            to={`/news-details/${id}`}
            className="text-primary font-semibold cursor-pointer"
          >
            Read More
          </Link>
        </p>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span key={i} className="badge badge-outline text-xs text-primary">
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4 pt-3">
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-500" />
            <span className="font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
