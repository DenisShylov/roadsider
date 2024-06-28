import React from 'react';

const BaseDrawer = () => {
  return (
    <Drawer
      anchor={anchor}
      open={state[anchor]}
      onClose={toggleDrawer(anchor, false)}
    >
      {list(anchor)}
    </Drawer>
  );
};

export default BaseDrawer;
