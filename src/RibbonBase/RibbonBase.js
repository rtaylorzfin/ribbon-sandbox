import React from 'react'
import PropTypes from 'prop-types';

import Block from './Block';

export default class RibbonBase extends React.Component {

  render() {
    let blocks = this.props.blocks;
    let currentblock = this.props.currentblock;
    return (
        <div className='ontology-ribbon__strip'>
        {
          blocks.map((slimitem) => {
            let active = (currentblock !== undefined &&
                          slimitem.class_id === currentblock.class_id);
            return (
              <Block
                slimitem={slimitem}
                key={slimitem.class_id}
                onClick={() => this.props.onSlimSelect(slimitem)}
                onMouseEnter={() => this.props.onSlimEnter(slimitem)}
                onMouseLeave={() => this.props.onSlimLeave(slimitem)}
                showTitle={this.props.showBlockTitles}
                isActive={active}
              />
            );
          })
        }
      </div>
    )
  }
}

RibbonBase.propTypes = {
    blocks: PropTypes.array.isRequired,
    currentblock: PropTypes.object,
    onSlimSelect: PropTypes.func.isRequired,
    onSlimEnter: PropTypes.func,
    onSlimLeave: PropTypes.func,
    showBlockTitles: PropTypes.bool,
};

RibbonBase.defaultProps = {
    showBlockTitles: true
};
