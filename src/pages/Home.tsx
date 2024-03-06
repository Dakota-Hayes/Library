import Background from '../assets/images/Home-BG.jpg'

function Home() {
    return (
      <div style={{backgroundImage : `url(${Background})`}} className=' flex flex-row justify-center mx-auto bg-cover bg-fixed'>
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 text-white rounded'>Booksgiving</h3>
        </div>
      </div>
    )
  }
  
  export default Home