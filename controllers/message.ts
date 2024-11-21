import { Request, Response } from "express";

const getMessage = (req: Request, res: Response) => {
  res.send(`El id de este mensaje es: ${req.params.id}`);
};

const replicateMessage = (req: Request, res: Response) => {
  res.send(req.query.message);
};

export { getMessage, replicateMessage };
