import React, { Fragment, useContext } from 'react';
import '../styles/Header.css'
import { Image, Container, Row, Col } from 'react-bootstrap'
import { UserContext } from '../../context/UserContext';

export default function Header() {

  const { userData } = useContext(UserContext)
  const { display_name, external_urls, images } = userData

  const url = external_urls.spotify
  const imageSrc = images[0].url
  
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col>
            <span className='header-emojis' role='img' aria-label='emojis'>
              🤘🎧🎵
            </span>
          </Col>
          <Col>        
            <div className='user'>
              <p className='display-name'>{display_name}</p>              
              <a href={url} rel="noopener noreferrer" target='_blank'>
                <Image src={imageSrc} className='image' roundedCircle/>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>  
  )
}
