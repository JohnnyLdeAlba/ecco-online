import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import {styled} from "@mui/material/styles";

import Layout from '../com/Container';
import {PathItem, Card} from '../com/Card';

import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import config from '../config';

interface DocumentProps {
  icon?:React.ReactNode|undefined,
  path?:React.ReactNode|undefined,
  media?:string|undefined,
  title?:string|undefined,
  category?:string|undefined,
  headline?:string|undefined,
  byline?:string|undefined,
  tldr?:string|undefined,
  children?:React.ReactNode
}

export function Panel(props:DocumentProps) {

  const media = typeof props.media == 'undefined' ? "" : props.media;

  const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,

    '@media (min-width: 600px)': {
      padding: '16px'
    },

    '@media (min-width: 1000px)': {
      padding: '50px'
    }
  });

  if (media == "") {
    return (
      <Layout>
        <Container>
          <Card
            icon={props.icon}
            title={props.title}
            path={props.path}
          >
            {props.children}
          </Card>
        </Container>
      </Layout>
    );
  }
  else {
    return (
      <Layout>
        <Container>
          <Card
            icon={props.icon}
            title={props.title}
            path={props.path}
          >
            <CardMedia component="img" image={config.PUBLIC_ROOT + media} />
            {props.children}
          </Card>
        </Container>
      </Layout>
    );
  }
}

export default function Document(props:DocumentProps) {

  const media = typeof props.media == 'undefined' ? "" : props.media;
  const category = typeof props.category == 'undefined' ? "" : props.category;
  const headline = typeof props.headline == 'undefined' ? "" : props.headline;
  const byline = typeof props.byline == 'undefined' ? "" : props.byline;
  const tldr = typeof props.tldr == 'undefined' ? "" : props.tldr;

  const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    padding: 0,

    '@media (min-width: 600px)': {
      padding: '16px'
    },

    '@media (min-width: 1000px)': {
      padding: '50px'
    }
  });

  const Category = styled('div')({
    margin: '16px',
    fontFamily: 'roboto-medium',
    fontSize: '18px',
    color: '#007cda',
    textTransform: 'uppercase'
  });

  const Headline = styled('div')({
    margin: '16px',
    fontFamily: 'roboto-medium',
    fontSize: '31px'
  });

  const Byline = styled('div')({
    margin: '16px',
    fontFamily: 'roboto-medium',
    fontSize: '14px',
    textTransform: 'uppercase'
  });

  const TLDR = styled('div')({
    margin: '16px',
    fontSize: '18px',
    fontStyle: 'italic',
    color: '#ccccdd'
  });

  return (
    <Layout>
      <Container>
        <Card
          icon={props.icon}
          title={props.title}
          path={props.path}
        >
          <CardMedia component="img" image={config.PUBLIC_ROOT + media} />
          <Category>{category}</Category>
          <Headline>{headline}</Headline>
          <Byline>{byline}</Byline>
          <TLDR>{tldr}</TLDR>
          {props.children}
        </Card>
      </Container>
    </Layout>
  );
}

