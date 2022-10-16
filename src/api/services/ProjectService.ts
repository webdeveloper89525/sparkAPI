import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Project } from '../models/Project';
import { ProjectRepository } from '../repositories/ProjectRepository';

@Service()
export class ProjectService {
    constructor(
        @OrmRepository() private projectRepository: ProjectRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public findByProjectId(id: string): Promise<any | undefined> {
        this.log.info('Find prject by project Id');
        return this.projectRepository.findByProjectId(id);
    }

    public findAllProject(): Promise<any> {
        this.log.info('Find all projects');
        return this.projectRepository.findAllProjects();
    }

    public findByNameSearch(name: string): Promise<any> {
        this.log.info('Find project list by project name');
        return this.projectRepository.findByNameSearch(name);
    }

    public async createProject(project: Project): Promise<any> {
        this.log.info('Create the new project => ', project.toString());
        const newProject = await this.projectRepository.saveProject(project);
        return newProject;
    }

    public async updateProject(project: Project): Promise<any | undefined> {
        this.log.info('update the project => ', project.toString());
        const updatedProject = await this.projectRepository.saveProject(project);
        return updatedProject;
    }

    public async deleteProject(id: string): Promise<void> {
        this.log.info('Delete a project');
        await this.projectRepository.deleteProject(id);
        return;
    }
}
