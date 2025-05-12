import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { destinations } from '@/data/destinations'

interface DiscoverPageProps {
  destinations: typeof destinations
}

const DiscoverPage: NextPage<DiscoverPageProps> = ({ destinations }) => {
  return (
    <>
      <Head>
        <title>Discover More | UpwayTravels</title>
        <meta name="description" content="Discover more about the hidden gems and unique experiences that UpwayTravels has to offer." />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <Image
            src="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Panoramic view of Skardu mountains"
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
              className="text-4xl md:text-6xl font-bold text-white text-center px-4"
            >
              Discover More
            </motion.h1>
          </div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 py-8">
          <Link 
            href="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Hidden Gems of Skardu
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Explore the lesser-known treasures and unique experiences that make Skardu a truly special destination. From ancient forts to pristine lakes, discover the stories behind these remarkable places.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-72">
                    <Image
                      src={destination.image}
                      alt={destination.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {destination.name}
                    </h3>
                    <p className="text-gray-600 mb-8">
                      {destination.fullDescription}
                    </p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Highlights</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-2">
                          {destination.highlights?.map((highlight, i) => (
                            <li key={i}>{highlight}</li>
                          )) || (
                            <li>No highlights available</li>
                          )}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Best Time to Visit</h4>
                        <p className="text-gray-600">{destination.bestTimeToVisit}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">How to Reach</h4>
                        <p className="text-gray-600">{destination.howToReach}</p>
                      </div>
                      {destination.activities && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Activities</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {destination.activities.map((activity, i) => (
                              <li key={i}>{activity}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {destination.tips && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Tips</h4>
                          <ul className="list-disc list-inside text-gray-600 space-y-2">
                            {destination.tips.map((tip, i) => (
                              <li key={i}>{tip}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                    <Link
                      href={`/destinations/${destination.id}`}
                      className="inline-flex items-center mt-8 text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      destinations,
    },
  }
}

export default DiscoverPage 