import { dateFormatter } from '@/lib/dateFormatter';

interface HeaderProps {
  publishedAt: string;
}

const Header = ({ publishedAt }: HeaderProps) => (
  <div className='header responsive-width-header'>
    <h1 className='header__main'>Welcome to Edson&apos;s MLB Hit Helper!</h1>
    <p className='header__sub'>
      This web application was built to simplify my process of finding the best current batters for
      2 to 3 bet parlays for hits. Only the teams that play today are shown.
    </p>
    <strong>{`Stats gathered on  ${dateFormatter(publishedAt)} CT `}</strong>
    <div className='header__links'>
      <ExternalLink
        href='https://github.com/edsonjaramillo/daily-at-bats-scraper'
        text='View Repo'
        apperanceClass='header--github'
      />
      <ExternalLink
        href='https://account.venmo.com/u/EdsonJaramillo'
        text='Donate'
        apperanceClass='header--venmo'
      />
    </div>
  </div>
);

interface ExternalLinkProps {
  href: string;
  apperanceClass: string;
  text: string;
}

const ExternalLink = ({ href, apperanceClass, text }: ExternalLinkProps) => (
  <a
    className={`header__link ${apperanceClass}`}
    rel='noopener nofollow noreferrer external'
    target='_blank'
    href={href}>
    {text}
  </a>
);

export default Header;
