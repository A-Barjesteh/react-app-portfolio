import './Navigation.css';

function wiggle(e) {
  console.log(e)
}

function Navigation() {
  return (
    <div className='navigation'>
      <h1 onClick={wiggle}> Andre Barjesteh </h1>
      <a href="www.linkedin.com/in/andrebarjesteh">LinkedIn</a>
      <a href="https://github.com/A-Barjesteh"> Github </a>
    </div>
  );
}

export default Navigation;
