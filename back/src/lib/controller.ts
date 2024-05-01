import { NextFunction, Request, Response } from "express";

export const createController = (
  controller: ({
    req,
    res,
    next,
  }: {
    req: Request;
    res: Response;
    next: NextFunction;
  }) => Promise<void>
) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await controller({ req, res, next });
    } catch (e) {
      console.error(e);
      next(e);
    }
  };
};
