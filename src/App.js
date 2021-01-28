import './App.scss';
import React from 'react';
import axios from "axios";
import MainInterface from "./components/mainInterface";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './App.scss';


const api = 'http://127.0.0.1:5000/';
const addPreset = (preset, updater) => {
  const modifiedPreset = {id: 0, ...preset}
  axios.post(api + 'presets/set', modifiedPreset)
      .then(() => updater());
};
const modifyPreset = (preset, updater) => {
  axios.post(api + 'presets/set', preset)
      .then(() => updater());
};
const removePreset = (id, updater) => {
  const preset = {
    id: id,
    title: '',
    smb_side: '',
    smb_n: '',
    dgt_side: '',
    dgt_n: '',
    rw_min_len: 0,
    rw_max_len: 0,
    rw_n: '',
    separator: ''
  };
  axios.post(api + 'presets/remove', preset).then(() => updater());
};
const getPasswords = (preset, n, handler) => {
  console.log(preset);
  axios.post(api + `gen-pwd-${n}`, preset)
      .then(r => handler(r['data']['passwords']))
};
const controls = {...{addPreset, modifyPreset, removePreset, getPasswords}};

function App() {
  // variables
  const [presets, setPresets] = React.useState(null);

  // methods
  const fetchPresets = React.useCallback(() => {
    axios.get(api + 'presets/get').then(r => {
      setPresets(r['data']['presets']);
    })
  }, []);

  // effects
  React.useEffect(() => {
    if (!presets) {
      fetchPresets();
    }
  })

  // tmp
  React.useEffect(() => {
    console.log('presets:', presets);
  })

  return (
    <div className="App">
      <div className={'container'}>
        <MainInterface {...{presets, controls}} />
      </div>
    </div>
  );
}

export default App;
