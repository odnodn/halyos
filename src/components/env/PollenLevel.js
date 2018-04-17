import PropTypes from 'prop-types';
import React from 'react';

// Components
import EnvironmentTile from '../EnvironmentTile';

const CATEGORIES = {
  1: 'Low',
  2: 'High',
  3: 'Good',
  4: 'Moderate',
  5: 'Unhealthy',
  6: 'Hazardous'
};

class PollenLevel extends React.Component {
  componentDidMount() {
  }

  render() {
    let avgLevel;
    let listItems = [];
    let icon = 'pollen';

    // console.log("this.props.pollen", this.props.pollen);
    if (!this.props.isFetchingPollenData && this.props.pollen) {
      const allergyMeasures = this.props.pollen
        .filter(item => (item.Name !== 'UVIndex' && item.Name !== 'AirQuality'));

      const counter = allergyMeasures
        .reduce((sum, item) => sum + item.CategoryValue, 0);

      avgLevel = Math.round(counter / Object.keys(allergyMeasures).length);

      listItems = allergyMeasures.map((item, index) =>
        <tr key={index}>
          <td>{item.Name}</td>
          <td>{item.Category}</td>
        </tr>
      );
      
      switch (avgLevel) {
        case 1:
        case 2:
          icon = 'pollen-1';
          break;
        case 3:
        case 4:
          icon = 'pollen-2';
          break;
        default:
          icon = 'pollen-3';
      }
    }

    return (
      <EnvironmentTile
        name="Pollen"
        expand={this.props.expand}
        icon={icon}
        isCollapsed={this.props.isCollapsed}
        isExpanded={this.props.isExpanded}
        level={CATEGORIES[avgLevel]}
      >
        <div>
          <h5>Pollen Levels</h5>
          {!listItems.length ? (
            <div>...</div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Level</th>
                </tr>
              </thead>
              <tbody>
                {listItems}
              </tbody>
            </table>
          )}
        </div>
      </EnvironmentTile>
    );
  }
}

PollenLevel.propTypes = {
  expand: PropTypes.func,
  getPollenLevels: PropTypes.func,
  isCollapsed: PropTypes.bool,
  isExpanded: PropTypes.bool,
  isFetchingPollenData: PropTypes.bool,
  pollen: PropTypes.array,
};

export default PollenLevel;
