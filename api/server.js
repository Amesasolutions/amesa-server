import express from 'express'
import { portfolioAll } from './portfolio_model.js';
import cors from 'cors'

const server = express();

server.use(express.json());

server.use(cors())

server.get('/api/portfolios', async (req, res) => {
    try {
        
        const portfolios = await portfolioAll();

        if(!portfolioAll) {
            return res.status(404).json({status: 404, message: "Portfolio data not found"})
        }

        res.json(portfolios)

    } catch (error) {
        res.status(500).json({status: 500, message: error.message})
    }
});

export default server