import {asyncHandler} from '../utils/asyncHandler.js';


//User Dashboard
const getMap = asyncHandler(async (req, res) => {
    res.json({ center: [20.5937, 78.9629], zoom: 5 });
});


export {
    getMap
};