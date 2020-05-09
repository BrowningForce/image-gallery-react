import React from "react";

const ImageCard = ({ image }) => {
    const tags = image.tags.split(", ");
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <a href={image.pageURL} target="_blank" rel="noopener noreferrer">
                <img
                    src={image.webformatURL}
                    alt="Random from Pixabay"
                    className="w-full"
                />
            </a>

            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 text-xl mb2">
                    Photo by{" "}
                    <a
                        className="text-blue underline bg-gray"
                        href={`http://pixabay.com/users/${image.user}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {image.user}
                    </a>
                </div>
            </div>
            <ul>
                <li className="pl-6">
                    <strong>Views: </strong>
                    {image.views}
                </li>
                <li className="pl-6">
                    <strong>Downloads: </strong>
                    {image.downloads}
                </li>
                <li className="pl-6">
                    <strong>Likes: </strong>
                    {image.likes}
                </li>
            </ul>

            <div className="px-6 py-4">
                {tags.map((tag, index) => (
                    <span
                        key={index}
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 
      text-sm font-semibold text-gray-700 mr-2"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default ImageCard;
