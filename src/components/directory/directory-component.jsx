import React from 'react';
import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'hats',
          imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkURL: 'shop/hats',
        },
        {
          title: 'jackets',
          imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkURL: 'shop/jackets',
        },
        {
          title: 'sneakers',
          imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkURL: 'shop/sneakers',
        },
        {
          title: 'womens',
          imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkURL: 'shop/womens',
        },
        {
          title: 'mens',
          imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkURL: 'shop/mens',
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageURL, id, size }) => {
          return (
            <MenuItem
              key={id}
              title={title}
              imageURL={imageURL}
              size={size}
            ></MenuItem>
          );
        })}
      </div>
    );
  }
}

export default Directory;
