/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import { createSlice } from '@reduxjs/toolkit';
import { DTM } from 'nrf-dtm-js/src/DTM';
import { bleChannels } from 'pc-nrfconnect-shared';

import * as Constants from '../utils/constants';
import { RootState, SettingsState } from './types';

export const DTM_CHANNEL_MODE = {
    single: 'DTM_CHANNEL_MODE_SINGLE_ACTION',
    sweep: 'DTM_CHANNEL_MODE_SWEEP_ACTION',
};

const initialState: SettingsState = {
    channelMode: DTM_CHANNEL_MODE.single,
    singleChannel: 19,
    channelRange: [bleChannels.min, bleChannels.max],
    sweepTime: 0,
    bitpattern: 0,
    length: 37,
    txPower: Math.max(0, Constants.dbmValues.indexOf(0)),
    phy: DTM.DTM_PARAMETER.PHY_LE_1M,
    ant: DTM.DTM_PARAMETER.FEM_ANT_1,
    gain: DTM.DTM_PARAMETER.FEM_BYPASS,
    modulationMode: DTM.DTM_PARAMETER.STANDARD_MODULATION_INDEX,
    timeoutms: 0,
};

const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        dtmChannelModeChanged(state, action) {
            state.channelMode = action.payload;
        },
        dtmSingleChannelChanged(state, action) {
            state.singleChannel = action.payload;
        },
        channelRangeChanged(state, action) {
            state.channelRange = action.payload;
        },
        sweepTimeChanged(state, action) {
            state.sweepTime = action.payload;
        },
        txPowerChanged(state, action) {
            state.txPower = action.payload;
        },
        bitpatternChanged(state, action) {
            state.bitpattern = action.payload;
        },
        lengthChanged(state, action) {
            state.length = action.payload;
        },
        timeoutChanged(state, action) {
            state.timeoutms = action.payload * 1000;
        },
        phyChanged(state, action) {
            state.phy = action.payload;
        },
        antChanged(state, action) {
            state.ant = action.payload;
        },
        gainChanged(state, action) {
            state.gain = action.payload;
        },
        modulationChanged(state, action) {
            state.modulationMode = action.payload;
        },
    },
});

export default settingsSlice.reducer;

const {
    dtmChannelModeChanged,
    dtmSingleChannelChanged,
    channelRangeChanged,
    sweepTimeChanged,
    txPowerChanged,
    bitpatternChanged,
    lengthChanged,
    timeoutChanged,
    phyChanged,
    antChanged,
    gainChanged,
    modulationChanged,
} = settingsSlice.actions;

const getChannelMode = (state: RootState) => state.app.settings.channelMode;
const getSingleChannel = (state: RootState) => state.app.settings.singleChannel;
const getChannelRange = (state: RootState) => state.app.settings.channelRange;
const getSweepTime = (state: RootState) => state.app.settings.sweepTime;
const getBitpattern = (state: RootState) => state.app.settings.bitpattern;
const getLength = (state: RootState) => state.app.settings.length;
const getTxPower = (state: RootState) => state.app.settings.txPower;
const getPhy = (state: RootState) => state.app.settings.phy;
const getAnt = (state: RootState) => state.app.settings.ant;
const getGain = (state: RootState) => state.app.settings.gain;
const getModulation = (state: RootState) => state.app.settings.modulationMode;
const getTimeout = (state: RootState) => state.app.settings.timeoutms;

export {
    dtmChannelModeChanged,
    dtmSingleChannelChanged,
    channelRangeChanged,
    sweepTimeChanged,
    txPowerChanged,
    bitpatternChanged,
    lengthChanged,
    timeoutChanged,
    phyChanged,
    antChanged,
    gainChanged,
    modulationChanged,
    getChannelMode,
    getSingleChannel,
    getChannelRange,
    getSweepTime,
    getBitpattern,
    getLength,
    getTxPower,
    getPhy,
    getAnt,
    getGain,
    getModulation,
    getTimeout,
};
