import React from 'react';
// import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import Tuna from 'tunajs';

import classnames from 'classnames';
// import { startStopSong } from '../actions/index.action';
// import { handlePlaybackSpeed } from '../actions/index.action';
import * as actions from '../actions/index.action'

import Playlist from './playlist.container';
// import Deck from './deck.container';
import Turntable from './turntable.component';
import Mixer from './mixer.component';
import FxContainer from './fx-container.component';
import Header from './header.component';
import FxSection from './fx-section';
import Meter from './meter.component';

import Visualizer from './visualizer.component';
import AudioMeter from './volMeter.component';

import Pot from './knob.component';



// import Turntable2 from './turntable2';

const styles = {
  tt_mixer: {
    height: 432,
    // width: 500
  },
  container: {
    margin: 0,
    padding: 0
  },
}

class ChannelLeft extends React.Component {

  render() {
    // const filterChange = (value) => {
    //       this.lowPassFilter.frequency.value = this.props.lpCutoff;
    //     }

    // const handleLPCutoff = (value) => {handleFilterCutoffChange(value, this.props.deckNum), filterChange()}
// const model = {
//   path: this.props.song.url,
//   author: this.props.song.artist.name,
//   title: this.props.song.artist.song
// }
let turntableClass = classnames("col-lg-4 col-md-4 col-sm-4 col-xs-4", this.props.orientation)
    return (
      <div className="container-fluid col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0 col-sm-10 col-sm-offset-1 col-xs-12 col-xs-offset-0" name={this.props.name}>

        {/*<div className="row">*/}
        <div
            className="container-fluid tt-mixer-container"
            style={styles.tt_mixer}>
          <Turntable
            deckNum="_DECK1"
            song={this.props.song}
            play={this.props.play}
            speed={this.props.speed}
            volume={this.props.volume}
            handlePlaybackSpeed={this.props.handlePlaybackSpeed}
            startStopSong={this.props.startStopSong}
            className={turntableClass}/>
          <MuiThemeProvider>
            <Mixer deckNum="_DECK1"
            className="mixer col-lg-2 col-md-2 col-sm-2 col-xs-2"
            orientation={this.props.orientation}
            volume={this.props.volume}
            treble={this.props.treble}
            mid={this.props.mid}
            bass={this.props.bass}
            handleVolumeChange={this.props.handleVolumeChange}
            handleTrebleControl={this.props.handleTrebleControl}
            handleMidControl={this.props.handleMidControl}
            handleBassControl={this.props.handleBassControl}
            />
          </MuiThemeProvider>
        {/*</div>*/}
        </div>
         <div className="container-fluid col-lg-12 col-md-12 col-sm-12 col-xs-12">
         <MuiThemeProvider>
        <FxSection
                audioContext={this.props.audioContext}
                song={this.props.song}
                deckNum="_DECK1"
                //type='square'
                oscFreq={50}
                treble={this.props.treble}
                mid={this.props.mid}
                bass={this.props.bass}
                //handleVolumeChange={this.props.handleVolumeChange}
                handleTrebleControl={this.props.handleTrebleControl}
                handleMidControl={this.props.handleMidControl}
                handleBassControl={this.props.handleBassControl}
                lpFilterBypass={this.props.lpFilterBypass}
                lpCutoff={this.props.lpFilterCutoff}
                lpRes={this.props.lpFilterRes}
                hpFilterBypass={this.props.hpFilterBypass}
                hpCutoff={this.props.hpFilterCutoff}
                hpRes={this.props.hpFilterRes}
                hpCutoff={this.props.hpFilterCutoff}
                context={this.audioContext}
                onPressNote={this.onPressNote}
                onReleaseNote={this.onReleaseNote}
                onLpFilterBypassChange={this.props.handleLpFilterBypassChange}
                onLpFilterCutoffChange={this.props.handleLpFilterCutoffChange}
                onLpFilterResChange={this.props.handleLpFilterResChange}
                onHpFilterBypassChange={this.props.handleHpFilterBypassChange}
                onHpFilterCutoffChange={this.props.handleHpFilterCutoffChange}
                onHpFilterResChange={this.props.handleHpFilterResChange}
                onBitCrusherBypassChange={this.props.handleBitCrusherBypassChange}
                onBitChange={this.props.handleBitChange}
                onNormFreqChange={this.props.handleNormFreqChange}
                onBufferSizeChange={this.props.handleBufferSizeChange}
                onReverbBypassChange={this.props.handleReverbBypassChange}
                onReverbMixChange={this.props.handleReverbMixChange}
                onDelayBypassChange={this.props.handleDelayBypassChange}
                onDelayTimeChange={this.props.handleDelayTimeChange}
                onDelayMixChange={this.props.handleDelayMixChange}
                bits={this.props.bits}
                normFreq={this.props.normFreq}
                bufferSize={this.props.bufferSize} //4096
                bitCrusherBypass={this.props.bitCrusherBypass}
                //onCutoffChange={this.props.handleFilterChange}
                reverbMix={this.props.reverbMix}
                delayTime={this.props.delayTime}
                delayMix={this.props.delayMix}
                delayBypass={false}
                reverb={this.props.reverb}
                reverbBypass={false}
                value={this.props.filter}
                play={this.props.play}
                />
                 </MuiThemeProvider>
                 </div>
        {/*<div className="container-fluid">
          <MuiThemeProvider>
            <FxContainer deckNum="_DECK1"
            filter={this.props.filter}
            reverb={this.props.reverb}
            delay={this.props.delay}
            distortion={this.props.distortion}
            handleFilterChange={this.props.handleFilterChange}
            handleReverbChange={this.props.handleReverbChange}
            handleDelayChange={this.props.handleDelayChange}
            handleDistortionChange={this.props.handleDistortionChange}/>
          </MuiThemeProvider>
        </div>*/}
        {/*<AudioMeter deckNum="_DECK1"/>*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        song: state.decksReducer.deck1.activeSong,
        play: state.decksReducer.deck1.play,
        speed: state.decksReducer.deck1.speed,
        volume: state.decksReducer.deck1.volume,
        treble: state.decksReducer.deck1.treble,
        mid: state.decksReducer.deck1.mid,
        bass: state.decksReducer.deck1.bass,
        //lpFilterBypass: state.decksReducer.deck1.lpFilterBypass,
        lpFilterCutoff: state.decksReducer.deck1.lpFilterCutoff,
        lpFilterRes: state.decksReducer.deck1.lpFilterRes,
        //hpFilterBypass: state.decksReducer.deck1.hpFilterBypass,
        hpFilterCutoff: state.decksReducer.deck1.hpFilterCutoff,
        hpFilterRes: state.decksReducer.deck1.hpFilterRes,
        //reverbBypass: state.decksReducer.deck1.reverbBypass,
        reverbMix: state.decksReducer.deck1.reverbMix,
        delay: state.decksReducer.deck1.delay,
        distortion: state.decksReducer.deck1.distortion,
        bitCrusherBypass: state.decksReducer.deck1.bitCrusherBypass,
        bits: state.decksReducer.deck1.bits,
        normFreq: state.decksReducer.deck1.normFreq,
        bufferSize: state.decksReducer.deck1.bufferSize,
        //delayBypass: state.decksReducer.deck1.delayBypass,
        delayTime: state.decksReducer.deck1.delayTime,
        delayMix: state.decksReducer.deck1.delayMix,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        handlePlaybackSpeed: actions.handlePlaybackSpeed,
        startStopSong: actions.startStopSong,
        handleVolumeChange: actions.handleVolumeChange,
        handleTrebleControl: actions.handleTrebleControl,
        handleMidControl: actions.handleMidControl,
        handleBassControl: actions.handleBassControl,
        handleLpFilterCutoffChange: actions.handleLpFilterCutoffChange,
        handleLpFilterResChange: actions.handleLpFilterResChange,
        handleHpFilterCutoffChange: actions.handleHpFilterCutoffChange,
        handleHpFilterResChange: actions.handleHpFilterResChange,
        handleReverbMixChange: actions.handleReverbMixChange,
        handleDelayChange: actions.handleDelayChange,
        handleDistortionChange: actions.handleDistortionChange,
        handleBitCrusherBypassChange: actions.handleBitCrusherBypassChange,
        handleBitChange: actions.handleBitChange,
        handleNormFreqChange: actions.handleNormFreqChange,
        handleBufferSizeChange: actions.handleBufferSizeChange,
        handleDelayTimeChange: actions.handleDelayTimeChange,
        handleDelayMixChange: actions.handleDelayMixChange,
        },
        dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelLeft);

