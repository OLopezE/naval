import { GalleryLayout } from './Gallery.style.jsx';

const fileUrl = '/media/files/catalogue-2024.pdf';

const Gallery = () => {
  return (
    <GalleryLayout>
      <iframe
        src={fileUrl}
        // style={{ border: 'none' }}
        title="PDF Viewer"
      />
    </GalleryLayout>
  )
}

export default Gallery;
