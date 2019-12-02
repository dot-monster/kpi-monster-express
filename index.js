const axios = require('axios');

module.exports = (key, options = {}) => {
    if(!key){
        throw new Error('You must specify an API key.');
    }

    return (req, res, next) => {
        const start = new Date();
        const tags = options.tags ? options.tags : [];

        tags.push('express');
        tags.push(`express.${req.method.toLowerCase()}`);

        res.on('finish', () => {
            const end = new Date();

            axios.post('https://kpi.monster/v1/track', {
                tags,
                fields: {
                    time_start: start.toISOString(),
                    time_end: end.toISOString(),
                    time_elapsed: end - start,
                    request_method: req.method,
                    request_path: req.path,
                    request_ip: req.ip
                }
            },
            {
                headers: {
                    Authorization: `Bearer ${key}`
                }
            })
            .catch(error => {
                console.warn('Error sending request to KPI Monster', error);
            });
        });

        next();
    };
};