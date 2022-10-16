import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Project } from '../models/Project';
import { ProjectRepository } from '../repositories/ProjectRepository';
import { ProjectResponse } from '../controllers/responses/ProjectResponse';

@Service()
export class ProjectService {
    constructor(
        @OrmRepository() private projectRepository: ProjectRepository,
        @Logger(__filename) private log: LoggerInterface
    ) { }

    public async findByProjectId(id: string): Promise<any | undefined> {
        this.log.info('Find prject by project Id');
        const project = await this.projectRepository.findByProjectId(id);
        return this.changeProject(project);
    }

    public async findAllProject(): Promise<any> {
        this.log.info('Find all projects');
        const projects = await this.projectRepository.findAllProjects();
        return projects.map((_project: Project) => this.changeProject(_project));
    }

    public findByNameSearch(name: string): Promise<any> {
        this.log.info('Find project list by project name');
        return this.projectRepository.findByNameSearch(name);
    }

    public async createProject(project: Project): Promise<any> {
        this.log.info('Create the new project => ', project.toString());
        const newProject = await this.projectRepository.saveProject(project);
        return this.changeProject(newProject);
    }

    public async updateProject(project: Project): Promise<any | undefined> {
        this.log.info('update the project => ', project.toString());
        const updatedProject = await this.projectRepository.saveProject(project);
        return this.changeProject(updatedProject);
    }

    public async deleteProject(id: string): Promise<void> {
        this.log.info('Delete a project');
        await this.projectRepository.deleteProject(id);
        return;
    }

    public changeProject(project: Project): ProjectResponse {
        if (project) {
            const remainHours = project.expectedHours - project.usedHours;
            return {
                ...project,
                remainHours,
                completPercent: Math.floor(project.usedHours / project.expectedHours * 100),
            };
        } else {
            return undefined;
        }
    }
}
