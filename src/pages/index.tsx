import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Hero from '@/components/Hero'
import Destinations from '@/components/Destinations'
import Experiences from '@/components/Experiences'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'

interface HomeProps {
  initialData: {
    title: string
    description: string
  }
}

const Home: NextPage<HomeProps> = ({ initialData }) => {
  return (
    <>
      <Head>
        <title>{initialData.title}</title>
        <meta name="description" content={initialData.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="space-y-20">
        <Hero />
        <Destinations />
        <Experiences />
        <Gallery />
        <Contact />
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  // This is where you would typically fetch data from your API or database
  const initialData = {
    title: 'UpwayTravels - Where Mountains Touch the Sky',
    description: 'Experience the breathtaking beauty of Skardu, where majestic mountains meet crystal clear lakes with UpwayTravels.',
  }

  return {
    props: {
      initialData,
    },
  }
}

export default Home 