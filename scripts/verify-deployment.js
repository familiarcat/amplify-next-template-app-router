import { Amplify } from 'aws-amplify';

async function verifyDeployment() {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
    if (!response.ok) {
      throw new Error(`API endpoint not responding: ${response.status}`);
    }
    console.log('✅ Deployment verification successful');
    process.exit(0);
  } catch (error) {
    console.error('❌ Deployment verification failed:', error);
    process.exit(1);
  }
}

verifyDeployment();