import SYSTEM from '../../config/system';
const URL = SYSTEM.SERVER_SIDE.CLOUD ?? `${SYSTEM.SERVER_SIDE.URL}:${SYSTEM.SERVER_SIDE.PORT}`;

/**
 * calling api prediction
 * @param {*} opt 
 * @param {{headers: Record<string, string | number>, method: string[], body: Record<string, any>}} config 
 * @returns 
 */
export const fetchPrediction = async (opt, config) => {
    if (opt === 'clear') {
        return {
            predict: undefined,
            nn: []
        }
    }
    config.body = JSON.stringify(config.body);
    const response = await fetch(`${URL}/pred?opt=${opt}`, config);
    const data = await response.json();
    return {
        predict: data.predict,
        nn: config.body.nn
    };
};