import {asyncHandler} from '../utils/asyncHandler.js';


//User Dashboard
const getUserDashboard = asyncHandler(async (req, res) => {
     
    return res.status(200).json({ message: 'User Dashboard' });
});


export {
    getUserDashboard
};