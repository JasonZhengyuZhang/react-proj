import React, { Component } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import SvgIcon from 'material-ui/SvgIcon';
import coding from '../images/coding.svg';
import ActionHome from 'material-ui/svg-icons/action/home';

const HomeIcon = (props) => (
  <SvgIcon {...props}>
    <path d={coding} />
  </SvgIcon>
);

class CommitPicker extends Component {
  render() {
    return (
      <div>
        <ActionHome />
         <Toolbar>
          <ToolbarGroup>
            <HomeIcon />
          </ToolbarGroup>
          <ToolbarGroup>
            
          </ToolbarGroup>
        </Toolbar>
      </div>
    );
  }
}

export default CommitPicker;
