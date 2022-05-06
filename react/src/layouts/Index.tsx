import React from 'react';
import {useNavigate} from 'react-router-dom';

import T from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {styled} from "@mui/material/styles";

import Layout from '../com/Container';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import {Context} from '../lib/Toolbox';

import config from '../config';
import {database} from '../database.js';

interface CardProps{
  title:string,
  category:string,
  media:string,
  byline:string,
  url:string,
  small?:boolean|undefined
}

export function Card(props:CardProps) {

  const instance = React.useContext(Context);
  const navigate = useNavigate();

  const small = typeof props.small == 'undefined' ? false : true;

  const fontSizeM = small ? '18px' : '28px';
  const fontSizeL = small ? '21px' : '31px';

  const Container = styled('div')({
    padding: 0,

    '@media (min-width: 600px)': {
      padding: '8px'
    }
  });

  const Category = styled('div')({
    margin: '8px 16px',
    fontFamily: 'roboto-medium',
    fontSize: '14px',
    color: '#007cda',
    textTransform: 'uppercase'
  });

  const Title = styled('div')({
    margin: '8px 16px',
    fontFamily: 'roboto-medium',
    fontSize: '18px',

    '@media (min-width: 600px)': {
      fontSize: fontSizeM
    },

    '@media (min-width: 1400px)': {
      fontSize: fontSizeL
    }

  });

  const Byline = styled('div')({
    margin: '8px 16px',
    fontFamily: 'roboto-medium',
    fontSize: '14px',
    color: '#ccccdd'
  });

  const getLink = (url:string) => {
    return () => {

      window.scrollTo(0,0);
      instance.intervalActive = false;
      clearInterval(instance.intervalId);
      instance.getController('Drawer').windowWidth = -1;
      navigate(config.PUBLIC_ROOT + url, {replace: true});
    };
  };

  return (
    <Container>
    <Button
      fullWidth
      onClick={getLink(props.url)}
      sx={{
        cursor: 'pointer',
        display: 'block',
        overflow: 'hidden',

        margin: 0,
        padding: 0,
        borderRadius: 0,
        backgroundColor: 'rgba(0, 7, 26, 0.92)',
        color: '#ffffff',
        textAlign: 'left',

        transition: '500ms',
        ':hover': {backgroundColor: '#004492'},

        '@media (min-width: 600px)': {
          borderRadius: '8px'
        }
    }}>

    <CardMedia component="img" image={config.PUBLIC_ROOT + props.media} />
    <Category>{props.category}</Category>
    <Title>{props.title}</Title>
    <Byline>{props.byline}</Byline>
    </Button>
    </Container>
  );
}

function RightColumn() {

  const Container = styled('div')({

    display: 'flex',
    flexDirection: 'column',

    '@media (min-width: 600px)': {
      flexDirection: 'row',
    },

    '@media (min-width: 1400px)': {
      flexDirection: 'column'
    }
  });

  const Column = styled('div')({
 
    width: '100%',

    '@media (min-width: 600px)': {
      width: '50%',
    },

    '@media (min-width: 1400px)': {
      width: '100%'
    } 
  });

  return (
    <Container>
      <Column>
        <Card
          title={database[1].title}
          category={database[1].category}
          media={database[1].media}
          byline={database[1].byline}
          url={database[1].url}
          small
        />
      </Column>
      <Column>
        <Card
          title={database[2].title}
          category={database[2].category}
          media={database[2].media}
          byline={database[2].byline}
          url={database[2].url}
          small
        />
      </Column>
    </Container>
  );
}

function BottomRow() {

  const Container = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 0,

    '@media (min-width: 600px)': {
      padding: '0 8px 8px 8px'
    }
  });

  const Column = styled('div')({

    width: '100%',

    '@media (min-width: 600px)': {
      width: '50%'
    },

    '@media (min-width: 1600px)': {
      width: '25%'
    }
  });

  return (
    <Container>
      <Column>
        <Card
          title={database[3].title}
          category={database[3].category}
          media={database[3].media}
          byline={database[3].byline}
          url={database[3].url}
          small
        />
      </Column>
      <Column>
        <Card
          title={database[4].title}
          category={database[4].category}
          media={database[4].media}
          byline={database[4].byline}
          url={database[4].url}
          small
        />
      </Column>
      <Column>
        <Card
          title={database[5].title}
          category={database[5].category}
          media={database[5].media}
          byline={database[5].byline}
          url={database[5].url}
          small
        />
      </Column>
      <Column>
        <Card
          title={database[6].title}
          category={database[6].category}
          media={database[6].media}
          byline={database[6].byline}
          url={database[6].url}
          small
        />
      </Column>
    </Container>
  );
}

export default function Index() {

  const Container = styled('div')({

    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',

    '@media (min-width: 600px)': {
      padding: '8px 8px 0 8px',
    },

    '@media (min-width: 1400px)': {
      flexDirection: 'row'
    }
  });

  const LColumn = styled('div')({

    width: '100%',

    '@media (min-width: 1400px)': {
      width: '75%'
    } 
  });

  const RColumn = styled('div')({

    width: '100%',

    '@media (min-width: 1400px)': {
      width: '25%'
    }   
  });

  return (
    <Layout>
      <Container>
        <LColumn>
          <Card
            title={database[0].title}
            category={database[0].category}
            media={database[0].media}
            byline={database[0].byline}
            url={database[0].url}
          />
        </LColumn>
        <RColumn>
          <RightColumn />
        </RColumn>
      </Container>
      <BottomRow />
    </Layout>
  );
}
