import Session from '../models/session.js'

export const createSession = async(req,res) => {
    try{
        const {
            title,
            description,
            category,
            date,
            language,
            isPaid,
            price,
        } = req.body;

        const session = await Session.create({
            title,
            description,
            category,
            date,
            language,
            isPaid,
            price,
            host:req.user._id,
        });

        res.status(500).json({
            message:"Sessoin created successfully",
            session,
        });
    } catch(error) {
        res.status(500).json({
            message:error.message,
        });
    }
};

export const getAllSessions = async(req,res) => {
    try{
        const sessions = await Session.find().populate("host","usename email").sort({ createdAt: -1 });
        res.status(200).json(sessions);

    } catch(error) {
        res.status(500).json({
            message:error.message,
        });
    }
};

export const getSessionByID = async(req,res) => {
    try {
        const session = await Session.findById(req.id).populate("host","username email");

        if(!session) {
            return res.status(404).json({
                message:"Sessoin not found",
            });
        }

        res.status(200).json(session);
        
    } catch(error) {
        res.status(500).json({
            message:error.message,
        });
    }
};