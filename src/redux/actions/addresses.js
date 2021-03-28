
import { buildActionNames } from "../../utils/actionConstTypes";
import {
    getAddresses as getAddressesApi,
    addAddress as addAddressApi,
    editAddress as editAddressApi,
    deleteAddress as deleteAddressApi
} from "../../utils/addressApi";

export const ADDRESSES = buildActionNames('ADDRESSES');
export const ADD_ADDRESS = buildActionNames('ADD_ADDRESS');
export const DELETE_ADDRESS = buildActionNames('DELETE_ADDRESS');


/**
 * action for address service.
 */
export const getAddresses = (user) => (dispatch) => {
    dispatch({
        type: ADDRESSES.REQUESTED
    });

    return getAddressesApi(user)
        .then((response) => {
            dispatch({
                type: ADDRESSES.RESPONDED,
                addresses: response.data.results
            });
        })
        .catch((error) => {
            const { response } = error;
            dispatch({
                type: ADDRESSES.FAILED,
                response
            });
        });
};


/**
 * action for address service.
 */
export const addAddress = (address) => (dispatch) => {
    dispatch({
        type: ADD_ADDRESS.REQUESTED
    });

    return addAddressApi(address)
        .then((response) => {
            dispatch({
                type: ADD_ADDRESS.RESPONDED
            });
        })
        .catch((error) => {
            const { response } = error;
            dispatch({
                type: ADD_ADDRESS.FAILED,
                response
            });
        });
};

export const editAddress = (address) => (dispatch) => {
    dispatch({
        type: ADD_ADDRESS.REQUESTED
    });
    return editAddressApi(address)
        .then((response) => {
            dispatch({
                type: ADD_ADDRESS.RESPONDED
            });
        })
        .catch((error) => {
            const { response } = error;
            dispatch({
                type: ADD_ADDRESS.FAILED,
                response
            });
        });
};

export const deleteAddress = (addressId) => (dispatch) => {
    dispatch({
        type: DELETE_ADDRESS.REQUESTED
    });
    return deleteAddressApi(addressId)
        .then((response) => {
            dispatch({
                type: DELETE_ADDRESS.RESPONDED
            });
        })
        .catch((error) => {
            const { response } = error;
            dispatch({
                type: DELETE_ADDRESS.FAILED,
                response
            });
        });
};
