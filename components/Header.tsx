import { dateFormatter } from "@/lib/dateFormatter";

interface HeaderProps {
  publishedAt: string;
}

const Header = ({publishedAt}:HeaderProps) => (
  <div className='header responsive-width-header'>
    <h1 className='header__main'>Welcome to Edson&apos;s MLB Hit Helper!</h1>
    <p className='header__sub'>
      This web application was built to simplify my process of finding the best current batters for
      2 to 3 bet parlays for hits.
    </p>
    <span>{`Stats gathered on  ${dateFormatter(publishedAt)} CT `}</span>
    <div className='header__links'>
      <ExternalLink
        href='https://github.com/edsonjaramillo/mlb_hit_helper'
        text='View Repo'
        apperanceClass='header--github'
      />
      <ExternalLink
        href={`https://venmo.com/code?user_id=2570444435619840115&created=1651967382.92727&printed=1`}
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
