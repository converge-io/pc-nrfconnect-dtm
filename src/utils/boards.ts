/*
 * Copyright (c) 2021 Nordic Semiconductor ASA
 *
 * SPDX-License-Identifier: LicenseRef-Nordic-4-Clause
 */

import { DTM } from 'nrf-dtm-js/src/DTM';

import * as Constants from './constants';

const defaultDevice = {
    phy: {
        PHY_LE_1M: DTM.DTM_PARAMETER.PHY_LE_1M,
        PHY_LE_2M: DTM.DTM_PARAMETER.PHY_LE_2M,
        PHY_LE_CODED_S8: DTM.DTM_PARAMETER.PHY_LE_CODED_S8,
        PHY_LE_CODED_S2: DTM.DTM_PARAMETER.PHY_LE_CODED_S2,
    },
    ant: {
        FEM_ANT_1: DTM.DTM_PARAMETER.FEM_ANT_1,
        FEM_ANT_2: DTM.DTM_PARAMETER.FEM_ANT_2,
    },
    gain: {
        FEM_BYPASS: DTM.DTM_PARAMETER.FEM_BYPASS,
        FEM_LOW: DTM.DTM_PARAMETER.FEM_LOW,
        FEM_HIGH: DTM.DTM_PARAMETER.FEM_HIGH,
    },
    txPower: Constants.dbmValues,
};

// const nRF52832 = {
//     phy: {
//         PHY_LE_1M: DTM.DTM_PARAMETER.PHY_LE_1M,
//         PHY_LE_2M: DTM.DTM_PARAMETER.PHY_LE_2M,
//     },
//     txPower: Constants.dbmValues.filter(tx => tx <= 4),
// };

const nRF52840 = { ...defaultDevice };
const nRF52832 = { ...defaultDevice };

function fromPCA(board: string | null) {
    switch (board) {
        case 'PCA10056':
            return nRF52840;
        case 'PCA10040':
            return nRF52832;
        default:
            return defaultDevice;
    }
}

export { nRF52832, nRF52840, fromPCA };
