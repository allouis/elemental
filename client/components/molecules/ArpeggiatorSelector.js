import capitalize from 'capitalize';
import React from 'react'; // eslint-disable-line
import {map} from 'ramda';
import InputLabel from '../atoms/InputLabel';

export default ({arpeggiatorIsOn,
                 handleArpeggiatorIsOnChange,
                 handlePatternSelect,
                 patterns,
                 selectedPattern}) =>
  <div>
    <label>
      <InputLabel text="Arpeggiator" />
      <input defaultChecked={arpeggiatorIsOn}
             onChange={handleArpeggiatorIsOnChange}
             type="checkbox" />
    </label>
    <label>
      <InputLabel text="Pattern" />
      <select disabled={!arpeggiatorIsOn}
              defaultValue={selectedPattern}
              onChange={handlePatternSelect}>
        {map(item =>
          <option value={item} key={item}>
            {capitalize(item)}
          </option>, patterns)}
      </select>
    </label>
  </div>;
