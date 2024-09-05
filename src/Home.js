import './Home.css';

function Home({children="babaganoosh", props=null}) {
  return (
    <div className='home'{...props}>
      <h1>  Welcome to my bad react page {children} </h1>
    </div>
  );
}

export default Home;
