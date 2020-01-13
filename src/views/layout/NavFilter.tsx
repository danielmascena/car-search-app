import React, { useEffect, useState, FunctionComponent } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { actionCreation } from '../../actions';
import { Manufacturer } from '../../types';
import Button from '../../components/Button';
import Label from '../../components/Label';
import Select from '../../components/Select';

const mapStateToProps = state => ({
  queries: state.queries
});

let NavFilter: FunctionComponent = ({ dispatch, queries }) => {
  const [colors, setColors] = useState<Array<string>>([]);
  const [manufacturers, setManufacturers] = useState<Array<Manufacturer>>([]);
  const [colorSelected, setColorSelected] = useState<number | undefined>();
  const [manufacturerSelected, setManufacturerSelected] = useState<
    number | undefined
  >();

  const labelColor = 'All car colors';
  const labelManufacturer = 'All manufacturers';

  useEffect(() => {
    const getColors = async () => await axios({ url: '/api/colors' });
    getColors().then(({ data: { colors } }) =>
      setColors([labelColor, ...colors])
    );

    const getManufacturers = async () => await axios('/api/manufacturers');
    getManufacturers().then(({ data: { manufacturers } }) =>
      setManufacturers([
        labelManufacturer,
        ...manufacturers.map((mf: Manufacturer) => mf.name)
      ])
    );
  }, []);
  const handleClick = (event: React.ClickEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // Avoid error logic when searching for color/manufacturer
    // with state.queries.page > state.totalPages
    if (queries.page !== 1) {
      dispatch(actionCreation.searchByPage(1));
    }
    dispatch(
      colorSelected
        ? actionCreation.searchByColor(colors[colorSelected])
        : actionCreation.removeQuery('color')
    );
    dispatch(
      manufacturerSelected
        ? actionCreation.searchByManufacturer(
            manufacturers[manufacturerSelected]
          )
        : actionCreation.removeQuery('manufacturer')
    );
  };
  return (
    <aside style={styleNavFilter.searchBoxWrapper}>
      <fieldset style={styleNavFilter.searchBox}>
        <form role="search">
          <div>
            <Label text="Color" idFor="colorLbl" />
            <Select
              onChange={setColorSelected}
              options={colors}
              labelOption={labelColor}
              labelByIds="colorLbl"
            />
          </div>
          <div>
            <Label text="Manufacturer" idFor="manufacturerLbl" />
            <Select
              onChange={setManufacturerSelected}
              options={manufacturers}
              labelOption={labelManufacturer}
              labelByIds="manufacturerLbl"
            />
          </div>
          <Button click={handleClick}>Filter</Button>
        </form>
      </fieldset>
    </aside>
  );
};

const styleNavFilter = {
  searchBoxWrapper: {
    maxWidth: '250px',
    float: 'left',
    boxSizing: 'content-box',
    padding: '24px',
    border: '2px #ededed solid'
  },
  searchBox: {
    color: '#4a4a4a',
    padding: 0,
    margin: 0,
    border: 'none'
  }
};

NavFilter = connect(mapStateToProps)(NavFilter);
export default NavFilter;
