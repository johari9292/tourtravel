'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Destination } from '@/types'

interface DestinationCardProps {
  destination: Destination
  index: number
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="group relative h-80 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image 
          src={destination.image} 
          alt={destination.alt} 
          fill
          className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-80" />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <h3 className="text-xl font-bold mb-2">
          {destination.name}
        </h3>
        <p className="text-sm text-gray-200 mb-4 line-clamp-2">
          {destination.description}
        </p>
        <Link 
          href={`/destinations/${destination.id}`}
          className="inline-flex items-center text-blue-300 hover:text-blue-100 font-medium transition-colors"
        >
          Learn more
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

export default DestinationCard