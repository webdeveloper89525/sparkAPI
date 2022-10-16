import { HttpError } from 'routing-controllers';

export class ProjectNotFountError extends HttpError {
    constructor() {
        super(404, 'Project not found!');
    }
}
