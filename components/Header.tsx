const Header = () => (
  <div className='header responsive-width-header'>
    <h1 className='header__main'>Welcome to Edson&apos;s MLB Hit Helper!</h1>
    <p className='header__sub'>
      This web application was built to simplify my process of finding the best current batters for
      2 to 3 bet parlays for hits.
    </p>
    <div className='header__links'>
      <a className='header__link' href='https://github.com'>
        View Repo
      </a>
      <a className='header__link' href='https://paypal.com'>
        Donate
      </a>
    </div>
  </div>
);

export default Header;
