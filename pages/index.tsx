import type { NextPage } from 'next'
import Profile from '../components/profile'
import ProjectPreview, {ProjectPreviewInterface} from '../components/project_preview'

const Home: NextPage = () => {

  const projectMetadataArray = []

  projectMetadataArray.push (
    {
      title: 'Data analysis app',
      desc: 'Process Data analysis app',
      linkUrl: '/data_analysis',
      image: '/1.jpg'
    }
  )

  projectMetadataArray.push (
    {
      title: 'Data analysis app',
      desc: 'Process Data analysis app',
      linkUrl: '/social_tracker',
      image: '/2.jpg'
    }
  )

  projectMetadataArray.push (
    {
      title: 'Data analysis app',
      desc: 'Process Data analysis app',
      linkUrl: '/sound_processing',
      image: '/3.jpg'
    }
  )

  const projectPreviewElements = [];
  // <ProjectPreview {...projectPreviewData} />

  for (let i = 0; i < projectMetadataArray.length; i++) {
    const metaData = projectMetadataArray[i];
    const element = <ProjectPreview {...metaData} key={i} />;
    projectPreviewElements.push(element)
  }

  return (
    <div>
      <Profile />
      <div className='mt-4 flex flex-col gap-4'>
        {projectPreviewElements}
      </div>
    </div>
  )
}

export default Home
