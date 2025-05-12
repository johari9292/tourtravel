import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { destinations } from '@/data/destinations'

interface DestinationPageProps {
  destination: {
    id: string
    name: string
    description: string
    image: string
    alt: string
    fullDescription: string
    highlights: string[]
    bestTimeToVisit: string
    howToReach: string
  }
}

const DestinationPage: NextPage<DestinationPageProps> = ({ destination }) => {
  return (
    <>
      <Head>
        <title>{destination.name} | Discover Skardu</title>
        <meta name="description" content={destination.description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <Image
            src={destination.image}
            alt={destination.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              {destination.name}
            </h1>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link 
            href="/#destinations"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Destinations
          </Link>
          <Link 
            href="/discover"
            className="inline-flex items-center px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Discover More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg">
              <p className="text-xl text-gray-600 mb-8">
                {destination.fullDescription}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Highlights
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-8">
                {destination.highlights.map((highlight, index) => (
                  <li key={index} className="text-gray-600">
                    {highlight}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Best Time to Visit
              </h2>
              <p className="text-gray-600 mb-8">
                {destination.bestTimeToVisit}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                How to Reach
              </h2>
              <p className="text-gray-600">
                {destination.howToReach}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const destination = destinations.find(d => d.id === params?.id)

  if (!destination) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      destination,
    },
  }
}

export default DestinationPage 