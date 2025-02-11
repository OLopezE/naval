import { GalleryLayout } from './Gallery.style.jsx';
import { Document } from 'react-pdf'

const fileUrl = '/media/files/catalogue-2024.pdf';

const Gallery = () => {
  return (
    <GalleryLayout>
      <iframe
        src={fileUrl}
        width="100%"
        height="100%"
        // style={{ border: 'none' }}
        title="PDF Viewer"
      ></iframe>
    </GalleryLayout>
  )
}

export default Gallery;
