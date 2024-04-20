<template>
  <div class="bg-red-600 text-gray-300 py-4">
    <div class="container mx-auto flex justify-between items-center">
      <p>&copy; 2024 E-Video Cloud. All rights reserved.</p>
      <nav>
        <ul class="flex space-x-4">
          <li><router-link to="/privacy-policy" class="hover:text-gray-400">Privacy Policy</router-link></li>
          <li><router-link to="/terms-of-service" class="hover:text-gray-400">Terms of Service</router-link></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>
