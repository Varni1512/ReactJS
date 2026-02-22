import React from "react";

const Card = ({ image, title, date, author, avatar }) => {
  return (
    <div className="relative rounded-2xl overflow-hidden group cursor-pointer">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Bottom content */}
      <div className="absolute bottom-0 p-5 text-white">
        
        {/* date + author */}
        <div className="flex items-center gap-3 text-sm opacity-90 mb-2">
          <span>{date}</span>

          <div className="flex items-center gap-2">
            <img
              src={avatar}
              alt={author}
              className="w-7 h-7 rounded-full object-cover border border-white/40"
            />
            <span>{author}</span>
          </div>
        </div>

        {/* title */}
        <h2 className="text-xl font-bold leading-snug max-w-xs">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Card;