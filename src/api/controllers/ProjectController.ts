import { Body, Delete, Get, JsonController, OnUndefined, Param, Post } from 'routing-controllers';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { ProjectNotFountError } from '../errors/ProjectNotFoundError';
import { Project } from '../models/Project';
import { ProjectService } from '../services/ProjectService';
import { ProjectRequest } from './requests/ProjectRequest';
import { ProjectResponse } from './responses/ProjectResponse';

@JsonController('/project')
@OpenAPI({ security: [{ basicAuth: [] }] })
export class ProjectController {

    constructor(
        private projectService: ProjectService
    ) { }

    @Get()
    @ResponseSchema(ProjectResponse, {isArray: true})
    public findAllProject(): Promise<ProjectResponse[]> {
        return this.projectService.findAllProject();
    }

    @Get('/:id')
    @OnUndefined(ProjectNotFountError)
    @ResponseSchema(ProjectResponse, {isArray: false})
    public findByProjectId(@Param('id') id: string): Promise<ProjectResponse> {
        return this.projectService.findByNameSearch(id);
    }

    @Post('/create')
    @ResponseSchema(ProjectResponse)
    public createProject(@Body() body: ProjectRequest): Promise<ProjectResponse> {
        let newProject = new Project();
        newProject = body as Project;

        return this.projectService.createProject(newProject);
    }

    @Post('/update')
    @OnUndefined(ProjectNotFountError)
    @ResponseSchema(ProjectResponse)
    public async updateProject(@Body({ required: true }) body: ProjectRequest): Promise<ProjectResponse> {

        let project = new Project();
        project = body as Project;

        return this.projectService.updateProject(project);
    }

    @Delete('/:id')
    public delete(@Param('id') id: string): Promise<void> {
        return this.projectService.deleteProject(id);
    }
}
