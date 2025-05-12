import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { experiences } from '@/data/experiences'

interface ExperiencePageProps {
  experience: {
    id: string
    title: string
    description: string
    image: string
    alt: string
    fullDescription: string
    duration: string
    difficulty: string
    requirements: string[]
    whatToBring: string[]
    tips: string[]
  }
}

const ExperiencePage: NextPage<ExperiencePageProps> = ({ experience }) => {
  return (
    <>
      <Head>
        <title>{experience.title} | Discover Skardu</title>
        <meta name="description" content={experience.description} />
      </Head>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          <Image
            src={experience.image}
            alt={experience.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
              {experience.title}
            </h1>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Link 
            href="/#experiences"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Experiences
          </Link>
          <Link 
            href="/discover-experiences"
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
                {experience.fullDescription}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Duration
                  </h2>
                  <p className="text-gray-600">
                    {experience.duration}
                  </p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Difficulty Level
                  </h2>
                  <p className="text-gray-600">
                    {experience.difficulty}
                  </p>
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Requirements
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-8">
                {experience.requirements.map((req, index) => (
                  <li key={index} className="text-gray-600">
                    {req}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                What to Bring
              </h2>
              <ul className="list-disc list-inside space-y-2 mb-8">
                {experience.whatToBring.map((item, index) => (
                  <li key={index} className="text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Tips
              </h2>
              <ul className="list-disc list-inside space-y-2">
                {experience.tips.map((tip, index) => (
                  <li key={index} className="text-gray-600">
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const experience = experiences.find(e => e.id === params?.id)

  if (!experience) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      experience,
    },
  }
}

export default ExperiencePage 