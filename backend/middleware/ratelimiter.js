import ratelimit from "../config/upstash.js";
const rateLimiter = async (req, res, next) => {
    // Implement rate limiting logic here
    try {
        const {success} = await ratelimit.limit ("my_unique_identifier");
        if (!success) {
            return res.status(429).json({error: 'Too many requests, please try again later.'});
        }
        next();
    } catch (error) {
        console.error('Rate limiting error:', error);
        res.status(500).json({error: 'Internal server error'});
    }}

export default rateLimiter;