import axios from 'axios';

import { BASE_URL, ContentType } from '../../constants';

export default axios.create({
    baseURL: `${BASE_URL}/api`,
    headers: {
        'Content-Type': ContentType.JSON,
    },
});
