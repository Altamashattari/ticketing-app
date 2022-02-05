import { requireAuth, validateRequest } from "@ticketing-service-library/common";
import express, {Request, Response} from "express";
import { body } from "express-validator";
import mongoose  from "mongoose";

const router = express.Router();

router.post('/api/orders', requireAuth, [
    body('ticketId')
        .not()
        .isEmpty()
        .custom((input: string) => mongoose.Types.ObjectId.isValid(input))
        .withMessage('Ticket ID must be provided'),
    
], validateRequest, async(req: Request, res: Response) => {
    res.send({});
})

export {router as newOrderRouter };