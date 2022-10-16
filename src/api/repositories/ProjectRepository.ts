import { projectMockService } from '../../database/ProjectMock';
import { EntityRepository, Repository } from 'typeorm';
import { Project } from '../models/Project';

@EntityRepository(Project)
export class ProjectRepository extends Repository<Project> {
    /**
     * Find One project by project_id
     */
    public findByProjectId(id: string): Promise<any> {
        const query = `SELECT * from project WHERE id = "${id}"`;
        const projects = projectMockService.getProject(query);
        return projects;
    }

    /**
     * Get All Projects List
     */
    public findAllProjects(): Promise<any | undefined> {
        const query = `SELECT * from project`;
        const projects = projectMockService.getAllProjects(query);
        return projects;
    }

    /**
     * Get Projects by search project name
     */
    public findByNameSearch(name: string): Promise<any> {
        const query = `SELECT * from project WHERE name = "${name}"`;
        const projects = projectMockService.getProject(query);
        return projects;
    }

    /**
     * Create or Update the Project
     */
    public saveProject(project: Project): Promise<any> {
        const query = `SELECT * from project WHERE name = "${name}"`;
        const projects = projectMockService.getProject(query);
        return projects;
    }

    /**
     * Delete Project
     */
    public deleteProject(id: string): Promise<any> {
        return this.query(``);
    }
}
