// @flow
import * as React from 'react';
import {
  Footer,
  FooterGrid,
  Masthead,
  Support,
  Apps,
  Safety,
  SocialLinks,
} from '../style';
import { Link } from 'react-router-dom';
import Icon from 'src/components/icon';
import { Logo } from 'src/components/logo';
import { track, events } from 'src/helpers/analytics';

export default () => {
  return (
    <Footer>
      <FooterGrid>
        <Masthead>
          <Link to="/">
            <Logo />
          </Link>
          <SocialLinks>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon glyph="github" hoverColor={'text.reverse'} />
            </a>
            <a
              href="https://twitter.com/kampuschat"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon glyph="twitter" hoverColor={'text.reverse'} />
            </a>
          </SocialLinks>
        </Masthead>
        <Apps>
          <span>Apps</span>
          <Link to={`/apps`}>Mac</Link>
        </Apps>
        <Support>
          <span>Support</span>
          <Link to={`/kampus`}>Community</Link>
          <Link to={`/kampus/hugs-n-bugs`}>Bug reports</Link>
          <Link to={`/kampus/feature-requests`}>Feature requests</Link>
          <a href="mailto:hi@kampus.chat">Email support</a>
        </Support>
        <Safety>
          <span>Safety</span>
          <a
            href="https://kampus.chat/code-of-conduct"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              track(events.CODE_OF_CONDUCT_CLICKED, {
                location: 'splash page footer',
              })
            }
          >
            Code of Conduct
          </a>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </Safety>
      </FooterGrid>
    </Footer>
  );
};
