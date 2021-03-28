import { ADDRESSES, ADD_ADDRESS, DELETE_ADDRESS } from '../actions/addresses';

const initialState = {
    addressesRequested: false,
    addressesResponded: false,
    addressesMessage: '',
    addAddressesRequested: false,
    addAddressesResponded: false,
    isAddSuccess: false,
    isAddFailed: false,
    deleteAddressesRequested: false,
    deleteAddressesResponded: false,
    isDeleteSuccess: false,
    isDeleteFailed: false,
};

export const addresses = (state = initialState, action = '') => {
    switch (action.type) {
        case ADDRESSES.REQUESTED:
            return {
                ...state,
                ...{
                    addressesRequested: true,
                    addressesResponded: false
                }
            };
        case ADDRESSES.RESPONDED:
            return {
                ...state,
                ...{
                    addressesRequested: false,
                    addressesResponded: true,
                    addresses: action.addresses,
                }
            };
        case ADDRESSES.FAILED:
            return {
                ...state,
                ...{
                    addressesRequested: false,
                    addressesResponded: true,
                    addressesMessage: action.response,
                }
            };
        case ADD_ADDRESS.REQUESTED:
            return {
                ...state,
                ...{
                    addAddressesRequested: true,
                    addAddressesResponded: false
                }
            };
        case ADD_ADDRESS.RESPONDED:
            return {
                ...state,
                ...{
                    addAddressesRequested: false,
                    addAddressesResponded: true,
                    isAddSuccess: true,
                    isAddFailed: false
                }
            };
        case ADD_ADDRESS.FAILED:
            return {
                ...state,
                ...{
                    addAddressesRequested: false,
                    addAddressesResponded: true,
                    isAddSuccess: false,
                    isAddFailed: true
                }
            };

        case DELETE_ADDRESS.REQUESTED:
            return {
                ...state,
                ...{
                    deleteAddressesRequested: true,
                    deleteAddressesResponded: false,
                }
            };
        case DELETE_ADDRESS.RESPONDED:
            return {
                ...state,
                ...{
                    deleteAddressesRequested: false,
                    deleteAddressesResponded: true,
                    isDeleteSuccess: true,
                    isDeleteFailed: false
                }
            };
        case DELETE_ADDRESS.FAILED:
            return {
                ...state,
                ...{
                    deleteAddressesRequested: false,
                    deleteAddressesResponded: true,
                    isDeleteSuccess: false,
                    isDeleteFailed: true
                }
            };
        default:
            return state;
    };
}