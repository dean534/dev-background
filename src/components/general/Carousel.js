import React from 'react';
import styled from 'styled-components';

const OuterSpace = styled.div`

`

const InnerSpace = styled.div`

`

export default class Carousel extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <OuterSpace>
        <InnerSpace>
          {this.props.children[0]}
        </InnerSpace>
      </OuterSpace>
      </div>
    )
  }
}
