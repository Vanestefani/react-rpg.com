import React from 'react';

import HealthBar from '../../components/health-bar';

function Monster(props) {
  const { monster } = props;

  return (
    <div style={{
        position: 'absolute',
        top: monster.position[1],
        left: monster.position[0],
        backgroundImage: `url('${monster.sprite}')`,
        backgroundSize: 'contain',
        width: '40px',
        height: '40px'
      }}>

      <HealthBar value={monster.hp} max={monster.maxHp} />

    </div>
  );
}

export default Monster;