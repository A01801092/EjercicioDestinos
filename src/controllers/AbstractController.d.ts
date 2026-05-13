import { Router } from "express";
export default abstract class AbstractController {
    private _router;
    private _prefix;
    get router(): Router;
    get prefix(): string;
    protected constructor(_prefix: string);
    protected abstract initRoutes(): Router;
}
//# sourceMappingURL=AbstractController.d.ts.map