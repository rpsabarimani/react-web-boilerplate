import Http from './http';
import endPoints from './apiEndPoints';
import { get } from 'lodash';

export function getAddresses(user = null) {
    const addressEndPoint = get(endPoints, 'addressesEndPoint', '');
    const url = `${addressEndPoint}${user ? '?user=' + user : ''}`;
    return Http.get(url);
}

export function addAddress(address) {
    const addressEndPoint = get(endPoints, 'addressesEndPoint', '');
    return Http.post(addressEndPoint, address);
}

export function editAddress(address) {
    const addressEndPoint = `${get(endPoints, 'addressesEndPoint', '')}${address.id}/`;
    return Http.patch(addressEndPoint, address);
}

export function deleteAddress(addressId) {
    const addressEndPoint = `${get(endPoints, 'addressesEndPoint', '')}${addressId}/`;
    return Http.delete(addressEndPoint);
}