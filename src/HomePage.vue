<template>
  <div class="bg-gray-900">
    <div class="relative">
      <div class="bg-red-700 w-full h-[500px]">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 class="text-8xl font-bold text-white">Welcome to EVC</h1>
        <p class="text-lg text-white font-bold mt-4">Explore the latest videos and discover new favorites</p>
        <div class="flex items-center justify-center mt-8">
            <input type="text" class="w-full h-16 rounded-full px-6 text-lg text-gray-800 placeholder-gray-500 border border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Search videos...">
            <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-4 mt-2 ml-2 rounded-full">
              <svg class="w-6 h-6 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </div>
      </div>
    </div>
  </div>

    <div class="mt-20 bg-gray-900">
      <section class="container mx-auto mb-10 mt-20">
        <h2 class="text-2xl font-semibold mb-4 text-blue-700">Featured Videos</h2>
        <p class="text-lg mb-8 text-white">Check out our curated selection of featured videos.</p>
      </section>
      <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/thumb 1.jpg" class="w-full">  
          </video>
        <div>
          <h2 class="font-semibold mt-5">Eminem - Not Afraid</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">4.19m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Music</p>
            </div>
          </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/thumb 2.jpg" class="w-full" >        
          </video>
          <h2 class="font-semibold mt-5">Selena Gomez - The Heart Wants</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">4:19m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Music</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/thumb 3.jpg" class="w-full" >   
          </video>
          <h2 class="font-semibold mt-5">Justin Bieber - Company</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">3:38m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Music</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/thumb 6.jpg" class="w-full" >   
          </video>
          <h2 class="font-semibold mt-5">Taylor Swift - You Belong With Me</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">75m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Music</p>
            </div>
        </div>
      </div>
      <section class="container mx-auto mb-10 mt-20">
        <h2 class="text-2xl font-semibold mb-4 text-blue-700">Trending Videos</h2>
        <p class="text-lg mb-8 text-white">Stay updated with the latest trends in the video world.</p>
      </section>
      <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m1.jpg" class="w-full" >        
          </video>
          <h2 class="font-semibold mt-5">Mean Girls</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">113m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Movie</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m2.jpg" class="w-full" >
          </video>
          <h2 class="font-semibold mt-5">Wonka</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2023</p>
              <p class="text-gray-500 font-bold ml-5">117m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Movie</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m3.jpg" class="w-full" >
          </video>
          <h2 class="font-semibold mt-5">The Marvels</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2023</p>
              <p class="text-gray-500 font-bold ml-5">105m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Movie</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m4.jpg" class="w-full" >
          </video>
          <h2 class="font-semibold mt-5">Madame Web</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">116m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Movie</p>
            </div>
        </div>
      </div>
      <section class="container mx-auto mb-10 mt-20">
        <h2 class="text-2xl font-semibold mb-4 text-blue-700">TV Shows & Series</h2>
        <p class="text-lg mb-8 text-white">Stay updated with the latest trends in the video world.</p>
      </section>
      <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m5.jpg" class="w-full" >        
          </video>
          <h2 class="font-semibold mt-5">Chicago P.D.</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2014</p>
              <p class="text-gray-500 font-bold ml-5">42m</p>
              <p class="text-gray-500 font-bold ml-40 border border-gray-500 p-2 rounded">Tv</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m6.jpg" class="w-full" >
          </video>
          <h2 class="font-semibold mt-5">Avatar: The Last Airbender</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">50m</p>
              <p class="text-gray-500 font-bold ml-40 border border-gray-500 p-2 rounded">Tv</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m7.jpg" class="w-full" >
          </video>
          <h2 class="font-semibold mt-5">Reacher</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2022</p>
              <p class="text-gray-500 font-bold ml-5">49m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Series</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m8.jpg" class="w-full" >
          </video>
          <h2 class="font-semibold mt-5">The Rookie</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">43m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Series</p>
            </div>
        </div>
      </div>
      <section class="container mx-auto py-10 mt-20">
        <h2 class="text-2xl font-semibold mb-4 text-blue-700">Coming Soon</h2>
        <p class="text-lg mb-8 text-white">Stay updated with the latest trends in the video world.</p>
      
      <div class="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-2">
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m9.jpg" class="w-full" >        
          </video>
          <h2 class="font-semibold mt-5">Project Icon: The UK Next Music Star</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">45m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Movie</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m10.jpg" class="w-full" >
          </video>
          <h2 class="font-semibold mt-5">The Horne Section TV Show</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">75m</p>
              <p class="text-gray-500 font-bold ml-40 border border-gray-500 p-2 rounded">Tv</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m11.jpg" class="w-full" >
          </video>
          <h2 class="font-semibold mt-5">Secret Society of Lies</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2024</p>
              <p class="text-gray-500 font-bold ml-5">88m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Series</p>
            </div>
        </div>
        <div class="bg-white p-4 hover:transform hover:scale-105 hover:transition-transform relative rounded">
          <div class="absolute top-0 right-0 bg-blue-700 text-white px-2 py-1 rounded-md">HD</div>
          <video poster="../src/assets/m12.jpg" class="w-full" >
          </video>
          <h2 class="font-semibold mt-5">Lost & Found Music Studios</h2>
          <div class="flex">
              <p class="text-gray-500 font-bold">2015</p>
              <p class="text-gray-500 font-bold ml-5">75m</p>
              <p class="text-gray-500 font-bold ml-32 border border-gray-500 p-2 rounded">Music</p>
            </div>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  methods: {
    playVideo(videoId) {
      document.getElementById(videoId).play();
    },
    pauseVideo(videoId) {
      document.getElementById(videoId).pause();
    }
  }
}
</script>