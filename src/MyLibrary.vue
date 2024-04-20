<template>
  <div class="bg-gray-900">
   <section class="container mx-auto py-10">
    <h2 class="text-2xl font-semibold mb-4 text-blue-700">Featured Videos</h2>
    <p class="text-lg mb-8 text-white">Find Your Favorites: Use our search and filtering options to discover videos by your favorite artists, directors, or genres.</p>
    <div class="flex justify-between items-center mb-4">
        <div class="flex items-center space-x-4">
          <label for="sort" class="font-semibold text-white">Sort by:</label>
          <select id="sort" class="border rounded px-3 py-1">
            <option value="imdb">IMDB Ratings</option>
            <option value="genre">Genre</option>
            <option value="year">Year</option>
            <option value="source">Source</option>
          </select>
        </div>
        <div class="flex items-center space-x-4">
          <label for="search" class="font-semibold text-white">Search:</label>
          <input type="text" id="search" class="border rounded px-3 py-1">
        </div>
      </div>

   <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I1.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Land of Bad</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">110m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I2.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">The Boys In The Boat</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">124m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I3.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Oppenheimer</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">181m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I4.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">The Beekeeper</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">105m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
   </div>
   <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I5.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">No Way Up</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">90m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I6.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">The Abyss</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">104m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I7.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Aquaman And The lost Kingdom</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">124m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I8.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Lights Out</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">90m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
  </div>

  <section class="container mx-auto mb-10 mt-20">
    <h2 class="text-2xl font-semibold mb-4 text-blue-700">Trending Videos</h2>
    <p class="text-lg mb-8 text-white">Explore New Content: Dive into our vast collection of videos and find something new to watch.</p>
  </section>

  <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I9.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Upgraded</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">105m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I10.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">The Folks</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">88m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I11.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">This Is Me...Now</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">66m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I12.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">The beach House Murders</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">88m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I13.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Ferrari</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">1310m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I14.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Dune</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">155m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I15.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">All Of Us Strangers</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">106m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I16.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Memory</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">114m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
  </div>

  <section class="container mx-auto mb-10 mt-20">
    <h2 class="text-2xl font-semibold mb-4 text-blue-700">Trending Tv & Series</h2>
    <p class="text-lg mb-8 text-white">Explore New Content: Dive into our vast collection of videos and find something new to watch.</p>
  </section>

  <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/T1.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Tokyo Vice</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">45m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/T2.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">The Real Housewives Of Miami</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">44m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/T3.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Resident Alien</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">45m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/T4.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Double Cross</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">45m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/T5.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">FEUD</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">60m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/T6.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Wild Cards</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">50m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/T7.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Halo</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">45m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/T8.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5">Caught In The Act : Unfaithful</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">45m</p>
          <p class="text-gray-500 font-bold ml-28 border border-gray-500 p-2 rounded">Movie</p>
        </div>
        <div class="mt-4 space-x-2 flex-wrap">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-4">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded">Find Video Like This</button>
        </div>
    </div>
  </div>
</section>
</div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
name: 'VideoDiscoveryPage',
});
</script>