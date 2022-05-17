import React from "react";

const Tracks = ({ track }) => {
  return (
    <div key={track.id} className="m-2 text-center max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700">
      <a href={track.external_urls.spotify}>{track.album.images.length ? <img className="rounded-t-lg" src={track.album.images[0].url} alt="" /> : <div>No Image</div>}</a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{track.name}</h5>

        <div className="flex flex-wrap justify-center mt-3 mb-3">
          <span key={track.album.id} className="bg-gray-100 text-gray-800 text-xs font-semibold m-1 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
            {track.album.name}
          </span>
        </div>
        <audio className="m-4" controls autoplay>
          <source src={track.preview_url} type="audio/mpeg" />
        </audio>

        {/* <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{track.genres.join(" ")}</p> */}
        <a
          target="_blank"
          rel="noreferrer"
          href={track.external_urls.spotify}
          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">
          Abrir Canción
          <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Tracks;