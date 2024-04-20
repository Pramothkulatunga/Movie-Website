<template>
  <div :class="{ 'bg-gray-900 text-white': darkMode }" class="px-4 py-8">
    <h1 class="text-2xl font-semibold mb-4 ml-8">Dashboard</h1>
    <div class="flex flex-wrap justify-between">
      <div class="w-full sm:w-auto mb-8 ml-8">
        <h2 class="text-xl font-semibold mb-2">Upload Your Work</h2>
        <input type="file" @change="handleFileUpload" class="mb-2">
        <img v-if="filePreview" :src="filePreview" alt="File Preview" class="w-40 h-50 mb-2">
        <div class="w-full sm:w-auto mb-8">
        <h2 class="text-xl font-semibold mb-2">Publish/Unpublish Your Work</h2>
        <div class="flex">
          <button @click="publishVideo" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Publish Video</button>
          <button @click="unpublishVideo" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">Unpublish Video</button>
        </div>
      </div>
      </div>
      
      <div class="w-full sm:w-auto mb-8">
        <h2 class="text-xl font-semibold mb-2">Monitor Distribution</h2>
        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-black">Distribution Overview</h3>
            <p class="mt-1 max-w-2xl text-sm text-black">Here's a summary of your distribution statistics.</p>
          </div>
          <div class="border-t border-gray-200">
            <div class="px-4 py-5 sm:p-6">
              <div class="flex items-center">
                <div class="ml-1">
                  <h4 class="text-lg font-bold leading-6 text-gray-900 mr-10">Overrall Views</h4>
                  <p class="mt-2 text-lg font-bold text-green-500">6513</p>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-semibold leading-6 text-gray-900">Last Video Views</h4>
                  <p class="mt-2 text-lg font-bold text-red-500">3280</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mr-20">
        <h2 class="text-xl font-semibold mb-2">Account Balance</h2>
        <p class="font-semibold mb-4">Your current account balance is: ${{ accountBalance }}</p>
        <button @click="withdrawBalance" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Withdraw Balance</button>
      </div>
      
      <div class="ml-8">
        <h1 class="text-2xl font-semibold mb-4">Settings</h1>
        
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-2">Visual Appearance</h2>
          <div>
            <label class="block mb-2">
              Dark Mode
              <input type="checkbox" v-model="darkMode" class="ml-2">
            </label>
          </div>
        </div>
        
        <div class="mb-8">
          <h2 class="text-xl font-semibold mb-2">Language Settings</h2>
          <div>
            <select v-model="selectedLanguage" class="block w-50 p-2 border border-gray-300 text-black rounded-md">
              <option value="en">English</option>
              <option value="fr">Sinhala</option>
              <option value="es">Tamil</option>
            </select>
          </div>
        </div>
        
<div class="mb-8">
  <h2 class="text-xl font-semibold mb-2">Payment Options</h2>
  <div>
    <p class="text-white">Select your preferred payment method:</p>
    <div class="mt-2">
      <label class="inline-flex items-center">
        <input type="radio" class="form-radio text-blue-500" name="paymentMethod" value="creditCard" v-model="selectedPaymentMethod">
        <span class="ml-2">Credit Card</span>
        <img src="../src/assets/c1.png" alt="Credit Card Icon" class="w-6 h-6 ml-2">
      </label>
      <label class="inline-flex items-center ml-6">
        <input type="radio" class="form-radio text-blue-500" name="paymentMethod" value="paypal" v-model="selectedPaymentMethod">
        <span class="ml-2">PayPal</span>
        <img src="../src/assets/p1.png" alt="PayPal Icon" class="w-6 h-6 ml-2">
      </label>
      <label class="inline-flex items-center ml-6">
        <input type="radio" class="form-radio text-blue-500" name="paymentMethod" value="debitCard" v-model="selectedPaymentMethod">
        <span class="ml-2">Debit Card</span>
        <img src="../src/assets/p3.png" alt="PayPal Icon" class="w-6 h-6 ml-2">
      </label>
    </div>
  </div>
</div>

<div class="mb-8">
  <h2 class="text-xl font-semibold mb-2">Your Cart</h2>
  <div class="flex flex-wrap">
    <img src="../src/assets/m4.jpg" alt="Product 1" class="w-24 h-24 mr-2 mb-2 rounded">
    <img src="../src/assets/m8.jpg" alt="Product 2" class="w-24 h-24 mr-2 mb-2 rounded">
    <img src="../src/assets/m6.jpg" alt="Product 3" class="w-24 h-24 mr-2 mb-2 rounded">
  </div>
  <button class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded mt-2">View Cart</button>
</div>


        <div>
          <h2 class="text-xl font-semibold mb-2">Manage Connected Devices</h2>
          <div>
            <p class="text-white">Here you can manage the devices connected to your account:</p>
            <div class="flex items-center mt-4">
              <div class="mr-4">
                <label for="connectedDevices" class="block text-sm font-medium text-white">Connected Devices:</label>
                <select id="connectedDevices" v-model="selectedDevice" class="mt-1 block w-full p-2 border border-gray-300 text-black rounded-md">
                  <option v-for="device in connectedDevices" :key="device.id" :value="device.id">{{ device.name }}</option>
                </select>
              </div>
              <div class="mt-8">
                <button @click="connectedDevices" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">View Devices</button>
                <button @click="addDevice" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2">Add Device</button>
                <button @click="removeDevice" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Remove Device</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'DashboardPage',
  data() {
    return {
      accountBalance: 1000,
      filePreview: null,
      darkMode: false,
      selectedLanguage: 'en',
      connectedDevices: [
        { id: 1, name: 'iPhone' },
        { id: 2, name: 'Samsung' },
        { id: 3, name: 'Xiaomi' }
      ],
      selectedDevice: null
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = () => {
          this.filePreview = reader.result;
        };
        reader.readAsDataURL(file);
      } else {
        this.filePreview = null;
      }
    },
    toggleDarkMode() {
      this.darkMode = !this.darkMode;
    },
    publishVideo() {
      console.log('Video published');
    },
    unpublishVideo() {
      console.log('Video unpublished');
    },
    withdrawBalance() {
      console.log('Balance withdrawn');
      this.accountBalance = 0;
    }
  }
};
</script>