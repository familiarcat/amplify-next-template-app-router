import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REQUIRED_IMAGES = [
  'profile.jpg',
  'testimonial.webp',
  'header-background.webp',
  'portfolio/portfolio-1.jpg',
  'portfolio/portfolio-2.jpg',
  'portfolio/portfolio-3.jpg',
  'portfolio/portfolio-4.jpg',
  'portfolio/portfolio-5.jpg',
  'portfolio/portfolio-6.jpg',
  'portfolio/portfolio-7.jpg',
  'portfolio/portfolio-8.jpg',
  'portfolio/portfolio-9.jpg',
  'portfolio/portfolio-10.jpg'
];

async function listDirectoryContents(dir) {
  try {
    const items = await fs.readdir(dir, { withFileTypes: true });
    console.log(`\nContents of ${dir}:`);
    for (const item of items) {
      const stats = await fs.stat(path.join(dir, item.name));
      console.log(`  ${item.isDirectory() ? '📁' : '📄'} ${item.name} (${stats.size} bytes)`);
      if (item.isDirectory()) {
        await listDirectoryContents(path.join(dir, item.name));
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }
}

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
}

async function verifyRequiredImages(sourceDir) {
  const missing = [];
  
  for (const imagePath of REQUIRED_IMAGES) {
    const fullPath = path.join(sourceDir, imagePath);
    try {
      await fs.access(fullPath);
      console.log(`✅ Found: ${fullPath}`);
    } catch {
      console.log(`❌ Missing: ${fullPath}`);
      missing.push(imagePath);
    }
  }
  
  if (missing.length > 0) {
    console.error('\n❌ Missing required images:');
    missing.forEach(img => console.error(`   - ${img}`));
    console.error('\nPlease add these images to the src/images directory.');
    return false;
  }
  return true;
}

async function copyDirectory(src, dest) {
  await ensureDirectoryExists(dest);

  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDirectory(srcPath, destPath);
    } else {
      const destDir = path.dirname(destPath);
      await ensureDirectoryExists(destDir);
      await fs.copyFile(srcPath, destPath);
      console.log(`Copied: ${path.relative(src, srcPath)}`);
    }
  }
}

async function createPlaceholderImages(sourceDir) {
  console.log('\n📝 Creating placeholder images...');
  
  for (const imagePath of REQUIRED_IMAGES) {
    const fullPath = path.join(sourceDir, imagePath);
    const directory = path.dirname(fullPath);
    
    // Create directory if it doesn't exist
    await ensureDirectoryExists(directory);
    
    // Create placeholder image if it doesn't exist
    try {
      await fs.access(fullPath);
      console.log(`✓ Image already exists: ${imagePath}`);
    } catch {
      // Create a minimal JPG or WebP file
      const isWebP = imagePath.endsWith('.webp');
      const placeholderContent = Buffer.from(isWebP ? 
        'RIFF\x00\x00\x00\x00WEBPVP8 ' : 
        '\xFF\xD8\xFF\xE0\x00\x10JFIF\x00\x01\x01\x00\x00\x01\x00\x01\x00\x00\xFF\xD9');
      
      await fs.writeFile(fullPath, placeholderContent);
      console.log(`✓ Created placeholder: ${imagePath}`);
    }
  }
}

async function main() {
  const rootDir = path.join(__dirname, '..');
  const sourceDir = path.join(rootDir, 'images'); // Updated path
  const destDir = path.join(rootDir, 'public', 'images');

  console.log('\n📂 Source directory:', sourceDir);
  console.log('📂 Destination directory:', destDir);
  
  // Ensure source directory exists
  await ensureDirectoryExists(sourceDir);
  
  // Create placeholder images if needed
  await createPlaceholderImages(sourceDir);
  
  console.log('\n📋 Listing source directory contents:');
  await listDirectoryContents(sourceDir);

  console.log('\n🔍 Verifying required images...');
  const verified = await verifyRequiredImages(sourceDir);
  
  if (!verified) {
    process.exit(1);
  }

  console.log('\n📁 Copying images...');
  try {
    // Clean the public images directory first
    try {
      await fs.rm(destDir, { recursive: true, force: true });
    } catch {}

    await ensureDirectoryExists(destDir);
    await copyDirectory(sourceDir, destDir);
    
    console.log('\n✅ Images copied successfully!');
  } catch (error) {
    console.error('\n❌ Failed to copy images:', error);
    process.exit(1);
  }
}

main().catch(console.error);
