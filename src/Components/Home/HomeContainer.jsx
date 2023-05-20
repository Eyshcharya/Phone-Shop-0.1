import Items from './Items';
import homeItems from '../../homeItems';

const HomeContainer = () => {
  return (
    <>
      <section className='home'>
        <header className='home-head'>
          <h2>Welcome to phone shop</h2>
          <h4>Happy Shopping!</h4>
        </header>
        <div className='home-grid'>
          {homeItems.map((item) => {
            return <Items key={item.id} {...item} />;
          })}
        </div>
      </section>
      <footer className='home-footer'>
        <hr />
        <p> Follow Us &copy; Phone Shop </p>
        <div className='footer-container'>
          <div></div>
          <img src='/icons/facebook.png' alt='facebook' />
          <img src='/icons/instagram.png' alt='instagram' />
          <img src='/icons/twitter.png' alt='twitter' />
          <div></div>
        </div>
      </footer>
    </>
  );
};
export default HomeContainer;
