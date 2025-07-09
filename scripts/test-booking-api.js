#!/usr/bin/env node

const testBookingAPI = async () => {
  const testPayload = {
    bungalowId: 'seaview-deluxe',
    checkIn: '2024-07-15',
    checkOut: '2024-07-20',
    guests: 2,
    customerInfo: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
    },
    specialRequests: 'Late check-in requested',
    totalAmount: 8000,
    currency: 'THB',
  };

  console.log('🧪 Testing Booking API...');
  console.log('📤 Sending payload:', JSON.stringify(testPayload, null, 2));

  try {
    const response = await fetch('http://localhost:3000/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testPayload),
    });

    console.log('📊 Response status:', response.status);
    console.log(
      '📊 Response headers:',
      Object.fromEntries(response.headers.entries())
    );

    const data = await response.json();
    console.log('📥 Response data:', JSON.stringify(data, null, 2));

    if (response.ok) {
      console.log('✅ Booking API test passed!');
    } else {
      console.log('❌ Booking API test failed!');
    }
  } catch (error) {
    console.error('❌ Error testing booking API:', error.message);
  }
};

// Test GET endpoint as well
const testGetEndpoint = async () => {
  console.log('\n🧪 Testing GET endpoint...');

  try {
    const response = await fetch('http://localhost:3000/api/bookings');
    const data = await response.json();
    console.log('📥 GET response:', JSON.stringify(data, null, 2));

    if (response.ok) {
      console.log('✅ GET endpoint test passed!');
    } else {
      console.log('❌ GET endpoint test failed!');
    }
  } catch (error) {
    console.error('❌ Error testing GET endpoint:', error.message);
  }
};

// Run tests
const runTests = async () => {
  console.log('🚀 Starting API tests...\n');
  await testBookingAPI();
  await testGetEndpoint();
  console.log('\n🏁 Tests completed!');
};

// Check if running directly
if (require.main === module) {
  runTests();
}

module.exports = { testBookingAPI, testGetEndpoint };
