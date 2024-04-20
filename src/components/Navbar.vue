<template>
    <nav class="bg-red-600 p-4 shadow-xl">
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <router-link to="/" class="text-white text-xl font-bold mr-4">EVC</router-link>
        </div>
        <div class="flex items-center">
          <router-link to="/VideoDiscoveryPage" class="text-white hover:text-gray-300 mx-4">Video Discovery</router-link>
          <router-link to="/MyLibrary" class="text-white hover:text-gray-300 mx-4">My Library</router-link>
          <router-link to="/VideoDetailsPage" class="text-white hover:text-gray-300 mx-4">VideoDetails</router-link>
          <router-link to="/SignUpPage" class="text-white hover:text-gray-300 mx-4">Sign Up</router-link>
          <router-link to="/DashBoard" class="text-white hover:text-gray-300 mx-4">Dashboard</router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar',
  }
  </script>