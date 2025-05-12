import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, X } from 'lucide-react'
import { useState } from 'react'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.pexels.com/photos/3694708/pexels-photo-3694708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Mountain trekking in Skardu',
    category: 'Adventure'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/17723988/pexels-photo-17723988/free-photo-of-a-tent-set-up-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Camping under the stars',
    category: 'Nature'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Crystal clear lake',
    category: 'Landscape'
  },
  {
    id: 4,
    src: 'https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Mountain sunset',
    category: 'Nature'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/3694708/pexels-photo-3694708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Valley view',
    category: 'Landscape'
  },
  {
    id: 6,
    src: 'https://images.pexels.com/photos/17723988/pexels-photo-17723988/free-photo-of-a-tent-set-up-in-the-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Mountain stream',
    category: 'Nature'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/6271625/pexels-photo-6271625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Mountain peak',
    category: 'Adventure'
  },
  {
    id: 8,
    src: 'https://images.pexels.com/photos/3265460/pexels-photo-3265460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Wildlife in Skardu',
    category: 'Nature'
  },
  {
    id: 9,
    src: 'https://images.pexels.com/photos/3694708/pexels-photo-3694708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    alt: 'Cultural festival',
    category: 'Culture'
  }
]

const categories = ['All', 'Adventure', 'Nature', 'Landscape', 'Culture']

interface GalleryPageProps {
  images: typeof galleryImages
}

const GalleryPage: NextPage<GalleryPageProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(image => image.category === selectedCategory)

  return (
    <>
      <Head>
        <title>Gallery | UpwayTravels</title>
        <meta name="description" content="Explore the breathtaking beauty of Skardu through our curated collection of stunning photographs with UpwayTravels." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[40vh] w-full">
          <Image
            src="https://images.pexels.com/photos/3694708/pexels-photo-3694708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Skardu landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white text-center"
            >
              Gallery
            </motion.h1>
          </div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Category Filter */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-green-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative h-80 rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{image.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <div className="relative h-[80vh] rounded-lg overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white text-lg font-medium">{selectedImage.alt}</p>
                <p className="text-gray-300">{selectedImage.category}</p>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      images: galleryImages,
    },
  }
}

export default GalleryPage 