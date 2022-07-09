import '@/components/product-form';

if (window.enableShare) {
  import('@/components/share');
}

if (window.mediaCount) {
  import('@/components/product-modal');
  import('@/components/media-gallery');
}

if (window.first3dModelId) {
  import('@/components/product-model');
}
