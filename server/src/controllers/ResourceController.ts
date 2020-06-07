import { Request, Response } from 'express';

export default class ResourceController {
    index(req: Request, res: Response) {
        return res.json({message: "Hello World"})
    }
}