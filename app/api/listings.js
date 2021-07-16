import client from "./client";

const endpoint = '/listings';

const getlistings = () => client.get(endpoint);

export default {
    getlistings,
};