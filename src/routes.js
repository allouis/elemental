import React from 'react'
import {Router, Route} from 'react-router'
import ChannelsView from './components/pages/ChannelsView'
import ChannelView from './components/pages/ChannelView'
import Controllers from './components/pages/Controllers'
import ControlPadSettings from './components/pages/ControlPadSettings'
import ControlPadView from './components/pages/ControlPadView'
import Effect from './components/pages/Effect'
import Effects from './components/pages/Effects'
import Instrument from './components/pages/Instrument'
import Instruments from './components/pages/Instruments'
import KeyboardSettings from './components/pages/KeyboardSettings'
import PatternEditorSettings from './components/pages/PatternEditorSettings'
import PatternEditorView from './components/pages/PatternEditorView'
import SettingsView from './components/pages/SettingsView'

export default <Router>
  <Route path='/channel/:channelId' component={ChannelView} />
  <Route path='/channels' component={ChannelsView} />
  <Route path='/controllers' component={Controllers} />
  <Route path='/controllers/control-pad' component={ControlPadView} />
  <Route path='/controllers/keyboard/settings' component={KeyboardSettings} />
  <Route path='/controllers/pattern-editor' component={PatternEditorView} />
  <Route path='/control-pad/settings' component={ControlPadSettings} />
  <Route path='/effects' component={Effects} />
  <Route path='/effects/:name' component={Effect} />
  <Route path='/instruments' component={Instruments} />
  <Route path='/instruments/:name' component={Instrument} />
  <Route path='/pattern-editor/settings' component={PatternEditorSettings} />
  <Route path='/settings' component={SettingsView} />
  <Route path='/*' component={ControlPadView} />
</Router>
