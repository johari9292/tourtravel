import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { experiences } from '@/data/experiences'

interface DiscoverExperiencesPageProps {
  experiences: typeof experiences
}

const DiscoverExperiencesPage: NextPage<DiscoverExperiencesPageProps> = ({ experiences }) => {
  return (
    <>
      <Head>
        <title>Discover Experiences | Explore Skardu</title>
        <meta name="description" content="Discover unique and unforgettable experiences in Skardu, from trekking to cultural immersion." />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[50vh] w-full">
          <Image
            src="https://images.pexels.com/photos/3694708/pexels-photo-3694708.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Trekking in Skardu mountains"
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
              Discover Experiences
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

        {/* Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Unforgettable Experiences
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Immerse yourself in the diverse activities and cultural encounters that make a trip to Skardu truly special. From thrilling adventures to cultural experiences, discover what makes each activity unique.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {experiences.map((experience, index) => (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="relative h-64">
                    <Image
                      src={experience.image}
                      alt={experience.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {experience.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {experience.fullDescription}
                    </p>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Duration</h4>
                        <p className="text-gray-600">{experience.duration}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Difficulty Level</h4>
                        <p className="text-gray-600">{experience.difficulty}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {experience.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <Link
                      href={`/experiences/${experience.id}`}
                      className="inline-flex items-center mt-6 text-blue-600 hover:text-blue-700 font-medium"
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
      experiences,
    },
  }
}

export default DiscoverExperiencesPage 