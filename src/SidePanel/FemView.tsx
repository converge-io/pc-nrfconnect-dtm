/*
 * Copyright (c) 2015 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    DTM,
    DTM_FEM_ANT_STRING,
    DTM_FEM_GAIN_STRING,
} from 'nrf-dtm-js/src/DTM';
import { Dropdown } from 'pc-nrfconnect-shared';

import { getBoard } from '../reducers/deviceReducer';
import {
    antChanged,
    gainChanged,
    getAnt,
    getGain,
} from '../reducers/settingsReducer';
import { getIsRunning } from '../reducers/testReducer';
import { fromPCA } from '../utils/boards';

const FemAntView = () => {
    const ant = useSelector(getAnt);
    const boardType = useSelector(getBoard);
    const isRunning = useSelector(getIsRunning);
    const dispatch = useDispatch();
    const compatibility = fromPCA(boardType);

    const items = Object.entries(compatibility.ant).map(([key, antType]) => ({
        label: DTM_FEM_ANT_STRING[antType],
        value: key,
    }));

    return (
        <Dropdown
            label="Antenna Port"
            items={items}
            disabled={isRunning}
            onSelect={item => {
                dispatch(antChanged(DTM.DTM_PARAMETER[item.value]));
            }}
            selectedItem={
                items.find(e => DTM.DTM_PARAMETER[e.value] === ant) ?? items[0]
            }
        />
    );
};

const FemGainView = () => {
    const gain = useSelector(getGain);
    const boardType = useSelector(getBoard);
    const isRunning = useSelector(getIsRunning);
    const dispatch = useDispatch();
    const compatibility = fromPCA(boardType);

    const items = Object.entries(compatibility.gain).map(([key, gainType]) => ({
        label: DTM_FEM_GAIN_STRING[gainType],
        value: key,
    }));

    return (
        <Dropdown
            label="FEM Gain"
            items={items}
            disabled={isRunning}
            onSelect={item => {
                dispatch(gainChanged(DTM.DTM_PARAMETER[item.value]));
            }}
            selectedItem={
                items.find(e => DTM.DTM_PARAMETER[e.value] === gain) ?? items[0]
            }
        />
    );
};
export { FemAntView, FemGainView };
