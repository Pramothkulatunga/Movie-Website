<template>
<div class="flex flex-col h-screen bg-gray-900">
  <main class="relative">
    <div class="w-full bg-gray-900 text-white p-8">
      <div class="flex justify-center items-center h-96 bg-black rounded-lg">
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">Play</button>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4">Pause</button>
      </div>
      <div class="mt-4 mb-36">
        <div class="mt-4">
          <h2 class="text-xl font-semibold">Rate this Video</h2>
          <div class="flex items-center mt-2">
            <button class="text-3xl text-yellow-400">&#9733;</button>
            <button class="text-3xl text-yellow-400">&#9733;</button>
            <button class="text-3xl text-yellow-400">&#9733;</button>
            <button class="text-3xl text-yellow-400">&#9733;</button>
            <button class="text-3xl text-gray-300">&#9733;</button>
          </div>
          <div class="mt-8 items-center">
           <button class="text-xl bg-blue-500 text-white px-4 py-2 rounded mb-4">&#128077; Like</button>
           <button class="text-xl bg-red-500 text-white px-4 py-2 rounded mb-4 ml-2">&#128078; DisLike</button>
         </div>
      <div class="mb-10">
        <div class="flex w-46 h-96 mr-4 mt-20">
          <video poster="../src/assets/I1.jpg" class="w-full" ></video>
          <div class="ml-4">
            <h2 class="font-semibold mt-5 text-white">Land of Bad</h2>
            <p class="font-semibold mt-5 text-white">When a Delta Force special ops mission goes terribly wrong, Air Force drone pilot Reaper has 48 hours to remedy what has devolved into a wild rescue operation. With no weapons and no communication other than the drone above, the ground mission suddenly becomes a full-scale battle when the team is discovered by the enemy.</p>
            <p class="font-semibold mt-5 text-white">Released: 2024-01-25Genre: Action, Thriller, War Casts: George Burgess, Gunner Wright, Luke Hemsworth, Daniel MacPherson, Liam Hemsworth</p>
            <p class="font-semibold mt-5 text-white">Duration: 110 min Country: Australia, United States of America Production: Broken Open Pictures, Volition Media Partners, Highland Film Group, Hoodlum Entertainment, R.U. Robot Studios, Moonbow, Gosdom Entertainment, Short Porch Pictures, The Avenue Entertainment, Highland Film Group (HFG)</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
      <h2 class="text-xl font-semibold mt-16">Previous Playlists</h2>
      <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I1.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5 text-black">Land of Bad</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">110m</p>
          <p class="text-gray-500 font-bold border border-gray-500 p-2 rounded ml-28">Movie</p>
        </div>
        <div class="mt-4 space-x-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded mb-2">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded mb-2">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I2.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5 text-black">The Boys In The Boat</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">124m</p>
          <p class="text-gray-500 font-bold border border-gray-500 p-2 rounded ml-28">Movie</p>
        </div>
        <div class="mt-4 space-x-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded mb-2">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded mb-2">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I3.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5 text-black">Oppenheimer</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">181m</p>
          <p class="text-gray-500 font-bold border border-gray-500 p-2 rounded ml-28">Movie</p>
        </div>
        <div class="mt-4 space-x-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded mb-2">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded mb-2">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I4.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5 text-black">The Beekeeper</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">105m</p>
          <p class="text-gray-500 font-bold border border-gray-500 p-2 rounded ml-28">Movie</p>
        </div>
        <div class="mt-4 space-x-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded mb-2">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded mb-2">Find Video Like This</button>
        </div>
    </div>
  </div>

      <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I5.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5 text-black">No Way Up</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">90m</p>
          <p class="text-gray-500 font-bold border border-gray-500 p-2 rounded ml-28">Movie</p>
        </div>
        <div class="mt-4 space-x-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded mb-2">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded mb-2">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I6.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5 text-black">The Abyss</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">104m</p>
          <p class="text-gray-500 font-bold border border-gray-500 p-2 rounded ml-28">Movie</p>
        </div>
        <div class="mt-4 space-x-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded mb-2">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded mb-2">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I7.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5 text-black">Aquaman And The lost Kingdom</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">124m</p>
          <p class="text-gray-500 font-bold border border-gray-500 p-2 rounded ml-28">Movie</p>
        </div>
        <div class="mt-4 space-x-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded mb-2">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded mb-2">Find Video Like This</button>
        </div>
    </div>
    <div class="p-4 hover:transform hover:scale-105 hover:transition-transform relative bg-white rounded">
      <video poster="../src/assets/I8.jpg" class="w-full" >
      </video>
      <h2 class="font-semibold mt-5 text-black">Lights Out</h2>
      <div class="flex">
          <p class="text-gray-500 font-bold">2024</p>
          <p class="text-gray-500 font-bold ml-5">90m</p>
          <p class="text-gray-500 font-bold border border-gray-500 p-2 rounded ml-28">Movie</p>
        </div>
        <div class="mt-4 space-x-2">
            <button class="bg-blue-500 text-white px-4 py-2 rounded mb-2 ml-2">Preview</button>
            <button class="bg-green-500 text-white px-4 py-2 rounded mb-2">Add to Playlist</button>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded mb-2">Gift</button>
            <button class="bg-gray-500 text-white px-4 py-2 rounded mb-2">Find Video Like This</button>
        </div>
    </div>
  </div>
</div>
</main>
</div>

  </template>
  
  <script>
  export default {
    name: 'VideoDetailsPage'
  };
  </script>
  