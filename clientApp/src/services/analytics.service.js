import api from "./api";

class AnalyticsService {
    constructor() {}

    /**
     * Send requests to emotions anayltics endpoint of batch size until all processed
     * @param {*} songs song array
     * @param {*} batchSize batch size
     * @returns Promise that fulfills once all requests are completed
     */
    async analyzeEmotions(songs, batchSize = 10) {
        const total = songs.length;

        if (total % batchSize != 0) {
            throw 'Batch size must be a multiple of array length';
        }

        const trackInfos = songs.map(t => {
            return t.name.replaceAll('"', '') + ' by ' + t.artists[0].name;
        });

        let result = [];

        for (let i = 0; i < total/batchSize; i++) {
            const subArray = trackInfos.slice(i*batchSize,i*batchSize + batchSize);
            const subResult = await api.post('analytics/emotions', { list: subArray })
            .catch(err => { 
                throw err 
            });
            result = [...result, ...subResult];
        }

        return result;
    }

    async analyzePersonality(map) {
        return await api.post('analytics/personality', { map });
    }
}

const analyticsService = new AnalyticsService();

export default analyticsService;