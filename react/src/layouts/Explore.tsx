import React from 'react';
import {
  useNavigate
} from 'react-router-dom';


import {styled} from "@mui/material/styles";
import Box from '@mui/material/Box';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
 

import {Panel} from '../com/Document';
import {DolphinIcon, PathItem} from '../com/Card';
import {Card} from '../layouts/Index';

import {Context, H2, P, Red, Yellow, Media, Image, Collage, t_instance} from '../lib/Toolbox';
import config from '../config';
import {database} from '../database.js';

interface LinkProps {
  url:string,
  className?:string|undefined,
  children:React.ReactNode
}

function LLink(props:LinkProps) {

  const instance = React.useContext(Context);
  const navigate = useNavigate();

  const onClick = (event:React.SyntheticEvent) => {

    window.scrollTo(0,0);

    instance.intervalActive = false;
    clearInterval(instance.intervalId);

    instance.controllers['Drawer'].windowWidth = -1;
    navigate(config.PUBLIC_ROOT + props.url, {replace: true});

    event.preventDefault();
  };

  return (
    <a
      className={props.className}
      href={config.PUBLIC_ROOT + props.url}
      onClick={onClick}>
      {props.children}
    </a>
  );
}

function getCategoryList(category:string) {

  const Column = styled('div')({
    width: '100%',

    '@media (min-width: 600px)': {
      width: '50%'
    },

    '@media (min-width: 1400px)': {
      width: '25%'
    }

  });

  let list = new Array();
  let index = 0, counter = 0;

  for (index = 0; index < database.length; index++) {
    if (category == database[index].category) {
      list[counter] = (
        <Column>
          <Card
            title={database[index].title}
            category={database[index].category}
            media={database[index].media}
            byline={database[index].byline}
            url={database[index].url}
            small
          />
        </Column>
      )
      counter++;
    }
  }

  return list;
} 

export default function Explore() {

  const Category = styled(H2)({
    color: '#007cda',
    border: '1px solid #007cda',
    borderWidth: '0 0 1px 0',
    paddingBottom: '8px'
  });

  const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: '8px'
  });

  const Path = <>
    <PathItem>/</PathItem>
    <PathItem>Explore</PathItem>
  </>;

  const Link = styled(LLink)({
    cursor: 'pointer',
    ':link': {color: '#ffffff', textDecoration: 'none'},
    ':visited': {color: '#ffffff', textDecoration: 'none'},
    ':active': {color: '#ffffff', textDecoration: 'none'},
    ':hover': {color: '#ffffff', textDecoration: 'none'}
  });

  return (
    <Panel
      icon={<DolphinIcon />}
      title="Explore"
      path={Path}
    >
      <Category>News</Category>
      <Container>
      {getCategoryList("News")}
      </Container>

      <Category>Hacking</Category>
      <Container>
      {getCategoryList("Hacking")}
      </Container>

      <Category>Prototypes</Category>
      <Container>
      {getCategoryList("Prototypes")}
      </Container>

      <Category>Community Spotlight</Category>
      <Container>
      {getCategoryList("Community Spotlight")}
      </Container>

    </Panel>
  );
}
