import React from 'react';

import {styled} from "@mui/material/styles";
import Box from '@mui/material/Box';
import config from '../config';

interface ControllerArray {
  [key:string]:t_controller
}

export class t_controller {

  windowWidth:number;
  visible:boolean;
  show:Function;
  backdropVisible:boolean;
  showBackdrop:Function;
  thumbnail:string;
  filename:string;

  constructor() {
    this.windowWidth = 0;
    this.visible = false;
    this.show = (visible:Boolean) => {};
    this.backdropVisible = false;
    this.showBackdrop = (visible:Boolean) => {};
    this.thumbnail = "";
    this.filename = "";
  }
}

export class t_instance {

  intervalActive:boolean;
  intervalId:ReturnType<typeof setInterval>;
  controllers:ControllerArray;

  constructor() {

    this.intervalActive = false;

    this.intervalId = setInterval(() => {}, 0);
    clearInterval(this.intervalId);

    this.controllers = {};
  }

  addController(id:string, controller:t_controller) {
    this.controllers[id] = controller;
  }

  getController(id:string) {

    if (typeof this.controllers[id] == 'undefined') {
      const controller = new t_controller;
      this.addController(id, controller);
    }

    return this.controllers[id]; 
  }

  toggleDrawer() {

    if (typeof this.controllers['Drawer'] == 'undefined')
      return;

    this.controllers['Drawer'].visible = !this.controllers['Drawer'].visible;
    this.controllers['Drawer'].show(this.controllers['Drawer'].visible);

    if (this.controllers['Drawer'].visible == true)
      this.controllers['Drawer'].showBackdrop(true);
    else
      this.controllers['Drawer'].showBackdrop(false);
  }
}

export const Context = React.createContext(new t_instance);
export interface DefaultProps { children?:React.ReactNode }

export const H2 = styled('h2')({
  margin: '16px',
  padding: 0,
  fontSize: '24px'
});

export const H3 = styled('h2')({
  margin: '16px',
  padding: 0,
  fontSize: '21px'
});

export const Subheader = styled('h2')({
  margin: '16px',
  padding: 0,
  fontSize: '18px',
  fontWeight: 'bold',
  fontStyle: 'italic'
});

export const A = styled('a')({
  color: '#007cda', textDecoration: 'none',
  ':link': {color: '#007cda', textDecoration: 'none'},
  ':visited': {color: '#007cda', textDecoration: 'none'},
  ':active': {color: '#007cda', textDecoration: 'none'},
  ':hover': {color: '#007cda', textDecoration: 'none'}
});

function getDefault(
  value:string|number|undefined,
  defaultValue:string|number) {

  if (typeof value == 'undefined')
    return defaultValue;

  return value;
}

function getColor(color:string|undefined) {

  if (typeof color == 'undefined')
    return 'inherited';

  switch (color) {
    case 'red': return '#cc2222';
    case 'yellow': return '#bbbb22';
    default: return color;
  }
}

interface PProps {
  center?:boolean|undefined,
  bold?:boolean|undefined,
  italic?:boolean|undefined,
  right?:boolean|undefined,
  color?:string|undefined,
  children:React.ReactNode
}

export function P(props:PProps) {

  const center = props.center ? true : false;
  const right = props.right ? true : false;
  const bold = props.bold ? 'bold' : 'inherit';
  const italic = props.italic ? 'italic' : 'inherit';

  const align = ((center, right) => {

    if (center) return 'center';
    else if (right) return 'right';
    else return 'left';

  })(center, right);

  const color = getColor(props.color);

  return (
    <Box
      sx={{
        margin: '16px',
        padding: 0,
        fontSize: '18px',
        fontWeight: bold,
        fontStyle: italic,
        color: color,
        textAlign: align
      }}>
      {props.children}
    </Box>
  );
}

interface SProps {
  color?:string|undefined,
  bold?:boolean|undefined,
  italic?:boolean|undefined,
  children:React.ReactNode
}

export function S(props:SProps) {

  const color = getColor(props.color);
  const bold = props.bold ? 'bold' : 'inherit';
  const italic = props.italic ? 'italic' : 'inherit';

  return (
    <Box
      sx={{
        display: 'inline',
        margin: 0,
        padding: 0,
        fontSize: '18px',
        fontWeight: bold,
        fontStyle: italic,
        color: color
      }}>
      {props.children}
    </Box>
  );
}

export const B = styled('span')({
  fontWeight: 'bold'
});

export const I = styled('span')({
  fontStyle: 'italic'
});

export const Red = styled('span')({
  color: '#cc2222'
});

export const Yellow = styled('span')({
  color: '#bbbb22'
});

interface MediaProps {
  caption?:string|undefined,
  float?:string|undefined,
  url:string
}

export function Media(props:MediaProps) {

  const Container = styled('div')({
    clear: 'both',
    margin: 0,
    width: '100%',
    backgroundColor: '#122348',

    '@media (min-width: 700px)': {
      margin: '0 auto',
      width: '90%'
    }
  });

  const Media = styled('iframe')({
    display: 'block',
    width: '100%',
    margin: 0,
    padding: 0
  });

  const Caption = styled('div')({
    padding: '16px',
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#ccccdd'
  });

  if (typeof props.caption == 'undefined') {
    return (
      <Container>
        <Media
          width="1120"
          height="630"
          src={props.url} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </Media>
      </Container>
    );
  }
  else {
    return (
      <Container>
        <Media
          width="1120"
          height="630"
          src={props.url} 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </Media>
        <Caption>{props.caption}</Caption>
      </Container>
    );
  }
}

export function Image(props:MediaProps) {

  const instance = React.useContext(Context);

  const float = typeof props.float == 'undefined' ? 'none' : props.float;
  const margin = typeof props.float == 'undefined' ? '0 auto' : '24px';
  const width = typeof props.float == 'undefined' ? '90%' : '40%';

  const Container = styled('div')({
    float: 'none',
    clear: 'both',
    margin: 0,
    width: '100%',
    backgroundColor: '#122348',

    '@media (min-width: 700px)': {
      float: float,
      margin: margin,
      width: width
    }
  });

  const Image = styled('img')({
    cursor: 'pointer',
    display: 'block',
    margin: 0,
    padding: 0,
    width: '100%'
  });

  const Caption = styled('div')({
    margin: 0,
    padding: '16px',

    fontStyle: 'italic',
    textAlign: 'center',
    color: '#ccccdd'
  });

  const onClick = () => {

    const controller = instance.getController('Portrait');

    controller.filename = props.url;
    instance.getController('Progress').show(true);
    controller.showBackdrop(true);
  };

  if (typeof props.caption == 'undefined') {

    return (
      <Container>
        <Image src={config.PUBLIC_ROOT + props.url} onClick={onClick} />
      </Container>
    );
  }
  else {

    return (
      <Container>
        <Image src={config.PUBLIC_ROOT + props.url} onClick={onClick} />
        <Caption>{props.caption}</Caption>
      </Container>
    );
  }
}

interface CollageProps {columns:number, list:Array<string>}
export function Collage(props:CollageProps) {

  const instance = React.useContext(Context);

  const width = 100/props.columns;

  const Image = styled('img')({
    cursor: 'pointer',
    display: 'block',
    margin: 0,
    padding: 0,
    width: width + '%'
  });

  const Flex = styled('div')({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    margin: 0,
    width: '100%',
    
    '@media (min-width: 700px)': {
      margin: '0 auto',
      width: '90%'
    }
  });

  const getLink = (url:string) => {

    return () => {
      const controller = instance.getController('Portrait');

      controller.filename = url;
      instance.getController('Progress').show(true);
      controller.showBackdrop(true);
    };
  };

  return (
    <Flex>
    {

      props.list.map((item, index) => {
        return (<Image key={index} src={config.PUBLIC_ROOT + item} alt="" onClick={getLink(item)} />);
      })
    }
    </Flex>
  );
}

